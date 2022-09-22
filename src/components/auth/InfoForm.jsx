import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ImageUploader from '../ImageUploader';
import { fetchSystemUser } from '../../features/auth/AuthSlice';

const InputField = ({ labelName, onChange, value }) => (
    <div className="my-6 flex flex-col gap-y-2 w-full">
      <Input placeholder={labelName} value={value} onChange={onChange} />
    </div>
  )

const InfoForm = () => {
    const [designation, setDesignation] = useState('')
    const [mobile, setMobile] = useState('')
    const [profile, setProfile] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { auth, systemUser } = useSelector(state => state.auth)

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
          const res = await axios.post('http://37.44.244.212/api/system-user/', {designation, mobile_no: mobile, custom_user:auth.id }, {
            headers: {
              'Content-Type': "application/json",
              "Authorization": `Token ${auth.authToken}`
            }
          })
          console.log(res)
          navigate('/')
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
      dispatch(fetchSystemUser())
    }, [ dispatch])

    useEffect(() => {
      if(systemUser?.length > 0) {
        window.localStorage.setItem('systemUID', JSON.stringify({ systemUserId: systemUser ? systemUser[0]?.id : null }))
        navigate('/')
      }
    })

    useEffect(() => {
      if(auth.authToken === '') {
        navigate('/login')
      }
    }, [auth])

  return (
    <section className='borderImp rounded-md w-[300px] p-2'>
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