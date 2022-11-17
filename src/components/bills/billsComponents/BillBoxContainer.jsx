import React from 'react'

const BillBoxCointainer = ({children}) => {
  return (
    <div className="borderImp rounded-md p-1 px-2 bg-gray-50 text-xs h-[250px]">
        {children}
    </div>
  )
}

export default BillBoxCointainer