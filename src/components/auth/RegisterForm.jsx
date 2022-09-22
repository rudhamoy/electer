import React, { useState } from 'react'
import { Input, Checkbox } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const InputField = ({ labelName, onChange, value }) => (
  <div className="my-6 flex flex-col gap-y-2 w-full">
    <Input placeholder={labelName} value={value} onChange={onChange} />
  </div>
)

const RegisterForm = ({setShowLogin}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const userForm = {
      email,
      username,
      password
    }

    try {
      const res = await axios.post('http://37.44.244.212/api/auth/users/', userForm, {
      headers: {
        'Content-Type': "application/json",
      }
    })
    console.log(res)
    // navigate('/login')
    setShowLogin(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="font-bold text-lg text-center">Sign Up</h1>
      <form onSubmit={submitHandler}>
        <InputField labelName="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <InputField labelName="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField labelName="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Checkbox>I Agree with  <span className="text-blue-500">Terms of service</span></Checkbox>
        <button className="bg-blue-500 p-2 w-full text-white rounded-md my-4">GET STARTED</button>
      </form>
    </div>
  )
}

export default RegisterForm