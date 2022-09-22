import { Tabs, Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { fetchSalesInvoice } from '../../features/bills/billsSlice';
import { fetchClients, getClientById } from '../../features/client/clientSlice';

const { TabPane } = Tabs;

const Invoice = ({ setAddInvoice }) => {
    const dispatch = useDispatch()

    const baseUrl = 'http://37.44.244.212/api'
    const { authToken } = useSelector(state => state.auth.auth)
    const { invoices } = useSelector(state => state.bills)
    const { clients } = useSelector(state => state.clients)

    // const [invoiceList, setInvoiceList] = useState([])

    useEffect(() => {
        dispatch(fetchSalesInvoice())
        dispatch(fetchClients())
    }, [dispatch])

    const invoiceList = []
    invoices.forEach((item) => {
        // const res = await axios.get(`${baseUrl}/client/${item.client}/`, { headers: { 'Authorization': `Token ${authToken}` } })
        const client = clients?.find(i => i.id === item.client)
        const invoiceListing = {
            ...item,
            clientName: client.name
        }
        return invoiceList.push(invoiceListing)
    })


    return (
        <div>

            <div className="flex justify-between items-baseline">
                <p className="font-semibold">Invoice</p>
                <div className="flex gap-x-4 text-xs">
                    <button className="flex items-center gap-x-1 rounded-full"><GrList /> Templates</button>
                    <button onClick={() => setAddInvoice(true)} className="p-2 flex items-center gap-x-1 text-blue-500 hover:bg-gray-50 rounded-full font-semibold"><BsPlus className="text-base" /> Create New</button>
                </div>
            </div>

            <div className="borderImp rounded-md p-1 px-2 bg-gray-50 text-xs">
                <Tabs size="small" defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span className="text-xs font-semibold">
                                History
                            </span>
                        }
                        key="1"
                    >
                        <div className="text-xs">
                            {invoiceList.map((item, index) => {
                                return (
                                    <div key={item.id} className="flex justify-between items-center border-b">
                                        <div>
                                        <p className="font-semibold">{item.clientName}</p>
                                        <div className="grid grid-cols-2 divide-x-2">
                                        <p className="text-cyan-500">{item.invoice_no}</p>
                                        <p className="pl-2 text-gray-400 text-[11px]">{item.invoice_date}</p>
                                        </div>
                                        </div>
                                       <div>
                                       <p className="font-semibold">₹{item.total_invoice_value}</p>
                                       <p>SENT</p>
                                       </div>

                                    </div>
                                )
                            })}
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className="text-xs font-semibold">
                                Saved Invoices
                            </span>
                        }
                        key="2"
                    >
                        <h1>tab pane two content</h1>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className="text-xs font-semibold">
                                Recieved Invoices
                            </span>
                        }
                        key="3"
                    >
                        <h1>tab pane three content</h1>
                    </TabPane>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default Invoice