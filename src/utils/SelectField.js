import React from 'react'
import { Select } from 'antd'

const SelectField = ({ placeholder,defaultValue, children, onChange }) => {
    const onSearch = (value) => {
      console.log('search:', value);
    };
    return (
      <Select
        defaultValue={defaultValue}
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        {children}
      </Select>
    )
  }

export default SelectField