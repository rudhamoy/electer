import React from 'react'

const InputForm = ({forName, labelName, type}) => {
    return (
        <div className="flex flex-col gap-y-2 my-3">
            <label className="text-xs font-semibold" htmlFor={forName}>{labelName}</label>
        <input type={type} className={`bg-gray-200 border outline-none px-1`} />
        </div>
    )
}

const InventoryForm = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
        {/* Basic Details */}
        <div>
            <h1 className="mb-3 font-semibold">Basic Details</h1>
        <InputForm type="text" forName="skuNo" labelName="SKU No" />
        <InputForm type="text" forName="itemName" labelName="Item Name" />
        <div className='flex flex-col gap-y-2 my-3'>
            <label className="text-xs font-semibold" htmlFor="category">Category</label>
            <select className="p-[2px] outline-none bg-gray-200">
                <option value="select">Select</option>
                <option value="chair">Chair</option>
                <option value="table">Table</option>
            </select>
        </div>
        <div className='flex flex-col gap-y-2 my-3'>
            <label className="text-xs font-semibold" htmlFor="subCategory">Sub-Category</label>
            <select className="p-[2px] outline-none bg-gray-200">
                <option value="select">Select</option>
                <option value="chair">Wood</option>
                <option value="table">Plastic</option>
                <option value="table">Carbon</option>
            </select>
        </div>
        <InputForm type="number" forName="qty" labelName="Quantity" />
        <div className='flex flex-col gap-y-2 my-3'>
            <label className="text-xs font-semibold" htmlFor="uom">UOM</label>
            <select className="p-[2px] outline-none bg-gray-200">
                <option value="select">Select</option>
                <option value="uom">UOM</option>
            </select>
        </div>
        <InputForm type="number" forName="unitPrice" labelName="Unit Price" />
        </div>
        {/* Specification Details */}
        <div>
        <h1 className="mb-3 font-semibold">Specification Details</h1>
        <InputForm type="number" forName="size" labelName="Size" />
        <InputForm type="number" forName="thickness" labelName="Thickness" />
        <InputForm type="number" forName="material" labelName="Material" />
        <InputForm type="text" forName="color" labelName="Color" />
        <InputForm type="number" forName="model" labelName="Model" />

        </div>
    </div>
  )
}

export default InventoryForm