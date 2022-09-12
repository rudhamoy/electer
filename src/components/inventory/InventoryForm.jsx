import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Select } from 'antd'
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../utils/InputField'
import SelectField from '../../utils/SelectField'
import { createProduct, editProduct } from '../../features/inventory/inventorySlice';
import { fetchSystemUser } from '../../features/auth/AuthSlice';


const { Option } = Select


const InventoryForm = ({ data, setShowAdd, setShowEdit }) => {
    const dispatch = useDispatch()

    const [sku, setSku] = useState()
    const [itemName, setItemName] = useState('')
    const [particular, setParticular] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [qty, setQty] = useState()
    const [uom, setUom] = useState('')
    const [unitPrice, setUnitPrice] = useState()
    // const [sellingPrice, setSellingPrice] = useState()
    const [size, setSize] = useState('')
    const [thickness, setThickness] = useState('')
    const [material, setMaterial] = useState('')
    const [color, setColor] = useState('')
    const [model, setModel] = useState('')

    const [systemId, setSystemId] = useState()

    const inventoryBtn = useSelector(state => state.activity.modalBtn)

    // Api and actions
    const baseUrl = 'http://37.44.244.212/api/'
    const {authToken, id} = useSelector(state => state.auth.auth)
    const {systemUser} = useSelector(state => state.auth)


    const submitHandler = async (e) => {
        e.preventDefault()
        const res1 = await axios.post(`${baseUrl}/product-category/`, { name: category }, { headers: { 'Authorization': `Token ${authToken}` } });
        console.log(res1)
        const res2 = await axios.post(`${baseUrl}/sub-category/`, { name: subCategory, parent_category: res1.data.id }, { headers: { 'Authorization': `Token ${authToken}` } });
        console.log(res2)
        let productData = {
            item_name: itemName,
            sku,
            quantity: parseInt(qty),
            UOM: uom,
            price: unitPrice,
            size,
            thickness,
            material,
            color,
            model,
            category: res1.data.id,
            sub_category: res2.data.id,
            perticulars: {
                name: particular
            },
            system_user: systemId
        }
        dispatch(createProduct(productData))
        setShowAdd(false)
    }
    const updateHandler =  async(e) => {
        e.preventDefault()
        let res1
        if(category !== data.category.name) {
             res1 = await axios.put(`${baseUrl}product-category/${data.category.id}/`, { name: category }, { headers: { 'Authorization': `Token ${authToken}` } })
            console.log(res1)
        }
        
        
        let editData = {
            id: data.id,
            item_name: itemName,
            sku,
            quantity: parseInt(qty),
            UOM: uom,
            price: unitPrice,
            // selling_price: sellingPrice,
            size,
            thickness,
            material,
            color,
            model,
            category: {
                name: category !== data.category.name ? res1.data.name : category
            },
            sub_category: {
                name: subCategory,
                parent_category: data.category.id
            },
            perticulars: {
                name: particular
            },
            system_user: systemId
        }
        dispatch(editProduct(editData))
        setShowEdit(false)
    }

    // Action Button - Save/edit
    const btnClass = "p-2 px-3 rounded-sm w-full text-white bg-blue-500"
    let btnContent = (
        inventoryBtn === 'add' ? (
            <button className={btnClass} onClick={submitHandler}>Add</button>
        ) : (
            inventoryBtn === 'edit' && (
                <button className={btnClass} onClick={updateHandler}>Update</button>
            )
        )
    )

    // show data or view details
    useEffect(() => {
        if (inventoryBtn === '' || inventoryBtn === 'edit') {
            setSku(data.sku)
            setUom(data.UOM)
            setColor(data.color)
            setItemName(data.item_name)
            setMaterial(data.material)
            setModel(data.model)
            setUnitPrice(data.price)
            setQty(data.quantity)
            setSize(data.size)
            setThickness(data.thickness)
            setParticular(data.particularName)
            setCategory(data.category.name)
            setSubCategory(data.sub_category.name)
        }
    }, [])

    useEffect(() => {
        dispatch(fetchSystemUser())
        systemUser.forEach(item => {
            if(item.custom_user.id === id) {
                setSystemId(item.id)
            }
        })
    }, [dispatch])


    return (
        <div className="grid grid-cols-2 gap-3">
            {/* Basic Details */}
            <div>
                <h1 className="mb-3 font-semibold">Basic Details</h1>
                <InputField my="3" type="number" labelName="SKU No" value={sku} onChange={e => setSku(e.target.value)} />
                <InputField my="3" labelName="Item Name" value={itemName} onChange={e => setItemName(e.target.value)} />
                <InputField my="3" labelName="Particular" value={particular} onChange={e => setParticular(e.target.value)} />
                <div className='flex flex-col my-3'>
                    <label className="" htmlFor="category">Category</label>
                    <SelectField placeholder="Category" defaultValue={(inventoryBtn === '' || inventoryBtn === 'edit') ? data?.catName : null} value={category} onChange={value => setCategory(value)} >
                        <Option value="chair">Chair</Option>
                        <Option value="table">Table</Option>
                    </SelectField>
                </div>
                <div className='flex flex-col my-3'>
                    <label className="" htmlFor="sub-Category">Sub-Category</label>
                    <SelectField placeholder="Sub-Category" defaultValue={(inventoryBtn === '' || inventoryBtn === 'edit') ? data?.subCatName : null} value={subCategory} onChange={value => setSubCategory(value)}>
                        <Option value="wood">Wood</Option>
                        <Option value="plastic">Plastic</Option>
                        <Option value="carbon">Carbon</Option>
                    </SelectField>
                </div>
                <InputField my="3" type="number" labelName="Quantity" value={qty} onChange={e => setQty(e.target.value)} />
                <div className='flex flex-col my-3'>
                    <label className="" htmlFor="uom">UOM</label>
                    <SelectField placeholder="UOM" defaultValue={(inventoryBtn === '' || inventoryBtn === 'edit') ? data?.UOM : null} value={uom} onChange={value => setUom(value)}>
                        <Option value="kilogram">KG</Option>
                        <Option value="gram">gram</Option>
                        <Option value="litre ">Litre </Option>
                    </SelectField>
                </div>
                <InputField my="3" labelName="Unit Price" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
                {/* <InputField my="3" labelName="Selling Price" value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} /> */}
            </div>
            {/* Specification Details */}
            <div>
                <h1 className="mb-3 font-semibold">Specification Details</h1>
                <InputField my="3" labelName="Size" value={size} onChange={e => setSize(e.target.value)} />
                <InputField my="3" labelName="Thickness" value={thickness} onChange={e => setThickness(e.target.value)} />
                <InputField my="3" labelName="Material" value={material} onChange={e => setMaterial(e.target.value)} />
                <InputField my="3" labelName="Color" value={color} onChange={e => setColor(e.target.value)} />
                <InputField my="3" labelName="Model" value={model} onChange={e => setModel(e.target.value)} />
                {btnContent}
            </div>
        </div>
    )
}

export default InventoryForm