import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'

const PersonalDetail = () => {
  return (
    <div className="grid grid-cols-2 space-x-20">

      {/* Left */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Personal Details</h1>
        {/* photo */}
        <div className="flex justify-center items-center my-6">
          <div className="relative rounded-full p-1 h-24 w-24 border-2 flex justify-center items-center">
            <BsFillPersonFill className="text-9xl" />
            <button className="absolute top-0 right-0 p-1 rounded-full border bg-white shadow-md">
              <GoPencil className="text-xl " />
            </button>
          </div>
        </div>
        {/* first name */}
        <div className="flex flex-col gap-y-2 my-6">
          <label htmlFor="firstName" className="font-semibold text-gray-600">First Name</label>
          <input type="text" className="bg-gray-200 p-1" />
        </div>
        {/* Last name */}
        <div className="flex flex-col gap-y-2 my-6">
          <label htmlFor="firstName" className="font-semibold text-gray-600">Last Name</label>
          <input type="text" className="bg-gray-200 p-1" />
        </div>
        {/* Designation */}
        <div className="flex flex-col gap-y-2 my-4">
          <label htmlFor="firstName" className="font-semibold text-gray-600">Designation</label>
          <input type="text" className="bg-gray-200 p-1" />
        </div>
        {/* Mobile No */}
        <div className="flex flex-col gap-y-2 my-6">
          <label htmlFor="firstName" className="font-semibold text-gray-600">Mobile No</label>
          <input type="number" className="bg-gray-200 p-1" />
        </div>
        {/* Email Id*/}
        <div className="flex flex-col gap-y-2 my-6">
          <label htmlFor="firstName" className="font-semibold text-gray-600">Email Id</label>
          <input type="email" className="bg-gray-200 p-1" />
        </div>

        <button className="p-2 px-4 rounded-full bg-blue-500 text-blue-50 font-semibold my-6">Save Changes</button>

      </div>

      {/* Right */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Bank Details</h1>
        <div>
          {/* bank name */}
          <div className="flex flex-col gap-y-2 my-6">
            <label htmlFor="firstName" className="font-semibold text-gray-600">Bank Name</label>
            <input type="text" className="bg-gray-200 p-1" />
          </div>
          {/* Account holder name */}
          <div className="flex flex-col gap-y-2 my-6">
            <label htmlFor="firstName" className="font-semibold text-gray-600">Account Holder Name</label>
            <input type="text" className="bg-gray-200 p-1" />
          </div>
          {/* Account No */}
          <div className="flex flex-col gap-y-2 my-4">
            <label htmlFor="firstName" className="font-semibold text-gray-600">Account No</label>
            <input type="number" className="bg-gray-200 p-1" />
          </div>
          {/* IFSC Code */}
          <div className="flex flex-col gap-y-2 my-6">
            <label htmlFor="firstName" className="font-semibold text-gray-600">IFSC Code</label>
            <input type="number" className="bg-gray-200 p-1" />
          </div>

          <div className="my-12">
            <input type="radio" name="" />
            <p className="font-semibold">
              I accept all the terms and conditions and agree to proceed
            </p>
          </div>

          <button className="p-2 px-4 rounded-full bg-blue-500 text-blue-50 font-semibold my-6">Save Bank Details</button>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetail