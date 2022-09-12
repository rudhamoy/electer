import React from 'react'
import { Input } from 'antd';

const InputField = ({ labelName, value, onChange, type, my, size }) => {
    return (
    <div className={`my-${my ? my : "6"} flex flex-col w-full`}>
      <label htmlFor={labelName}>{labelName}</label>
      <div className="border rounded-md">
        <Input bordered={false} size={size} type={type} placeholder={labelName} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default InputField