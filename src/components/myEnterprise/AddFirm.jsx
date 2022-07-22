import React from 'react'


const InputField = ({ labelName }) => (
    <div className="my-6 flex flex-col w-[220px]">
      <label htmlFor={labelName}>{labelName}</label>
      <input type="text" className="bg-gray-300 mt-2" />
    </div>
  )

const AddFirm = () => {
  return (
    <div className="grid grid-cols-2">
        {/* Left */}
        <div className="w-[50%]">
          {/* Logo and name */}
          <div className="flex gap-x-5 items-center">
            <div className="flex flex-col justify-center">
              <input placeholder="Upload" className="h-32 px-3 bg-gray-300" />
              <label htmlFor="logo">Company Logo</label>
            </div>
            <div>
              <InputField labelName="Company Name" />
              <InputField labelName="Place of Business" />
            </div>
          </div>

          <div>
            {/* Address */}
            {/* <InputField labelName="Company Address" /> */}
            <div className="my-6">
              <label htmlFor="company address">Company Address</label>
            <textarea name="address" id="" cols="30" rows="5" className="bg-gray-300 w-[440px] mt-2"></textarea>
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
            <div className="flex gap-x-5 items-center">
              <InputField labelName="GSTIN" />
              <InputField labelName="Company Started on" />
            </div>
            <InputField labelName="PAN Details" />
          </div>

        </div>

        {/* Right */}
        <div className="">

          <div className="grid grid-cols-2">
            {/* business type */}
            <div className='flex flex-col'>
              <label>Business Type</label>
              <select name="businessType" className='bg-gray-300 w-[220px] mt-2'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {/* industry type */}
            <div className='flex flex-col'>
              <label>Industry Type</label>
              <select name="businessType" className='bg-gray-300 w-[220px] mt-2'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <InputField labelName="Mobile Number" />
            <InputField labelName="Email Id" />

          </div>

          <div className='my-6'>
            {/* business owner details */}
            <p className="font-semibold">Business Owner Details</p>
            <div className="grid grid-cols-2">
            <InputField labelName="First Name" />
            <InputField labelName="last Name" />
            {/* firm type */}
            <div className='flex flex-col my-6'>
              <label>Firm Type</label>
              <select name="businessType" className='bg-gray-300 w-[220px] mt-2'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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