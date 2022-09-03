import React, { useState, useEffect } from 'react'
import { Select, Radio } from 'antd';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'
import ImageUploader from '../ImageUploader'
import { modalBtnCondition } from '../../features/activity/activitySlice';
import { fetchBusinessById, createBusiness, fetchBizAddress } from '../../features/enterprise/enterpriseSlice';

const { Option } = Select

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AddFirm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector(state => state.auth.auth.authToken);
  const { businessById, bizAddress } = useSelector(state => state.enterprise)
  const { modalBtn } = useSelector(state => state.activity)

  let query = useQuery()
  let id = query.get("id")



  const [companyName, setCompanyName] = useState("")
  const [businessPlace, setBusinessPlace] = useState("")

  const [country, setCountry] = useState('')
  const [states, setStates] = useState('')
  const [pin, setPin] = useState('')
  const [locality, setLocality] = useState('')
  const [landmark, setLandmark] = useState('')

  const [gstReg, setGstReg] = useState('')
  const [gstin, setGstin] = useState('')
  const [companyStarted, setCompanyStarted] = useState('')
  const [pan, setPan] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [industryTypes, setIndustryType] = useState('')
  const [mobNum, setMobNum] = useState('')
  const [email, setEmail] = useState('')

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [firmType, setFirmType] = useState('')

  const [businessTypeId, setBusinessTypeId] = useState()


  // const baseUrl = 'http://37.44.244.212/api/'

  const cancelHadnler = async (e) => {
    e.preventDefault()
    dispatch(modalBtnCondition(''))
    navigate('/my_enterprise?tab=firm')
  }

  const nextHandler = (e) => {
    e.preventDefault()

    const businessData = {
      businessType,
      industryTypes,
      companyName,
      country,
      states,
      locality,
      pin,
      landmark
    }

    dispatch(createBusiness(businessData))
    dispatch(modalBtnCondition(''))
    navigate('/my_enterprise?tab=firm')

  }

  useEffect(() => {
    if (id) {
      dispatch(fetchBusinessById(id))
      dispatch(fetchBizAddress())
    }
  }, [id])

  useEffect(() => {
    if (id) {
      setCompanyName(businessById.company_name)
      setBusinessType(businessById.business_type.name)
      setIndustryType(businessById.IndustryType.name)
      bizAddress.map(item => {
        if(item.business === parseInt(id)) {
          setCountry(item.country)
          setStates(item.state)
          setLocality(item.locality)
          setPin(item.pin)
          setLandmark(item.remarks)
        }
      })
    }
  }, [id])


  return (
    <div className="grid grid-cols-2 gap-x-10">
      {/* Left */}
      <div className="px-4">
        {/* Logo and name */}
        <div className="flex">
          <div className="flex flex-col justify-center w-[40%]">
            <ImageUploader />
            <label htmlFor="logo">Company Logo</label>
          </div>
          <div className="w-full">
            <InputField labelName="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            <InputField labelName="Place of Business" value={businessPlace} onChange={e => setBusinessPlace(e.target.value)} />
          </div>
        </div>

        <div>
          {/* Address */}
          {/* <InputField labelName="Company Address" /> */}
          <div className="my-6">
            <div className="grid grid-cols-2 gap-x-4">
              <InputField labelName="Country" value={country} onChange={e => setCountry(e.target.value)} />
              <InputField labelName="State" value={states} onChange={e => setStates(e.target.value)} />
              <InputField labelName="Locality" value={locality} onChange={e => setLocality(e.target.value)} />
              <InputField labelName="Pin" value={pin} onChange={e => setPin(e.target.value)} />
            </div>
            <InputField labelName="Landmarks" value={landmark} onChange={e => setLandmark(e.target.value)} />
          </div>

          {/* gst */}
          <div>
            <p>Are you GST Registered</p>
            <Radio.Group value={gstReg} onChange={e => setGstReg(e.target.value)}>
              <Radio value="yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </Radio.Group>
          </div>
          {/* GSTIn and pan */}
          <div className=" flex items-center gap-x-4">
            <InputField labelName="GSTIN" value={gstin} onChange={e => setGstin(e.target.value)} />
            <div className="w-full">
              <label htmlFor="companyStarted">Company Started on</label>
              <input type="date" className="h-8 border w-full px-2" />
            </div>
          </div>
          <InputField labelName="PAN Details" value={pan} onChange={e => setPan(e.target.value)} />
        </div>

      </div>

      {/* Right */}
      <div className="px-4">

        <div className="grid grid-cols-2 gap-x-4">
          {/* business type */}
          <div className='flex flex-col'>
            <label>Business Type</label>
            <SelectField
              placeholder="Select business type"
              defaultValue={modalBtn === 'edit' ? businessById.business_type.name : null}
              value={businessType}
              onChange={value => setBusinessType(value)}
            >
              <Option value="manufacturer">Manufacturer</Option>
              <Option value="retailer">Retailer</Option>
              <Option value="wholesaler">Wholesaler</Option>
              <Option value="distributor">Distributor</Option>
              <Option value="services">Services</Option>
            </SelectField>
          </div>
          {/* industry type */}
          <div className='flex flex-col'>
            <label>Industry Type</label>
            <SelectField
              placeholder="Select industry type"
              defaultValue={modalBtn === 'edit' ? businessById.IndustryType.name : null}
              value={industryTypes}
              onChange={value => setIndustryType(value)}>
              <Option value="agriculture">Agriculture</Option>
              <Option value="healthcare">Healthcare</Option>
            </SelectField>
          </div>
          <InputField labelName="Mobile Number" value={mobNum} onChange={e => setMobNum(e.tagret.value)} />
          <InputField labelName="Email Id" value={email} onChange={e => setEmail(e.target.value)} />

        </div>

        <div className='mt-6'>
          {/* business owner details */}
          <p className="font-semibold">Business Owner Details</p>
          <div className="grid grid-cols-2 gap-x-4">
            <InputField labelName="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} />
            <InputField labelName="Last Name" value={lastname} onChange={e => setLastname(e.tagret.value)} />
            {/* firm type */}
            <div className='flex flex-col my-6'>
              <label>Firm Type</label>
              <SelectField placeholder="Select firm type" value={firmType} onChange={e => setFirmType(e.target.value)}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </SelectField>
            </div>
            <InputField labelName="Add Partner" />
          </div>
        </div>
        {/* button */}
        <div className="flex justify-around gap-x-5 items-center">
          <button onClick={cancelHadnler} className="p-2 px-4 rounded-md bg-red-500 text-blue-50 font-semibold my-6 w-full">Cancel</button>
          <button onClick={nextHandler} className="p-2 px-4 rounded-md bg-blue-500 text-blue-50 font-semibold my-6 w-full">Next</button>
        </div>
      </div>
    </div>
  )
}

export default AddFirm