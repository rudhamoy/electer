import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import ImageUploader from '../ImageUploader';

const InputField = ({ labelName, onChange, value }) => (
    <div className="my-6 flex flex-col gap-y-2 w-full">
      <Input placeholder={labelName} value={value} onChange={onChange} />
    </div>
  )

const InfoForm = () => {
    const [designation, setDesignation] = useState('')
    const [mobile, setMobile] = useState('')
    const [profile, setProfile] = useState([])

    const user = useSelector(state => state.auth.auth.id)
    console.log(user)

    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://37.44.244.212/api/system-user/', {designation, mobile_no: mobile, custom_user:user }, {
            headers: {
              'Content-Type': "application/json",
            }
          })
          console.log(res)
    }

  return (
    <section className='shadow-md rounded-sm w-[300px] p-2'>
        <h1 className="font-bold text-lg text-center">Add Info</h1>
         <form onSubmit={submitHandler}>
        <InputField labelName="Designation" value={designation} onChange={e => setDesignation(e.target.value)} />
        <InputField labelName="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} />
        <ImageUploader />
        <button className="bg-blue-500 p-2 w-full text-white rounded-sm my-4">Submit Info</button>
      </form>
    </section>
  )
}

export default InfoForm