import React from 'react'
import { Select } from 'antd'

const SelectField = ({ placeholder, defaultValue, children, onChange, size, mode, optionLabelProp, maxTagCount }) => {
  const onSearch = (value) => {
    console.log('search:', value);
  };
  return (
    <div className="border rounded-md">
      <Select
        className="w-full"
        dropdownStyle={{borderRadius: "8px", padding: "5px", border: "0.5px solid lightgrey"}}
        bordered={false}
        defaultValue={defaultValue}
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        size={size}
        mode={mode}
        optionLabelProp={optionLabelProp}
        maxTagCount={maxTagCount}
      >
        {children}
      </Select>
    </div>
  )
}

export default SelectField