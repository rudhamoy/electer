import React, { useState, useEffect } from 'react'
import { Table, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { gstTwoColumn } from '../../data/table/GstTable'
import { fetchReceiveInvoice } from '../../features/bills/billsSlice'
import { fetchClients } from '../../features/client/clientSlice'

const GstTwo = () => {
    const dispatch = useDispatch()

    const { purchaseInvoice } = useSelector(state => state.bills)
    const { clients } = useSelector(state => state.clients)

    const [details, setDetails] = useState([])

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

    // list of received invoices
    const receivedInvoiceList = []
    purchaseInvoice.forEach((item, index) => {
        const client = clients?.find(i => i.id === item.client)
        
        const receiveInvoiceListing = {
            ...item,
            index,
            clientName: client?.name
        }
        return receivedInvoiceList.push(receiveInvoiceListing)
    })
    console.log(receivedInvoiceList)

    const selectHandler = (item) => {
        console.log('cliecked item list', item.id)
        setDetails([item])
    }
    console.log(details)

    // check if the client name exist more than two
    // const clientFreq = receivedInvoiceList.find(client => client.clientName.length > 1)
    // console.log(clientFreq)

    return (
        <div>
            <div className="borderImp grid grid-cols-8 h-[500px] rounded-md">
                <div className="col-span-2 p-2">
                    <div className="grid grid-cols-3 bg-gray-50 rounded-md px-2 pt-2">
                        <p className="col-span-1 font-semibold">SL No</p>
                        <p className='col-span-2 font-semibold'>Suplier Details</p>
                    </div>
                    <div>
                            <ul className="pt-2">
                        {receivedInvoiceList.map((item, index) => (
                                <li className="grid grid-cols-3 hover:bg-gray-50 hover:rounded-md p-2 cursor-pointer" key={item.id} onClick={() => selectHandler(item)}>
                                    <span className='col-span-1 text-gray-600'>{index + 1}</span>
                                    <span className='col-span-2 text-gray-600'>{item.clientName}</span>
                                </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-6 border-l-2 p-6 bg-white">
                    <div className="grid grid-cols-2 mb-10">
                        <p>Supplier Name: <span className="font-semibold">{details[0]?.clientName}</span></p>
                        <p>Total Invoice: <span className="font-semibold">64</span></p>
                        <p>Total Taxable Value: <span className="font-semibold">₹ {details[0]?.total_texable_value.toFixed(2)}</span></p>
                        <p>Total ITC: <span className="font-semibold">₹ 1,08,450</span></p>
                    </div>
                    <Table columns={gstTwoColumn} dataSource={details} />
                </div>
            </div>
        </div>
    )
}

export default GstTwo