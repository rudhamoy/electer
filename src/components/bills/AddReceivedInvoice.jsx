import React, { useState,  useEffect } from 'react';
import { Select, DatePicker } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import InputField from '../../utils/InputField';
import SelectField from '../../utils/SelectField'
import ReceivedOrderList from './ReceivedOrderList';
import { fetchClients } from '../../features/client/clientSlice';
import { createReceivedInvoice } from '../../features/bills/billsSlice';

const { Option } = Select

const AddReceivedInvoice = () => {
    const dispatch = useDispatch()

    const [invoiceDate, setInvoiceDate] = useState()
    const [invoiceNo, setInvoiceNo] = useState()
    const [mobileNo, setMobileNo] = useState()
    const [traderName, setTraderName] = useState('')
    const [gstin, setGstin] = useState('')
    const [states, setStates] = useState('')

    const [cgstRate, setCgstRate] = useState(1)
    const [sgstRate, setSgstRate] = useState(2)
    const [igstRate, setIgstRate] = useState(3)
    const [utgstRate, setUtgstRate] = useState(4)

    const [totalCgst, setTotalCgst] = useState(0)
    const [totalIgst, setTotalIgst] = useState(0)
    const [totalSgst, setTotalSgst] = useState(0)
    const [totalUtgst, setTotalUtgst] = useState(0)
    const [totalTaxableValue, setTotalTaxableValue] = useState(0)
    const [totalInvoiceValue, setTotalInvoiceValue] = useState(0)

    const [purchaseItem, setPurchaseItem] = useState([])
    const [productListData, setProductListData] = useState([])

    // utils
    const [add, setAdd] = useState(false)

    // calcaulate total tax
    const totalTaxRate = parseInt(igstRate) + parseInt(cgstRate) + parseInt(sgstRate) + parseInt(utgstRate)
    console.log(purchaseItem)

    // get object from redux
    const { clients } = useSelector(state => state.clients)
    const { systemUser } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchClients())
    }, [dispatch])

    useEffect(() => {
        const cgstList = []
       purchaseItem.forEach(item => {
        cgstList.push(item.cgst)
       })
        const igstList = []
       purchaseItem.forEach(item => {
        igstList.push(item.igst)
       })
        const sgstList = []
       purchaseItem.forEach(item => {
        sgstList.push(item.sgst)
       })
        const utgstList = []
       purchaseItem.forEach(item => {
        utgstList.push(item.utgst)
       })
        const taxList = []
       purchaseItem.forEach(item => {
        taxList.push(item.taxAmount)
       })
        const amountList = []
       purchaseItem.forEach(item => {
        amountList.push(item.amount)
       })
       
    //    calculate each tax total
       setTotalCgst(cgstList.reduce((prev, current) => prev + current, 0))
       setTotalIgst(igstList.reduce((prev, current) => prev + current, 0))
       setTotalSgst(sgstList.reduce((prev, current) => prev + current, 0))
       setTotalUtgst(utgstList.reduce((prev, current) => prev + current, 0))
       setTotalTaxableValue(taxList.reduce((prev, current) => prev + current, 0))
       setTotalInvoiceValue(amountList.reduce((prev, current) => prev + current, 0))
    }, [purchaseItem])

    // actual list for sale order api
    useEffect(() => {
        purchaseItem.map(item => {
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
                client: traderName,
                cgst_slab_rate: item.cgst_slab_rate,
                sgst_slab_rate: item.sgst_slab_rate,
                igst_slab_rate: item.igst_slab_rate,
                utgst_slab_rate: item.utgst_slab_rate
            }
            const newItems = {
                ...orderList
            }
            
            setProductListData([...productListData, newItems])
            
        })
    }, [purchaseItem])

    // object to submit in the backend
    const submitData = {
        total_purchase: productListData,
        invoice_no: invoiceNo,
        invoice_date: invoiceDate,
        total_invoice_value: totalInvoiceValue,
        total_texable_value: totalTaxableValue,
        total_igst: totalIgst,
        total_cgst: totalCgst,
        total_sgst: totalSgst,
        total_utgst: totalUtgst,
        client: traderName,
        system_user: systemUser[0].id,
    }
    // submit to backend api
    const submitHandler = () => {
        dispatch(createReceivedInvoice(submitData))
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
                    <InputField type="number" my="2" labelName="Mobile Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)} />
                    <div className="my-2">
                            <label htmlFor="client">Trader Name</label>
                            <SelectField
                                placeholder="Select Client"
                                onChange={value => setTraderName(value)}
                            >
                                {clients.length > 0 && clients.map(item => (
                                    <Option key={item.id} className="rounded-md" value={item.id}>{item.name}</Option>
                                )
                                )}
                            </SelectField>
                        </div>
                    <InputField my="2" labelName="GSTIN" value={gstin} onChange={e => 
                        (e.target.value)} />
                    <InputField my="2" labelName="State" value={states} onChange={e => setStates(e.target.value)} />
                </div>
                <div className="grid grid-cols-4 gap-x-3 p-2">
                    <InputField my="2" labelName="Total Taxable Value" />
                    <InputField my="2" labelName="Integrated GST" />
                    <InputField my="2" labelName="Central GST" />
                    <InputField my="2" labelName="State GST" />
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
                <ReceivedOrderList
                    setAdd={setAdd} add={add}
                    igstRate={igstRate} setIgstRate={setIgstRate}
                    cgstRate={cgstRate} setCgstRate={setCgstRate}
                    sgstRate={sgstRate} setSgstRate={setSgstRate}
                    utgstRate={utgstRate} setUtgstRate={setUtgstRate}
                    tax={totalTaxRate}
                    setPurchaseItem={setPurchaseItem}
                />
            </div>

            {/* calculation */}
            <div className="mt-5">
                <p>Total Amount: <span>{totalInvoiceValue - totalTaxableValue}</span></p>
                <p>CGST: <span>₹ {totalCgst}</span></p>
                <p>IGST: <span>₹ {totalIgst.toFixed(2)}</span></p>
                <p>SGST: <span>₹ {totalSgst}</span></p>
                <p>UTGST: <span>₹ {totalUtgst}</span></p>
                <p>Grand Total: <span>{totalInvoiceValue}</span></p>
            </div>

            {/* submit button */}
            <div>
                <button className="bg-blue-500 px-5 p-2 rounded-md text-white" onClick={submitHandler}>Create Received Invoice</button>
            </div>
        </div>
    )
}

export default AddReceivedInvoice