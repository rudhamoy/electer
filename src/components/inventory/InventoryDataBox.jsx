import React from 'react'
import './inventory.css'

const InventoryDataBox = ({icon, title, numData}) => {
  return (
    <div className="bg-white p-2 rounded-md w-[150px] h-[110px] relative inventory__box">
        {/* icon */}
        <img src={icon} alt="icoon" className="w-[20px]" />
        {/* title */}
        <p className="text-gray-400 text-xs font-semibold my-2 mt-3">{title}</p>
        {/* number data */}
        <p className="font-bold text-xl text-gray-700 absolute bottom-2 -mb-1">{numData}</p>
    </div>
  )
}

export default InventoryDataBox