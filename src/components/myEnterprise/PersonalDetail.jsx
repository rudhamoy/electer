import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { Input } from 'antd';
import ImageUploader from '../ImageUploader';
import InputField from '../../utils/InputField'

// const InputField = ({ labelName }) => (
//   <div className="my-6 flex flex-col gap-y-2 w-full">
//     <label htmlFor={labelName}>{labelName}</label>
//     <Input placeholder={labelName} />
//   </div>
// )

const PersonalDetail = () => {
  return (
    <div className="grid grid-cols-2 space-x-20">

      {/* Left */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Personal Details</h1>
        {/* photo */}
        <ImageUploader />
        <div >
          <InputField labelName="First Name" />
        </div>
        <div >
          <InputField labelName="Last Name" />
        </div>
        <div >
          <InputField labelName="Designation" />
        </div>
        <div >
          <InputField labelName="Mobile Number" />
        </div>
        <div >
          <InputField labelName="Email Id" />
        </div>

        <button className="p-2 px-4 rounded-md bg-blue-500 text-blue-50 font-semibold my-6">Save Changes</button>

      </div>

      {/* Right */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Bank Details</h1>
        <div>
        <div >
          <InputField labelName="Bank Name" />
        </div>
        <div >
          <InputField labelName="Account Holder Name" />
        </div>
        <div >
          <InputField labelName="Account No" />
        </div>
        <div >
          <InputField labelName="IFSC Code" />
        </div>

          <div className="mt-12">
            <input type="radio" name="" />
            <p className="font-semibold">
              I accept all the terms and conditions and agree to proceed
            </p>
          </div>

          <button className="p-2 px-4 rounded-md bg-blue-500 text-blue-50 font-semibold my-6">Save Bank Details</button>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetail