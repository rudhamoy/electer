import React, { useState } from 'react'

import EnterpriseItem from './EnterpriseItem'

const EnterpriseList = ({ data }) => {

  return (
    <div className="p-4">
      <h1>Business List</h1>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="">
          {data && data.map((item, index) => (
            <EnterpriseItem key={index} item={item} />
          )
          )}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default EnterpriseList