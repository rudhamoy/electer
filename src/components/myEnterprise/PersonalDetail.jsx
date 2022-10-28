import React, { useState, useEffect } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

import ImageUploader from '../ImageUploader';
import InputField from '../../utils/InputField'
import { createBank, fetchBank } from '../../features/enterprise/enterpriseSlice';
import { fetchSystemUser } from '../../features/auth/AuthSlice';

const PersonalDetail = () => {
  const dispatch = useDispatch()
  const { bank, status } = useSelector(state => state.enterprise)
  const { systemUser } = useSelector(state => state.auth)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [designation, setDesignation] = useState('')
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState('')


  const [bankName, setBankName] = useState('')
  const [acHolderName, setAcholderName] = useState('')
  const [accountNo, setAccountNo] = useState()
  const [branch, setBranch] = useState('')
  const [ifsc, setIfsc] = useState()

  // save bank handler
  const bankData = {
    account_holder_name: acHolderName,
    bank_name: bankName,
    account_number: accountNo,
    ifsc_code: ifsc,
    branch
  }

  const saveBank = () => {
    dispatch(createBank(bankData))
  }

  useEffect(() => {
    dispatch(fetchBank())
    setAcholderName(bank[0]?.account_holder_name)
    setBankName(bank[0]?.bank_name)
    setAccountNo(bank[0]?.account_number)
    setIfsc(bank[0]?.ifsc_code)
    setBranch(bank[0]?.branch)
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchSystemUser())
    setFirstName(systemUser[0]?.custom_user.first_name)
    setLastName(systemUser[0]?.custom_user.last_name)
    setEmail(systemUser[0]?.custom_user.email)
    setDesignation(systemUser[0]?.designation)
    setMobile(systemUser[0]?.mobile_no)
  } ,[dispatch])

  return (
    <div className="grid grid-cols-2 space-x-20">

      {/* Left - personal info */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Personal Details</h1>
        {/* photo */}
        {/* Background process - backend */}
        <ImageUploader />
        <div >
          <InputField labelName="First Name" value={firstName} />
        </div>
        <div >
          <InputField labelName="Last Name" lastName={lastName} />
        </div>
        <div >
          <InputField labelName="Designation" value={designation} />
        </div>
        <div >
          <InputField labelName="Mobile Number" value={mobile} />
        </div>
        <div >
          <InputField labelName="Email Id" value={email} />
        </div>

        <button className="p-2 px-4 rounded-md bg-blue-500 text-blue-50 font-semibold my-6">Save Changes</button>

      </div>

      {/* Right - Bank Details */}
      <div>
        <h1 className="font-semibold text-lg text-gray-600">Bank Details</h1>
        {status === 'loading' ? (
          <p className="text-green-500 text-2xl font-semibold">Loading.....</p>
        ) : (
          <div>
          <div >
            <InputField labelName="Bank Name" value={bankName} onChange={e => setBankName(e.target.value)} />
          </div>
          <div >
            <InputField labelName="Account Holder Name" value={acHolderName} onChange={e => setAcholderName(e.target.value)} />
          </div>
          <div >
            <InputField labelName="Account No" value={accountNo} onChange={e => setAccountNo(e.target.value)} />
          </div>
          <div >
            <InputField labelName="Branch" value={branch} onChange={e => setBranch(e.target.value)} />
          </div>
          <div >
            <InputField labelName="IFSC Code" value={ifsc} onChange={e => setIfsc(e.target.value)} />
          </div>

          <div className="mt-12 flex items-center gap-x-2">
            <input type="radio" name="" />
            <p className="font-semibold">
              I accept all the terms and conditions and agree to proceed
            </p>
          </div>

          <button className="p-2 px-4 rounded-md bg-blue-500 text-blue-50 font-semibold my-6" onClick={saveBank}>Save Bank Details</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default PersonalDetail