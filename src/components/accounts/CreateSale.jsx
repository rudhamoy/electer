import React, { useEffect, useState } from 'react'
import { Select, Badge, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai'

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

    const [date, setDate] = useState('')
    const [client, setClient] = useState()
    const [product, setProduct] = useState()
    const [qty, setQty] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [items, setItems] = useState([])
    const [allTotal, setAllTotal] = useState()
    const [newArr, setNewArr] = useState([])
    const [itemPriceList, setItemPriceList] = useState([])

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
                    setTotalPrice(item.selling_price * qty)
                }
            })
        }
        countPrice()
    }, [qty, product])


    const badgeButton = (item, index) => (
        <AiFillCloseCircle
            className='text-lg text-red-500 cursor-pointer'
            onClick={() => {
                const remove = newArr.splice(index, 1)
                const newA = newArr.filter(i => i.client !== remove.client)
                setNewArr(newA)
            }}
        />
    )

   let totalPayment =  newArr.length === 0 ? 0 : (
         itemPriceList.reduce((a, b) => a + b)
    )

    // const total = 12345

    const salesData = {
        // date,
        order: items,
        total: totalPayment
    }
    const formData = {
            date,
            client,
            product,
            quantity: parseInt(qty),
            total_price: totalPrice,
    }

    // save handler
    const saveHandler = (e) => {
        e.preventDefault()
        setItems([...items, formData])
        setQty('')
        setTotalPrice('')
    }

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createSales(salesData))
    }

    return (
        <div>
            <form className="grid grid-cols-2 gap-x-5">
                {/** Left */}
                <div className="">
                    <p className="font-semibold">Add Item</p>
                    <div>
                    <div className='my-2 flex flex-col gap-y-2 w-full'>
                    <label htmlFor="date" className="font-semibold">Select Date: </label>
                        <DatePicker dateFormat={dateFormat} onChange={(date, dateString) => {
                            setDate(dateString)
                        }}
                        />
                    </div>                   
                        <div className='flex flex-col my-2'>
                            <label className="" htmlFor="category">Client</label>
                            <SelectField
                                placeholder="Select cient"
                                onChange={value => setClient(value)}
                            >
                                {clients.map(item => (
                                    <Option key={item.id} value={item.id}>{item.name}</Option>
                                ))}

                            </SelectField>
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className="" htmlFor="category">Product</label>
                            <SelectField
                                placeholder="Select product"
                                onChange={value => setProduct(value)}
                            >
                                {products.map(item => (
                                    <Option key={item.id} value={item.id}>{item.item_name}</Option>
                                ))}
                            </SelectField>
                        </div>
                        <InputField my="2" type="number" labelName="Quantity" value={qty} onChange={e => setQty(e.target.value)} />
                        <InputField my="2" type="number" labelName="Total Price" value={totalPrice} />
                        {/* Save into the list button */}
                        <button className="p-2 bg-blue-500 rounded-sm w-full text-white" onClick={saveHandler}>Save item</button>
                    </div>
                </div>
                {/* right */}
                <div>
                    <p className="font-semibold mb-2">Details</p>
                    {newArr.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3">
                            <Badge count={badgeButton(item, index)} offset={[7, 10]}>
                                <div className="border rounded-sm my-1 text-xs p-1 leading-[8px]">
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
                    <p>Total Payment : {totalPayment}</p>
                        {/* Submit to api */}
                    <button className="p-2 bg-blue-500 rounded-sm w-full text-white" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSale