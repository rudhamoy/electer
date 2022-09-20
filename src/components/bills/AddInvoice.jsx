import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createSalesInvoice } from '../../features/bills/billsSlice';
import { fetchClients } from '../../features/client/clientSlice'
import { fetchSales } from '../../features/account/accountSlice'
import CreateSale from '../accounts/CreateSale'
import Tax from './Tax'
import SelectClient from './SelectClient'
import InvoiceForm from './InvoiceForm';

const AddInvoice = ({ setAddInvoice }) => {

    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.clients)
    const { systemUserId } = useSelector(state => state.auth)
    const { sales } = useSelector(state => state.accounts)

    const [invoiceNo, setInvoiceNo] = useState('invo1238')
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

    const [items, setItems] = useState([])
    const [salesOrderData, setSalesOrderData] = useState([])

    // utils
    const [editClient, setEditClient] = useState(false)
    const [add, setAdd] = useState(false)
    const [editTax, setEditTax] = useState(false)
    const [next, setNext] = useState(false)
    const [newArr, setNewArr] = useState([])

    const [salesOrder, setSalesOrder] = useState([])

    useEffect(() => {
        dispatch(fetchClients())
        dispatch(fetchSales())
    }, [dispatch])

    // calculate total amount along with tax inclusive
    let sum = 0;
    items.forEach(element => {
        sum += element.total_price;
    });

    // calculate total amount along without tax
    let totalAmount = 0;
    items.forEach(element => {
        totalAmount += element.total_amount;
    });

    const totalTaxRate = parseInt(igstRate) + parseInt(cgstRate) + parseInt(sgstRate) + parseInt(utgstRate)

    // count total slab rates of all the items
    useEffect(() => {
        let sgst = 0
        let cgst = 0
        let igst = 0
        let utgst = 0
       items.forEach(el => {
        sgst += el.sgst_slab_rate
        const sgstCalc =  ((sgst / 100) * sum)
        setTotalSgst(sgstCalc)
        cgst += el.cgst_slab_rate
        const cgstCalc =  ((cgst / 100) * sum)
        setTotalCgst(cgstCalc)
        igst += el.igst_slab_rate
        const igstCalc =  ((igst / 100) * sum)
        setTotalIgst(igstCalc)
        utgst += el.utgst_slab_rate
        const utgstCalc =  ((utgst / 100) * sum)
        setTotalUtgst(utgstCalc)
       })
       console.log(sgst, cgst, igst)
    }, [sum])

    // actual list for sale order api
    useEffect(() => {
        newArr.map(item => {
            const orderList = {
                quantity: item.quantity,
                total_price: item.total_price,
                system_user: item.system_user,
                product: item.product,
                cgst_slab_rate: item.cgst_slab_rate_id,
                sgst_slab_rate: item.sgst_slab_rate_id,
                igst_slab_rate: item.igst_slab_rate_id,
                utgst_slab_rate: item.utgst_slab_rate_id
            }
            const newItems = {
                ...orderList,
                client,
                date: invoiceDate,
            }
            const salesOrderList = {
                ...item,
                client,
                date: invoiceDate,
            }
            
            setSalesOrderData([...salesOrderData, newItems])
            setSalesOrder([...salesOrder, salesOrderList])
            
        })
    }, [newArr])

    const submitHandler = () => {
        const invoiceData = {
            total_sales: salesOrderData,
            invoice_no: invoiceNo,
            invoice_date: invoiceDate,
            total_invoice_value: totalInvoiceValue,
            total_texable_value: totalTaxableValue,
            total_igst: totalIgst,
            total_cgst: totalCgst,
            total_sgst: totalSgst,
            total_utgst: totalUtgst,
            client: client,
            system_user: systemUserId.id,
        }

        dispatch(createSalesInvoice(invoiceData))
        // setAddInvoice(false)
    }
    console.log('sum', sum)
    console.log('items', items)
    console.log('salesOrder', salesOrder)
    console.log('salesOrderData', salesOrderData)
    console.log('newArr', newArr)
    console.log(igstRate, cgstRate, sgstRate, utgstRate)

    return (
        <>
            {next === true ? (
                <InvoiceForm
                    client={client}
                    clients={clients}
                    date={invoiceDate}
                    orderList={salesOrder}
                    totalCgst={totalCgst}
                    totalSgst={totalSgst}
                    totalIgst={totalIgst}
                    totalUtgst={totalUtgst}
                    totalAmount={totalAmount}
                    grandTotal={sum}
                    submitHandler={submitHandler}
                />
            ) : (
                <div className={`relative text-xs`}>
                    <SelectClient
                        editClient={editClient}
                        setEditClient={setEditClient}
                        setClient={setClient}
                        setInvoiceDate={setInvoiceDate}
                        clients={clients}

                    />
                    <div>
                        <Tax
                            editTax={editTax}
                            setEditTax={setEditTax}
                            cgstRate={cgstRate}
                            setCgstRate={setCgstRate}
                            sgstRate={sgstRate}
                            setSgstRate={setSgstRate}
                            igstRate={igstRate}
                            setIgstRate={setIgstRate}
                            utgstRate={utgstRate}
                            setUtgstRate={setUtgstRate}
                        />
                        <CreateSale
                            add={add}
                            setNext={setNext}
                            setAdd={setAdd}
                            client={client}
                            items={items}
                            setItems={setItems}
                            newArr={newArr}
                            setNewArr={setNewArr}
                            tax={totalTaxRate}
                            cgstRate={cgstRate}
                            sgstRate={sgstRate}
                            igstRate={igstRate}
                            utgstRate={utgstRate}
                            salesOrder={salesOrderData}
                            setSalesOrder={setSalesOrderData}
                            invoiceDate={invoiceDate}
                        />
                    </div>
                </div >)}

        </>
    )
}

export default AddInvoice