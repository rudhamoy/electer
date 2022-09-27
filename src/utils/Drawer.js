import React from 'react'
import { GrFormClose } from 'react-icons/gr'

const Drawer = ({ setOpen, children, title }) => {

    return (
        <div style={{ backgroundColor: '#00000070' }} className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] z-50">
            <div className="fixed flex items-center h-[100%] right-0 w-[51%] bg-white">
                <div className="w-[100%] h-[100%]">
                    {/* header */}
                    <div className="flex justify-between items-baseline mb-6 border-b pt-2 px-8 bg-blue-50">
                        <p className="font-semibold text-lg">{title}</p>
                        <div className="flex gap-x-2 items-center">
                            {/* <button className="border rounded-md p-1 px-3 bg-blue-500 text-white" onClick={() => setOpen(false)}>Submit</button> */}
                            <button className="border rounded-md text-xs p-1 px-3 bg-white hover:bg-red-400 hover:text-gray-50" onClick={() => setOpen(false)}>Close</button>
                        </div>
                    </div>
                    <div className="px-6 pb-10 overflow-y-auto h-[90vh]">
                        {children}
                    </div>
                </div>
                    <button className="p-2 bg-white rounded-full absolute -ml-4"><GrFormClose onClick={() => setOpen(false)} /></button>
            </div>
        </div>
    )
}

export default Drawer