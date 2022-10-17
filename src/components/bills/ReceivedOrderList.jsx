import React, { useState, useEffect } from 'react'
import { Table, Select } from 'antd'
import { BsPlus } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'

import { purchaseInvoiceColumn } from '../../data/table/BillsTable'
import { fetchProducts } from '../../features/inventory/inventorySlice'
import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'

const { Option } = Select

const ReceivedOrderList = ({ add, setAdd, igstRate, sgstRate, cgstRate, utgstRate, tax, setPurchaseItem }) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.inventory)
    const { systemUser } = useSelector(state => state.auth)

    const [product, setProduct] = useState()
    const [qty, setQty] = useState()
    const [totalPriceWithoutTax, setTotalPriceWithoutTax] = useState()
    const [items, setItems] = useState([])
    const [itemList, setItemList] = useState([])

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

    const formData = {
        product,
        quantity: parseInt(qty),
        // total_price: parseInt(totalPrice),
        // amount: parseInt(totalPriceWithoutTax),
        system_user: systemUser[0].id,
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

     // actual list rendering
     useEffect(() => {
        items.map((item, index) => {
            // setItemPriceList([...itemPriceList, item.total_price])
            let { item_name, UOM, price } = products.find(i => i.id === item.product)

            const newItems = {
                ...item,
                item_name,
                UOM,
                price,
                igst: price * (igstRate/100).toFixed(2),
                cgst: price * (cgstRate/100).toFixed(2),
                sgst: price * (sgstRate/100).toFixed(2),
                utgst: price * (utgstRate/100).toFixed(2),
                taxAmount: (tax / 100) * price ,
                amount: parseInt(totalPriceWithoutTax) + ((tax / 100) * price),
                index,
                tax
            }

            setItemList([...itemList, newItems])
            setPurchaseItem([...itemList, newItems])
        })
    }, [items])

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <div className={`${add === true ? 'block absolute top-0 left-0 bottom-0 right-0 h-[100%] z-50 backdrop-blur-sm bg-white/30' : "hidden"}`}>
                <div className={`${add === true ? 'block absolute top-[38%] w-[100%] shadow-gray-500 z-50 bg-white' : "hidden"} border rounded-md shadow-md `}>
                    <div className="border-b  px-3 flex items-baseline justify-between">
                        <p className="font-semibold">Item List</p>
                        <button onClick={() => setAdd(!add)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${add === true && 'rotate-45 text-red-500'} text-base`} /></button>
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
            <div className="borderImp rounded-md text-xs">
                <div className="flex justify-between items-baseline border-b p-2">
                    <p>Item List</p>
                    <button className="flex gap-x-1 items-center text-blue-500" onClick={() => setAdd(true)}><BsPlus /> Add Item</button>
                </div>
                <div className="p-1">
                    <Table columns={purchaseInvoiceColumn} dataSource={itemList} />
                </div>
            </div>
        </div>
    )
}

export default ReceivedOrderList