import React, { useState, useEffect} from 'react'
import { Table, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { gstTwoColumn } from '../../data/table/GstTable'
import { fetchReceiveInvoice } from '../../features/bills/billsSlice'
import { fetchClients } from '../../features/client/clientSlice'

const GstTwo = () => {
    const dispatch = useDispatch()

    const { purchaseInvoice } = useSelector(state => state.bills)
    const { clients } = useSelector(state => state.clients)
    console.log(clients)

    // const listCol = [
    //     {
    //         title: 'Sl No',
    //         dataIndex: 'slNo',
    //         key: 'slNo',
    //         className: 'text-[10px]',
    //       },
    //     {
    //         title: 'Suplier Details',
    //         dataIndex: 'suplierDetails',
    //         key: 'suplierDetails',
    //         className: 'text-[10px]',
    //         render: (_, record) => {
    //             return (<Space wrap>
    //                 <button className="">
    //                     {record}
    //                 </button>
    //             </Space>
    //             )
    //         },
    //       },
    // ]

    useEffect(() => {
        dispatch(fetchReceiveInvoice())
        dispatch(fetchClients())
    }, [])

  return (
    <div>
        <div className="borderImp grid grid-cols-8 h-[500px] rounded-md">
            <div className="col-span-2 p-2">
                <div className="grid grid-cols-3 bg-gray-50 rounded-md px-2 pt-2">
                    <p className="col-span-1 font-semibold">SL No</p>
                    <p className='col-span-2 font-semibold'>Suplier Details</p>
                </div>
                <div>
                    {clients.map((item, index) => (
                            <ul className="p-2 pt-2">
                                <li className="grid grid-cols-3 cursor-pointer" key={item.id}>
                                <span className='col-span-1 text-gray-600'>{index}</span>
                                <span className='col-span-2 text-gray-600'>{item.name}</span>
                                </li>
                            </ul>
                    ))}
                </div>
            </div>
            <div className="col-span-6 border-l-2 p-6 bg-white">
                <div className="grid grid-cols-2 mb-10">
                    <p>Supplier Name: <span className="font-semibold">Zion Infratech Pvt Ltd</span></p>
                    <p>Total Invoice: <span className="font-semibold">64</span></p>
                    <p>Total Taxable Value: <span className="font-semibold">₹ 8,10,860</span></p>
                    <p>Total ITC: <span className="font-semibold">₹ 1,08,450</span></p>
                </div>
                <Table columns={gstTwoColumn} />
            </div>
        </div>
    </div>
  )
}

export default GstTwo