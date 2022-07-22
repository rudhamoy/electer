import React from 'react'


const InventoryDataBox = ({icon, title, numData}) => {
  return (
    <div className="bg-white border shadow-md p-3 rounded-md w-[150px] h-[120px] relative">
        {/* icon */}
        <img src={icon} alt="icoon" className="w-[20px]" />
        {/* title */}
        <p className="text-gray-400 text-xs font-semibold my-2 mt-3">{title}</p>
        {/* number data */}
        <p className="font-bold text-xl absolute bottom-3">{numData}</p>
    </div>
  )
}

export default InventoryDataBox