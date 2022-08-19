import React from 'react'
import { Input, Checkbox } from 'antd';

const InputField = ({ labelName }) => (
    <div className="my-6 flex flex-col gap-y-2 w-full">
      <Input placeholder={labelName} />
    </div>
  )

const RegisterForm = () => {
  return (
    <div>
        <form>
            <InputField labelName="Full Name" />
            <InputField labelName="Email" />
            <InputField labelName="Password" />
            <Checkbox>I Agree with  <span className="text-blue-500">Terms of service</span></Checkbox>
            <button className="bg-blue-500 p-2 w-full text-white rounded-sm my-4">GET STARTED</button>
        </form>
    </div>
  )
}

export default RegisterForm