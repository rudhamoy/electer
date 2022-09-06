import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";

import { fetchSystemUser, loginUser } from '../../features/auth/AuthSlice'

const InputField = ({ labelName, onChange, value }) => (
    <div className="my-6 flex flex-col gap-y-2 w-full">
      <Input placeholder={labelName} value={value} onChange={onChange} />
    </div>
  )

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState()

  const dispatch = useDispatch()
  let navigate = useNavigate();

  const { auth, systemUser} = useSelector(state => state.auth)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://37.44.244.212/api/auth/token/login/', {email, password})
      const res2 = await axios.get(`http://37.44.244.212/api/get-user-by-email/${email}`, {email})
      window.localStorage.setItem('user', JSON.stringify({token: res.data.auth_token, id: res2.data.id, isLogged: true}))
      dispatch(loginUser({authToken: res.data.auth_token, id: res2.data.id}))

      if(!systemUser) {
        navigate('/register?tab=addInfo')
      } else {
        navigate('/')
      }
     
      
    } catch (error) {
      console.log(error)
      setErrorMsg(error.response.data.non_field_errors)
    }
  }

  useEffect(() => {
    dispatch(fetchSystemUser())
  }, [dispatch])

  return (
    <div className='bg-white shadow-md rounded-sm w-[360px] p-6'>
        <h1 className="font-bold text-lg text-center">Sign in</h1>
        {errorMsg && (
          <p className="p-1 bg-red-200 border">{errorMsg[0]}</p>
        )}
        <form onSubmit={submitHandler}>
            <InputField labelName="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <InputField labelName="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <div className="flex justify-between">
            <Link to="/forgot_password">Forgot Password ?</Link>
            <Link to="/register">Sign Up ?</Link>
            </div>
            <button className="bg-blue-500 p-2 w-full text-white rounded-sm my-4">Sign in</button>
        </form>
    </div>
  )
}

export default LoginForm