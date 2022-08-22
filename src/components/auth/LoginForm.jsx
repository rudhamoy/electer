import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { loginUser } from '../../features/auth/AuthSlice'

const InputField = ({ labelName, onChange, value }) => (
    <div className="my-6 flex flex-col gap-y-2 w-full">
      <Input placeholder={labelName} value={value} onChange={onChange} />
    </div>
  )

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://37.44.244.212/api/auth/token/login/', {email, password})
      const res2 = await axios.get(`http://37.44.244.212/api/get-user-by-email/${email}`, {email})
      console.log(res, res2)
      window.localStorage.setItem('user', JSON.stringify({token: res.data.auth_token, id: res2.data.id, isLogged: true}))
      dispatch(loginUser({authToken: res.data.auth_token, id: res2.data.id}))
      navigate('/')
      // navigate('/register?tab=addInfo')
    } catch (error) {
      console.log(error)
    }
  }

  const user = window.localStorage.getItem('user')
  const getInfo = async () => {
    try {
      const res = await axios.get('http://37.44.244.212/api/custom-user/', {headers: {
        "Authorization": `Token ${user.token}`
      }})
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  // const checkUser = () => {
  //     if(!user) {
  //     dispatch(loginUser({authToken: user.token, id: user.id}))
  //   }
  //   }

  // useEffect(() => {
  //   checkUser()
  // }, [user])

  return (
    <div className='bg-white shadow-md rounded-sm w-[360px] p-6'>
        <h1 className="font-bold text-lg text-center">Sign in</h1>
        <form onSubmit={submitHandler}>
            <InputField labelName="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <InputField labelName="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="bg-blue-500 p-2 w-full text-white rounded-sm my-4">Sign in</button>
        </form>
        <button onClick={getInfo}>Get Info</button>
    </div>
  )
}

export default LoginForm