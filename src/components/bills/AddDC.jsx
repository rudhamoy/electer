import React, { useState } from 'react'
import { Select, DatePicker } from 'antd'

import SelectField from '../../utils/SelectField';
import InputField from '../../utils/InputField'
import PurchaseOrderList from './PurchaseOrderList';

const { Option } = Select

const AddDC = () => {

    const [client, setClient] = useState('')
    const [prepared, setPrepared] = useState('')
    const [quotationValid, setQuotationValid] = useState('')
    const [cgstRate, setCgstRate] = useState(1)
    const [sgstRate, setSgstRate] = useState(2)
    const [igstRate, setIgstRate] = useState(3)
    const [utgstRate, setUtgstRate] = useState(4)

     // utils
     const [add, setAdd] = useState(false)

     const totalTaxRate = parseInt(igstRate) + parseInt(cgstRate) + parseInt(sgstRate) + parseInt(utgstRate)

    return (
        <div className="relative">
            {/* select client/vendor, select PO raise, required date */}
            <div className="grid grid-cols-2 gap-x-3 borderImp rounded-md p-2">

                <div className='flex flex-col my-2'>
                    <label className="" htmlFor="category">Select Client:</label>
                    <SelectField
                        placeholder="Select client"
                        onChange={value => setClient(value)}
                    >
                        <Option value="one">Option one</Option>
                        <Option value="two">Option Two</Option>
                        <Option value="three">Option Three</Option>
                    </SelectField>
                </div>

                <InputField my="2" labelName="Mode of transport/vehicle" />
                <InputField my="2" labelName="Vehicle Number" />
                <InputField my="2" labelName="Driver Name" />
            </div>

             {/* Tax */}
             <div className="grid grid-cols-4 gap-x-3 borderImp rounded-md p-2 my-5">
                <InputField my="2" labelName="CGST Rate" />
                <InputField my="2" labelName="SGST Rate" />
                <InputField my="2" labelName="IGST Rate" />
                <InputField my="2" labelName="UTGST Rate" />
            </div>

            {/* create quotation list */}
            <div>
                <PurchaseOrderList 
                setAdd={setAdd} add={add}
                igstRate={igstRate} setIgstRate={setIgstRate}
                cgstRate={cgstRate} setCgstRate={setCgstRate}
                sgstRate={sgstRate} setSgstRate={setSgstRate}
                utgstRate={utgstRate} setUtgstRate={setUtgstRate}
                tax={totalTaxRate}
                />
            </div>

        </div>
    )
}

export default AddDC