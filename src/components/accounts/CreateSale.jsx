import React, { useEffect, useState } from 'react'
import { Select, Badge, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'
import axios from 'axios'

import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'
import { fetchClients } from '../../features/client/clientSlice'
import { fetchProducts } from '../../features/inventory/inventorySlice'
import { createSales } from '../../features/account/accountSlice'

const { Option } = Select

const CreateSale = () => {
    const dispatch = useDispatch()
    const { clients } = useSelector(state => state.clients)
    const { products } = useSelector(state => state.inventory)
    const { systemUserId, auth } = useSelector(state => state.auth)

    const { authToken } = auth
    const baseUrl = 'http://37.44.244.212/api/'

    const [date, setDate] = useState('')
    const [client, setClient] = useState()
    const [product, setProduct] = useState()
    const [qty, setQty] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [cgstRate, setCgstRate] = useState()
    const [igstRate, setIgstRate] = useState()
    const [sgstRate, setSgstRate] = useState()
    const [utgstRate, setUtgstRate] = useState()

    const [items, setItems] = useState([])
    const [allTotal, setAllTotal] = useState()
    const [newArr, setNewArr] = useState([])
    const [itemPriceList, setItemPriceList] = useState([])

    const [totalItemsPrice, setTotalItemPrice] = useState()

    const dateFormat = 'YYYY/MM/DD';

    useEffect(() => {
        dispatch(fetchClients())
        dispatch(fetchProducts())
    }, [dispatch])


    // actual list rendering
    useEffect(() => {
        items.map(item => {
            setItemPriceList([...itemPriceList, item.total_price])
            let { name } = clients.find(i => i.id === item.client)
            let { item_name } = products.find(i => i.id === item.product)

            const newItems = {
                ...item,
                name,
                item_name
            }

            setNewArr([...newArr, newItems])
        })
    }, [items])

    // to count total price of an item with qty
    useEffect(() => {
        const countPrice = () => {
            products.forEach(item => {
                if (item.id === product) {
                    setTotalPrice(item.price * qty)
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

    // const total = 12345

    // const salesData = {
    //     date,
    //     order: items,
    //     total: totalItemsPrice
    // }
    const formData = {
        date,
        client,
        product,
        quantity: parseInt(qty),
        total_price: totalPrice,
        cgst_slab_rate: cgstRate,
        sgst_slab_rate: sgstRate,
        igst_slab_rate: igstRate,
        utgst_slab_rate: utgstRate,
        system_user: systemUserId?.id
    }

    // save handler
    const saveHandler = (e) => {
        e.preventDefault()
        setItems([...items, formData])
        // setQty('')
        // setTotalPrice('')
    }

    // submit handler
    const submitHandler = async (e) => {
        e.preventDefault()

        const cgst = await axios.post(`${baseUrl}slabs/cgst/`, { readable_name: "ct", slab_rate: cgstRate }, { headers: { 'Authorization': `Token ${authToken}` } })
        console.log(cgst)
        const igst = await axios.post(`${baseUrl}slabs/igst/`, { readable_name: "it", slab_rate: igstRate }, { headers: { 'Authorization': `Token ${authToken}` } })
        console.log(igst)
        const sgst = await axios.post(`${baseUrl}slabs/sgst/`, { readable_name: "st", slab_rate: sgstRate }, { headers: { 'Authorization': `Token ${authToken}` } })
        console.log(sgst)
        const utgst = await axios.post(`${baseUrl}slabs/utgst/`, { readable_name: "utt", slab_rate: utgstRate }, { headers: { 'Authorization': `Token ${authToken}` } })
        console.log(utgst)

        const salesData = {
            date,
            client,
            product,
            quantity: parseInt(qty),
            cgst_slab_rate: cgst.data.id,
            sgst_slab_rate: sgst.data.id,
            igst_slab_rate: igst.data.id,
            utgst_slab_rate: utgst.data.id,
            system_user: systemUserId?.id
        }
        dispatch(createSales(salesData))
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

    console.log(qty)

    return (
        <div>
            <form className="grid grid-cols-3 gap-4">
                {/* top */}
                <div className="p-3 border rounded-md col-span-3 grid grid-cols-2 gap-x-4 shadow-md">
                    {/* select client              */}
                    <div className='flex flex-col my-2'>
                        <label className="" htmlFor="category">Client</label>
                        <SelectField

                            placeholder="Select client"
                            onChange={value => setClient(value)}
                        >
                            {clients.map(item => (
                                <Option className="rounded-md" key={item.id} value={item.id}>{item.name}</Option>
                            ))}

                        </SelectField>
                    </div>
                    {/* date */}
                    <div className='my-2 flex flex-col w-full'>
                        <label htmlFor="date" className="">Select Date: </label>
                        <div className="border rounded-md">
                            <DatePicker className="w-full" bordered={false} dateFormat={dateFormat} onChange={(date, dateString) => {
                                setDate(dateString)
                            }}
                            />
                        </div>
                    </div>
                </div>
                {/** Left */}
                <div className="border rounded-md shadow-md col-span-2">
                    <div className="border-b pt-1 px-3">
                        <p className="font-semibold">Add Item</p>
                    </div>
                    <div className="p-2 px-3 grid grid-cols-2 gap-x-4">
                        {/* Select Product */}
                        <div className="col-span-2">
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
                        {/* tax and gst */}
                        <InputField my="2" labelName="CGST Rate" value={cgstRate} onChange={e => setCgstRate(e.target.value)} />
                        <InputField my="2" labelName="SGST Rate" value={sgstRate} onChange={e => setSgstRate(e.target.value)} />
                        <InputField my="2" labelName="IGST Rate" value={igstRate} onChange={e => setIgstRate(e.target.value)} />
                        <InputField my="2" labelName="UTGST Rate" value={utgstRate} onChange={e => setUtgstRate(e.target.value)} />
                        {/* Total Price */}
                        <InputField my="2" type="number" labelName="Total Price" value={totalPrice} />
                        {/* Save into the list button */}
                        <button className="mt-2 p-2 border font-semibold rounded-md w-full" onClick={saveHandler}>Save item</button>
                    </div>
                </div>
                {/* right */}
                <div className="">
                    <p className="font-semibold mb-2">Details</p>
                    {newArr.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3">
                            <Badge count={badgeButton(item, index)} offset={[7, 10]}>
                                <div className="border rounded-md my-1 text-xs p-2 leading-[8px]">
                                    <p>Item: {item.item_name}</p>
                                    <p>Client: {item.name}</p>
                                    <div className="flex gap-x-6">
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total: {item.total_price} /-</p>
                                    </div>
                                </div>
                            </Badge>
                        </div>
                    ))}
                    <p>Total Item Price : {totalItemsPrice}</p>
                    {/* Submit to api */}
                    <button className="p-2 bg-blue-500 rounded-md w-full text-white" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSale