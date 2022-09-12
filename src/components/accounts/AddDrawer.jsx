import React from 'react'
import CreateSale from './CreateSale'

const AddDrawer = ({ setOpen }) => {
    return (
        <div style={{ backgroundColor: '#00000070' }} className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] z-50">
            <div className="fixed h-[100%] right-0 w-[50%] bg-white">
                {/* header */}
                <div className="flex justify-between mb-6 border-b p-1 px-8 bg-blue-50">
                    <p className="font-semibold text-lg">Create a new sale</p>
                    <div className="flex gap-x-2 items-center">
                        <button className="border rounded-md p-1 px-3 bg-blue-500 text-white" onClick={() => setOpen(false)}>Submit</button>
                        <button className="border rounded-md p-1 px-3 bg-white hover:bg-red-400 hover:text-gray-50" onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
                <div className="p-1 px-8">
                <CreateSale />
                </div>
            </div>
        </div>
    )
}

export default AddDrawer