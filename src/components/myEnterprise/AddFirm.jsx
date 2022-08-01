import React from 'react'
import { Input, Select } from 'antd';

import ImageUploader from '../ImageUploader'
const { Option } = Select

const InputField = ({ labelName }) => (
  <div className="my-6 flex flex-col w-full">
    <label htmlFor={labelName}>{labelName}</label>
    <Input placeholder={labelName} />
    {/* <input type="text" className="bg-gray-300 mt-2" /> */}
  </div>
)

const SelectField = ({ placeholder, children }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };
  return (
    <Select
    
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
    >
      {/* <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option> */}
      {children}
    </Select>
  )
}

const AddFirm = () => {


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
            <InputField labelName="Company Name" />
            <InputField labelName="Place of Business" />
          </div>
        </div>

        <div>
          {/* Address */}
          {/* <InputField labelName="Company Address" /> */}
          <div className="my-6">
            <label htmlFor="company address">Company Address</label>
            <textarea name="address" id="" cols="30" rows="5" className="border w-[440px] mt-2"></textarea>
          </div>
          {/* gst */}
          <div>
            <p>Are you GST Registered</p>
            <div className="flex justify-around items-center my-6">
              <div>
                <input type="radio" value="Yes" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="radio" value="No" />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          {/* GSTIn and pan */}
          <div className=" flex items-center gap-x-4">
            <InputField labelName="GSTIN" />
            <div className="w-full">
              <label htmlFor="companyStarted">Company Started on</label>
              <input type="date" className="h-8 border w-full px-2" />
            </div>
          </div>
          <InputField labelName="PAN Details" />
        </div>

      </div>

      {/* Right */}
      <div className="px-4">

        <div className="grid grid-cols-2 gap-x-4">
          {/* business type */}
          <div className='flex flex-col'>
            <label>Business Type</label>
            <SelectField placeholder="Select business type">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </SelectField>
          </div>
          {/* industry type */}
          <div className='flex flex-col'>
            <label>Industry Type</label>
            <SelectField placeholder="Select industry type">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </SelectField>
          </div>
          <InputField labelName="Mobile Number" />
          <InputField labelName="Email Id" />

        </div>

        <div className='my-6'>
          {/* business owner details */}
          <p className="font-semibold">Business Owner Details</p>
          <div className="grid grid-cols-2 gap-x-4">
            <InputField labelName="First Name" />
            <InputField labelName="Last Name" />
            {/* firm type */}
            <div className='flex flex-col my-6'>
              <label>Firm Type</label>
              <SelectField placeholder="Select firm type">
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
          <button className='p-2 px-4 rounded-md bg-blue-500 text-white text-sm'>Save</button>
          <button className='p-2 px-4 rounded-md bg-blue-500 text-white text-sm'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default AddFirm