import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'

const PurchaseOrder = () => {
    return (
        <div>
            <div className="flex justify-between items-baseline">
                <p className="font-semibold">Purchase Order</p>
                <div className="flex gap-x-4 text-xs">
                    <button className="px-3 flex items-center gap-x-1  bg-gray-50 rounded-full leading-3"><GrList /> Templates</button>
                    <button className="p-2 flex items-center gap-x-1 text-blue-500 hover:bg-gray-50 rounded-full font-semibold"><BsPlus className="text-base" /> Create New</button>
                </div>
            </div>
        </div>
    )
}

export default PurchaseOrder