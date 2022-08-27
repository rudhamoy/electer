import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../utils/InputField'
import ImageUploader from '../ImageUploader'
import { createClient, editClient } from '../../features/client/clientSlice';

const { TextArea } = Input;

const ClientForm = ({ setShowAdd, setShowEdit, data }) => {
    const dispatch = useDispatch()
    const clientBtn = useSelector(state => state.activity.modalBtn)

    const [clientCode, setClientCode] = useState('')
    const [billingAddress, setBillingAddress] = useState('')
    const [contactPerson, setContactPerson] = useState('')
    const [name, setName] = useState('')
    const [shippingAddress, setShippingAddress] = useState('')
    const [contactPersonDesig, setContactPersonDesig] = useState('')
    const [businessPlace, setBusinessPlace] = useState('')
    const [gstin, setGstin] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const clientData = {
            name,
            place_of_business: businessPlace,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            GSTIN: gstin,
            email,
            contact_person: contactPerson,
            contact_person_designation: contactPersonDesig,
            mobile_no: mobile,
        }
        dispatch(createClient(clientData))
        setShowAdd(false)
    }

    const updateHandler = (e) => {
        e.preventDefault()

        const editData = {
            id: data.id,
            name,
            place_of_business: businessPlace,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            GSTIN: gstin,
            email,
            contact_person: contactPerson,
            contact_person_designation: contactPersonDesig,
            mobile_no: mobile,
        }
        dispatch(editClient(editData))
        setShowEdit(false)
    }

    // show data or view details
    useEffect(() => {
        if (clientBtn === 'edit') {
            setName(data.name)
            setBillingAddress(data.billing_address)
            setContactPerson(data.contact_person)
            setShippingAddress(data.shipping_address)
            setContactPersonDesig(data.contact_person_designation)
            setBusinessPlace(data.place_of_business)
            setGstin(data.GSTIN)
            setEmail(data.email)
            setMobile(data.mobile_no)
        }
    }, [])

    // Action Button - Save/edit
    const btnClass = "p-2 px-3 rounded-sm w-full text-white bg-blue-500"
    let btnContent = (
        clientBtn === 'add' ? (
            <button className={btnClass} onClick={submitHandler}>Add</button>
        ) : (
            clientBtn === 'edit' && (
                <button className={btnClass} onClick={updateHandler}>Update</button>
            )
        )
    )

    return (
        <div>
            <form className="grid grid-cols-2 gap-x-8">
                <div>
                    <ImageUploader />
                    <label htmlFor="logo">Add Company Logo</label>
                    <InputField labelName="Client Code" value={clientCode} onChange={e => setClientCode(e.target.value)} />
                    <InputField labelName="Business Name" value={name} onChange={e => setName(e.target.value)} />
                    <InputField labelName="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField type="number" labelName="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                    <InputField labelName="Place of Business" value={businessPlace} onChange={e => setBusinessPlace(e.target.value)} />
                    <InputField labelName="Contact Person" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
                </div>
                <div>
                    <InputField labelName="Contact Person Designation" value={contactPersonDesig} onChange={e => setContactPersonDesig(e.target.value)} />
                    <InputField labelName="GSTIN" value={gstin} onChange={e => setGstin(e.target.value)} />
                    <div className="my-6">
                        <label htmlFor="billingAddress">Billing Address</label>
                        <TextArea
                            showCount
                            maxLength={200}
                            style={{
                                height: 100,
                            }}
                            onChange={e => setBillingAddress(e.target.value)}
                        />

                    </div>
                    <div className="my-6">
                        <label htmlFor="shippingAddress">Shipping Address</label>
                        <TextArea
                            showCount
                            maxLength={200}
                            style={{
                                height: 100,
                            }}
                            onChange={e => setShippingAddress(e.target.value)}
                        />
                    </div>
                    {btnContent}
                    {/* <button className="p-2 px-3 rounded-sm w-full text-white bg-blue-500">Submit</button> */}
                </div>
            </form>
        </div>
    )
}

export default ClientForm