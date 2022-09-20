import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Select, DatePicker } from 'antd'

import SelectField from '../../utils/SelectField'

const { Option } = Select

const SelectClient = ({ editClient, setEditClient, setClient, setInvoiceDate, clients }) => {
    return (
        <div>

            <div className={`${editClient === true ? 'block absolute top-0 left-0 bottom-0 right-0 h-[100%] z-50 backdrop-blur-sm bg-white/30' : "hidden"}`}>
                <div className={`${editClient === true && 'absolute top-[-1%] w-[100%] shadow-gray-500 z-50 bg-white'} border rounded-md shadow-md`}>
                    <div className="border-b  px-3 flex items-baseline justify-between">
                        <p className="font-semibold">Client</p>
                        <button onClick={() => setEditClient(!editClient)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${editClient === true && 'rotate-45 text-red-500'} text-base`} /> {editClient !== true && 'Edit Client'}</button>
                    </div>
                    <div className='grid grid-cols-2 p-2 px-4 gap-x-4'>

                        <div className="my-2">
                            <label htmlFor="client">Select Client</label>
                            <SelectField
                                placeholder="Select Client"
                                onChange={value => setClient(value)}
                            >
                                {clients.length > 0 && clients.map(item => (
                                    <Option key={item.id} className="rounded-md" value={item.id}>{item.name}</Option>
                                )
                                )}
                            </SelectField>
                        </div>
                        {/* date */}
                        <div className='my-2 flex flex-col w-full'>
                            <label htmlFor="date" className="">Select Date: </label>
                            <div className="border rounded-md">
                                <DatePicker className="w-full" bordered={false} onChange={(date, dateString) => {
                                    setInvoiceDate(dateString)
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mb-4`}>
                <div className="borderImp rounded-md">
                    <div className="border-b  px-3 flex items-baseline justify-between">
                        <p className="font-semibold">Client</p>
                        <button onClick={() => setEditClient(!editClient)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${editClient === true && 'rotate-45 text-red-500'} text-base`} /> {editClient !== true && 'Edit Client'}</button>
                    </div>
                    <div className='grid grid-cols-2 p-2 px-4 gap-x-4'>

                        <div className="my-2">
                            <label htmlFor="client">Select Client</label>
                            <SelectField
                                placeholder="Select Client"
                                onChange={value => setClient(value)}
                            >
                                {clients.length > 0 && clients.map(item => (
                                    <Option key={item.id} className="rounded-md" value={item.id}>{item.name}</Option>
                                )
                                )}
                            </SelectField>
                        </div>
                        {/* date */}
                        <div className='my-2 flex flex-col w-full'>
                            <label htmlFor="date" className="">Select Date: </label>
                            <div className="border rounded-md">
                                <DatePicker className="w-full" bordered={false} onChange={(date, dateString) => {
                                    setInvoiceDate(dateString)
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SelectClient