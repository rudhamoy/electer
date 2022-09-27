import React, { useEffect, useState } from 'react'
import { Select, Badge, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import axios from 'axios'

import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'
import { fetchClients } from '../../features/client/clientSlice'
import { fetchProducts } from '../../features/inventory/inventorySlice'
import { createSales } from '../../features/account/accountSlice'

const { Option } = Select

const CreateSale = ({
    add, setAdd,
    client, setNext,
    items, setItems,
    newArr, setNewArr,
    tax,
    cgstRate,
    sgstRate,
    igstRate,
    utgstRate,
    salesOrderData, setSalesOrderData,
    invoiceDate
}) => {
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.clients)
    const { products } = useSelector(state => state.inventory)
    const { systemUserId, auth } = useSelector(state => state.auth)

    const { authToken } = auth
    const baseUrl = 'http://37.44.244.212/api/'

    const [product, setProduct] = useState()
    const [qty, setQty] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalPriceWithoutTax, setTotalPriceWithoutTax] = useState()

    const [itemPriceList, setItemPriceList] = useState([])
    const [itemList, setItemList] = useState([])
    const [totalItemsPrice, setTotalItemPrice] = useState()

    useEffect(() => {
        dispatch(fetchClients())
        dispatch(fetchProducts())
    }, [dispatch])


    // actual list rendering
    useEffect(() => {
        items.map((item, index) => {
            setItemPriceList([...itemPriceList, item.total_price])
            let { item_name, UOM, price } = products.find(i => i.id === item.product)

            const newItems = {
                ...item,
                item_name,
                UOM,
                price,
                index,
                tax
            }

            setItemList([...itemList, newItems])
        })
    }, [items])
   
    // to count total price of an item with qty and with total tax
    useEffect(() => {
        const countPrice = () => {
            products.forEach(item => {
                if (item.id === product) {
                    const price = ((tax / 100) * item.price) + item.price
                    const calc = price * qty
                    setTotalPrice(calc.toFixed(2))
                }
            })
        }
        countPrice()
    }, [qty, product])

    // to count total price of an item with qty 
    useEffect(() => {
        const countPrice = () => {
            products.forEach(item => {
                if (item.id === product) {
                    const calc = item.price * qty
                    setTotalPriceWithoutTax(calc.toFixed(2))
                }
            })
        }
        countPrice()
    }, [qty, product])

    useEffect(() => {
        let totalPayment = newArr.length === 0 ? 0 : (
            itemPriceList.reduce((a, b) => a + b)
        )

        setTotalItemPrice(totalPayment)
    }, [items, itemPriceList])

    const formData = {
        product,
        quantity: parseInt(qty),
        total_price: parseInt(totalPrice),
        total_amount: parseInt(totalPriceWithoutTax),
        system_user: systemUserId?.id,
        cgst_slab_rate: parseInt(cgstRate),
        sgst_slab_rate: parseInt(sgstRate),
        igst_slab_rate: parseInt(igstRate),
        utgst_slab_rate: parseInt(utgstRate),
        taxes: parseInt(igstRate) + parseInt(cgstRate) + parseInt(sgstRate) + parseInt(utgstRate),
    }

    // save handler
    const saveHandler = (e) => {
        e.preventDefault()
        setItems([...items, formData])
        setAdd(false)
    }

    // submit handler
    const nextHandler = (e) => {
        e.preventDefault()

        items.map(async(item, index) => {
            let { item_name, UOM, price } = products.find(i => i.id === item.product)

            const cgst = await axios.post(`${baseUrl}slabs/cgst/`, { readable_name: "ct", slab_rate: item.cgst_slab_rate }, { headers: { 'Authorization': `Token ${authToken}` } })
            console.log(cgst)
            const igst = await axios.post(`${baseUrl}slabs/igst/`, { readable_name: "it", slab_rate: item.igst_slab_rate }, { headers: { 'Authorization': `Token ${authToken}` } })
            console.log(igst)
            const sgst = await axios.post(`${baseUrl}slabs/sgst/`, { readable_name: "st", slab_rate: item.sgst_slab_rate }, { headers: { 'Authorization': `Token ${authToken}` } })
            console.log(sgst)
            const utgst = await axios.post(`${baseUrl}slabs/utgst/`, { readable_name: "utt", slab_rate: item.utgst_slab_rate }, { headers: { 'Authorization': `Token ${authToken}` } })
            console.log(utgst)

            const taxIds = {
                ...item,
                 item_name,
                UOM,
                price,
                index,
                cgst_slab_rate_id: cgst.data.id,
                sgst_slab_rate_id: sgst.data.id,
                igst_slab_rate_id: igst.data.id,
                utgst_slab_rate_id: utgst.data.id,
            }
            setNewArr([...newArr, taxIds])
            
        })
        setNext(true)
    }


    const badgeButton = (item, index) => (
        <AiFillCloseCircle
            className='text-lg text-red-500 cursor-pointer'
            onClick={() => {
                const remove = newArr.splice(index, 1)
                const newA = newArr.filter(i => i.client !== remove.client)
                setTotalItemPrice(totalItemsPrice - item.total_price)
                setNewArr(newA)
            }}
        />
    )

    return (
        <div>
            <div className={`${add === true ? 'block absolute top-0 left-0 bottom-0 right-0 h-[100%] z-50 backdrop-blur-sm bg-white/30' : "hidden"}`}>
                {/** Left */}
                <div className={`${add === true ? 'block absolute top-[38%] shadow-gray-500 z-50 bg-white' : "hidden"} border rounded-md shadow-md `}>
                    <div className="border-b  px-3 flex items-baseline justify-between">
                        <p className="font-semibold">Item List</p>
                        <button onClick={() => setAdd(!add)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${add === true && 'rotate-45 text-red-500'} text-base`} /> {add !== true && 'Add Item'}</button>
                    </div>
                    <div className="p-2 px-3 grid grid-cols-6 gap-x-4">
                        {/* Select Product */}
                        <div className="col-span-4">
                            <div className='flex flex-col my-2'>
                                <label className="" htmlFor="category">Product</label>
                                <SelectField

                                    placeholder="Select product"
                                    onChange={value => setProduct(value)}
                                >
                                    {products.map(item => (
                                        <Option className="rounded-md" key={item.id} value={item.id}>{item.item_name}</Option>
                                    ))}
                                </SelectField>
                            </div>
                        </div>
                        {/* input quantity */}
                        <InputField my="2" type="number" labelName="Quantity" value={qty} onChange={e => setQty(e.target.value)} />
                        {/* Total Price */}
                        <InputField my="2" type="number" labelName="Amount" value={totalPriceWithoutTax} />
                        <div className="">
                            <button className="mt-2 p-[5px] border-2 border-green-900 font-semibold rounded-md w-full text-green-900" onClick={saveHandler}>Save item</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="borderImp rounded-md h-[240px] relative">
                <div className="border-b  px-3 flex items-baseline justify-between">
                    <p className="font-semibold ">Item List</p>
                    <button onClick={() => setAdd(!add)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${add === true && 'rotate-45 text-red-500'} text-base`} /> {add !== true && 'Add Item'}</button>
                </div>
                <div className="p-2 px-3">
                    {itemList.map((item, index) => (
                        <div key={index} >
                            <Badge count={badgeButton(item, index)} offset={[7, 10]}>
                                <div className="flex gap-x-2 items-center border rounded-md my-1 text-xs p-2 leading-[8px]">
                                    <p>Item: {item.item_name}</p>
                                    <div className="flex gap-x-6">
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Amount: {item.total_price} /-</p>
                                    </div>
                                </div>
                            </Badge>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-1 w-full border-t p-1 px-3">
                    <div className="flex items-center justify-between">
                        <button className=" p-[6px] px-5 bg-blue-500 rounded-md text-white" onClick={nextHandler}>Next</button>
                        <p>Total Item Price : {totalItemsPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSale