import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import { useSelector } from 'react-redux';

import InputField from '../../utils/InputField'
import ImageUploader from '../ImageUploader'

const { TextArea } = Input;

const ClientForm = ({ setUpdateData, setSubmitData, setBtnDisable, data }) => {
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

    const clientState = [clientCode, billingAddress, contactPerson, name, shippingAddress, contactPersonDesig, gstin, email, mobile ]

    // collecting data for saving/adding 
   useEffect(() => {
    if(clientBtn === 'add') {
        setSubmitData({
            name,
            place_of_business: businessPlace,
            billing_address: billingAddress,
            shipping_address: shippingAddress,
            GSTIN: gstin,
            email,
            contact_person: contactPerson,
            contact_person_designation: contactPersonDesig,
            mobile_no: mobile,
        })
    } 
   }, [name, businessPlace, billingAddress, shippingAddress, gstin, email, contactPerson, contactPersonDesig, mobile])

    // collecting data for edit/update
   useEffect(() => {
    if(clientBtn === 'edit') {
        setUpdateData({
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
        })
    }
   }, [name, businessPlace, billingAddress, shippingAddress, gstin, email, contactPerson, contactPersonDesig, mobile])

    // show data or view details when edit button is clicked
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

    // to disable/enable submit button
    useEffect(() => {
        if(clientBtn === 'add') {
            clientState.forEach(item => {
                if(item === '') {
                    setBtnDisable(true)
                } else {
                    setBtnDisable(false)
                }
            })
        }
    }, [mobile, name, businessPlace, billingAddress, shippingAddress, gstin, email, contactPerson, contactPersonDesig])

    return (
        <div>
            <form className="grid grid-cols-2 gap-x-8">
                <div>
                    <ImageUploader />
                    <label htmlFor="logo">Add Company Logo</label>
                    <InputField my="2" labelName="Client Code" value={clientCode} onChange={e => setClientCode(e.target.value)} />
                    <InputField my="2" labelName="Business Name" value={name} onChange={e => setName(e.target.value)} />
                    <InputField my="2" labelName="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <InputField my="2" type="alpha" labelName="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                    <InputField my="2" labelName="Place of Business" value={businessPlace} onChange={e => setBusinessPlace(e.target.value)} />
                    <InputField my="2" labelName="Contact Person" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
                </div>
                <div>
                    <InputField my="2" labelName="Contact Person Designation" value={contactPersonDesig} onChange={e => setContactPersonDesig(e.target.value)} />
                    <InputField my="2" labelName="GSTIN" value={gstin} onChange={e => setGstin(e.target.value)} />
                    <div className="my-2">
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
                    <div className="my-2">
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
                    
                </div>
            </form>
        </div>
    )
}

export default ClientForm