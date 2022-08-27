import React from 'react'
import { Input } from 'antd';

const InputField = ({ labelName, value, onChange, type, my }) => {
    return (
    <div className={`my-${my ? my : "6"} flex flex-col w-full`}>
      <label htmlFor={labelName}>{labelName}</label>
      <Input type={type} placeholder={labelName} value={value} onChange={onChange} />
    </div>
  )
}

export default InputField