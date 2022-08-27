import React from 'react'

const EnterpriseList = ({data}) => {
  return (
    <div>
        <h1>List of business here</h1>
        {data && data.map((item, index) => (
            <div key={index}>{item.company_name}</div>
        ))}
    </div>
  )
}

export default EnterpriseList