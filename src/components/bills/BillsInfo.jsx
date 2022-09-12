import React from 'react'
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'

const BillsInfo = () => {
    return (
        <div className='borderImp rounded-md flex justify-between items-center p-3 bg-gray-50'>
            <div>
                <p className="text-gray-400 ">Total Invoice Value</p>
                <p className="font-bold text-xl">₹45,000</p>
            </div>
            <div>
                <div className="flex gap-x-2 ">
                    <p className="text-gray-400 ">Total Invoice Value</p>
                    <p className="text-xs leading-3"><span className="text-cyan-400">month</span></p>
                </div>
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-xl">₹22,000</p>
                    <p className="rounded-full bg-green-200 text-xs flex items-center px-2 text-green-600"><BsArrowUpShort /><span>26%</span></p>
                </div>
            </div>
            <div>
                <div className="flex gap-x-2 ">
                    <p className="text-gray-400 ">Recieved Invoice</p>
                    <p className="text-xs leading-3"><span className="text-cyan-400">month</span></p>
                </div>
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-xl">56</p>
                    <p className="rounded-full bg-red-200 text-xs flex items-center px-2 text-red-600"><BsArrowDownShort /><span>2%</span></p>
                </div>
            </div>
            <div>
                <div className="flex gap-x-2 ">
                    <p className="text-gray-400 ">Sent Invoice</p>
                    <p className="text-xs leading-3"><span className="text-cyan-400">month</span></p>
                </div>
                <div className="flex items-center gap-x-2">
                <p className="font-bold text-xl">576</p>
                    <p className="rounded-full bg-green-200 text-xs flex items-center px-2 text-green-600"><BsArrowUpShort /><span>4%</span></p>
                </div>
            </div>
        </div>
    )
}

export default BillsInfo