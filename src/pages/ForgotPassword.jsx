import React, { useState } from 'react';
import axios from 'axios'
import InputField from '../utils/InputField';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const saveHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://37.44.244.212/api/auth/users/reset_password/', {email})
        console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className="flex justify-center items-center h-[100%]">
        <div className="border shadow-md">
            <InputField labelName="Input Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={saveHandler}>Send Email</button>
        </div>
    </div>
  )
}

export default ForgotPassword