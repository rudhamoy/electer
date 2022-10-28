import React, { useState, useEffect } from 'react'
import { Select, DatePicker } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import InputField from '../../utils/InputField';
import SelectField from '../../utils/SelectField'
import { createSalesInvoice } from '../../features/bills/billsSlice';
import { fetchClients } from '../../features/client/clientSlice'
import { fetchSales } from '../../features/account/accountSlice'
import CreateSale from '../accounts/CreateSale'
import Tax from './Tax'
import SelectClient from './SelectClient'
import InvoiceForm from './InvoiceForm';
import SalesOrderList from './SalesOrderList';

const { Option } = Select

const AddInvoice = ({ setAddInvoice }) => {

    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.clients)
    const { systemUser } = useSelector(state => state.auth)

    const [invoiceNo, setInvoiceNo] = useState()
    const [invoiceDate, setInvoiceDate] = useState()
    const [totalInvoiceValue, setTotalInvoiceValue] = useState()
    const [totalTaxableValue, setTotalTaxableValue] = useState()

    const [totalIgst, setTotalIgst] = useState()
    const [totalCgst, setTotalCgst] = useState()
    const [totalSgst, setTotalSgst] = useState()
    const [totalUtgst, setTotalUtgst] = useState()
    const [totalSales, setTotalSales] = useState([])
    const [client, setClient] = useState()

    const [cgstRate, setCgstRate] = useState(6)
    const [igstRate, setIgstRate] = useState(6)
    const [sgstRate, setSgstRate] = useState(6)
    const [utgstRate, setUtgstRate] = useState(6)

    // utils
    const [add, setAdd] = useState(false)
    const [salesOrder, setSalesOrder] = useState([])
    const [salesItem, setSalesItem] = useState([])
    const [error, setError]= useState(false)

    useEffect(() => {
        dispatch(fetchClients())
        dispatch(fetchSales())
    }, [dispatch])

    const totalTaxRate = parseInt(igstRate) + parseInt(cgstRate) + parseInt(sgstRate) + parseInt(utgstRate)

    // count total slab rates of all the items
    useEffect(() => {
        const cgstList = []
       salesItem.forEach(item => {
        cgstList.push(item.cgst)
       })
        const igstList = []
       salesItem.forEach(item => {
        igstList.push(item.igst)
       })
        const sgstList = []
       salesItem.forEach(item => {
        sgstList.push(item.sgst)
       })
        const utgstList = []
       salesItem.forEach(item => {
        utgstList.push(item.utgst)
       })
        const taxList = []
       salesItem.forEach(item => {
        taxList.push(item.taxAmount)
       })
        const amountList = []
       salesItem.forEach(item => {
        amountList.push(item.amount)
       })
       
    //    calculate each tax total
       setTotalCgst(cgstList.reduce((prev, current) => prev + current, 0))
       setTotalIgst(igstList.reduce((prev, current) => prev + current, 0))
       setTotalSgst(sgstList.reduce((prev, current) => prev + current, 0))
       setTotalUtgst(utgstList.reduce((prev, current) => prev + current, 0))
       setTotalTaxableValue(taxList.reduce((prev, current) => prev + current, 0))
       setTotalInvoiceValue(amountList.reduce((prev, current) => prev + current, 0))
    }, [salesItem])

     // actual list for sale order api
     useEffect(() => {
        salesItem.map(item => {
            const orderList = {
                date: invoiceDate,
                quantity: item.quantity,
                igst: item.igst,
                cgst: item.cgst,
                sgst: item.sgst,
                utgst: item.utgst,
                total_price: parseInt(item.amount),
                system_user: item.system_user,
                product: item.product,
                client: client,
                cgst_slab_rate: item.cgst_slab_rate,
                sgst_slab_rate: item.sgst_slab_rate,
                igst_slab_rate: item.igst_slab_rate,
                utgst_slab_rate: item.utgst_slab_rate
            }
            const newItems = {
                ...orderList
            }
            
            setSalesOrder([...salesOrder, newItems])
            
        })
    }, [salesItem])

    const submitHandler = () => {
        const invoiceData = {
            total_sales: salesOrder,
            invoice_no: invoiceNo,
            invoice_date: invoiceDate,
            total_invoice_value: totalInvoiceValue,
            total_texable_value: totalTaxableValue,
            total_igst: totalIgst,
            total_cgst: totalCgst,
            total_sgst: totalSgst,
            total_utgst: totalUtgst,
            client: client,
            system_user: systemUser[0].id,
        }

        if(!client || !invoiceDate || !invoiceNo || !salesOrder.length) {
            setError(true)
        } else {
            dispatch(createSalesInvoice(invoiceData))
            // console.log('Submitted')
            setError(false)
        }
        // setAddInvoice(false)
    }

    return (
        <div className="text-xs">

            <div className="borderImp rounded-md">
                <div className="border-b p-2">
                    <p className="font-semibold">General Info</p>
                </div>
                <div className="grid grid-cols-3 gap-x-3 p-2">
                    {/* <InputField type="date" my="2" labelName="Invoice Date" /> */}
                    <div className='my-2 flex flex-col w-full'>
                            <label htmlFor="date" className="">Invoice Date: </label>
                            <div className="border rounded-md">
                                <DatePicker className="w-full" bordered={false} onChange={(date, dateString) => {
                                    setInvoiceDate(dateString)
                                }}
                                />
                            </div>
                        </div>
                    <InputField my="2" labelName="Invoice Number" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} />
                    <div className="my-2">
                            <label htmlFor="client">Client Name</label>
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
                </div>
            </div>

            {/* Tax */}
            <div className="grid grid-cols-4 gap-x-3 borderImp rounded-md p-2 my-5">
                <InputField my="2" labelName="CGST Rate" value={cgstRate} onChange={(e) => setCgstRate(e.target.value)} />
                <InputField my="2" labelName="SGST Rate" value={sgstRate} onChange={e => setSgstRate(e.target.value)} />
                <InputField my="2" labelName="IGST Rate" value={igstRate} onChange={e => setIgstRate(e.target.value)} />
                <InputField my="2" labelName="UTGST Rate" value={utgstRate} onChange={e => setUtgstRate(e.target.value)} />
            </div>

            {/* create purchase order list */}
            <div className="">
                <SalesOrderList
                    setAdd={setAdd} add={add}
                    igstRate={igstRate} setIgstRate={setIgstRate}
                    cgstRate={cgstRate} setCgstRate={setCgstRate}
                    sgstRate={sgstRate} setSgstRate={setSgstRate}
                    utgstRate={utgstRate} setUtgstRate={setUtgstRate}
                    tax={totalTaxRate}
                    setSalesItem={setSalesItem}
                />
            </div>

            {/* calculation */}
            <div className="mt-5">
                <p>Total Amount: <span>{totalInvoiceValue - totalTaxableValue}</span></p>
                <p>CGST: <span>₹ {totalCgst}</span></p>
                <p>IGST: <span>₹ {totalIgst}</span></p>
                <p>SGST: <span>₹ {totalSgst}</span></p>
                <p>UTGST: <span>₹ {totalUtgst}</span></p>
                <p>Grand Total: <span>{totalInvoiceValue}</span></p>
            </div>

            {/* submit button */}
            <div>
                {error === true && (
                    <div>
                        <p className='p-2 bg-red-200 rounded-md text-center'>Please Check the Mandatory Input Field</p>
                    </div>
                )}
                <button className="bg-blue-500 px-5 p-2 rounded-md text-white" onClick={submitHandler}>Create Invoice</button>
            </div>
        </div>
    )
}

export default AddInvoice