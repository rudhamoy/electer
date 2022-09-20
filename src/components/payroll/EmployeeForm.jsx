import { FileSyncOutlined, IdcardOutlined } from '@ant-design/icons';
import { Tabs, DatePicker, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import InputField from '../../utils/InputField'
import UploadDocs from './UploadDocs';
import ImageUploader from '../ImageUploader'
import { editEmployee, createEmployee } from '../../features/payroll/payrollSlice';

const { TabPane } = Tabs;

const EmployeeForm = ({ setShowEdit, setShowAdd, data }) => {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [post, setPost] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [employeeCode, setEmployeeCode] = useState('')
    const [basicSalary, setBasicSalary] = useState()
    const [deatAllow, setDeatAllow] = useState()
    const [travelAllow, setTravelAllow] = useState()
    const [foodAllow, setFoodAllow] = useState()
    const [petrolAllow, setPetrolAllow] = useState()
    const [pf, setPf] = useState()
    const [esi, setEsi] = useState()
    const [totalSalary, setTotalSalary] = useState('')
    const [aadhaar, setAadhaar] = useState('')
    const [pan, setPan] = useState('')
    const [bankName, setBankName] = useState('')
    const [acHolderName, setAcHolderName] = useState('')
    const [accountNo, setAccountNo] = useState()
    const [ifsc, setIfsc] = useState('')

    
    // action handler - post to api
    const baseUrl = 'http://37.44.244.212/api'
    const buttonCond = useSelector(state => state.activity.modalBtn)
    const token = useSelector(state => state.auth.auth.authToken)
    const { systemUserId } = useSelector(state => state.auth)

    const submitHandler = async (e) => {
        e.preventDefault();

        const employeeData = {
            bank_details: {
                bank_name: bankName,
                account_holder_name: acHolderName,
                account_no: parseInt(accountNo),
                ifsc_code: ifsc,
                system_user: systemUserId.id
            },
            salary_detail: {
                basic_salary: parseInt(basicSalary),
                deatness_allowance: parseInt(deatAllow),
                travelling_allowance: parseInt(travelAllow),
                food_allowance: parseInt(foodAllow),
                petrol_allowance: parseInt(petrolAllow),
                provident_fund: parseInt(pf),
                employee_state_insurance: parseInt(esi),
                system_user: systemUserId.id
            },
            first_name: firstName,
            sur_name: lastName,
            department,
            post,
            mobile,
            email_id: email,
            // date_of_joining: joiningDate,
            employee_code: employeeCode,
            aadhar_no: aadhaar,
            pan_details: pan,
            system_user: systemUserId.id
        }
        dispatch(createEmployee(employeeData))
        setShowAdd(false)
    }

    const updateHandler = async (e) => {
        e.preventDefault();

        const editData = {
            id: data.id,
            bank_details: {
                bank_name: bankName,
                account_holder_name: acHolderName,
                account_no: parseInt(accountNo),
                ifsc_code: ifsc
            },
            salary_detail: {
                basic_salary: parseInt(basicSalary),
                deatness_allowance: parseInt(deatAllow),
                travelling_allowance: parseInt(travelAllow),
                food_allowance: parseInt(foodAllow),
                petrol_allowance: parseInt(petrolAllow),
                provident_fund: parseInt(pf),
                employee_state_insurance: parseInt(esi)
            },
            first_name: firstName,
            sur_name: lastName,
            department,
            post,
            mobile,
            email_id: email,
            // date_of_joining: joiningDate,
            employee_code: employeeCode,
            aadhar_no: aadhaar,
            pan_details: pan
        }
        dispatch(editEmployee(editData))
        setShowEdit(false)
    }

    // Action Button - Save/edit
    const btnClass = "p-2 px-7 rounded-md text-white bg-blue-500 absolute bottom-10"
    let btnContent = (
        buttonCond === 'add' ? (
            <button className={btnClass} onClick={submitHandler}>Submit</button>
        ) : (
            buttonCond === 'edit' && (
                <button className={btnClass} onClick={updateHandler}>Update</button>
            )
        )
    )

    // show data or view details
    useEffect(() => {
        if (buttonCond === '' || buttonCond === 'edit') {
            setFirstName(data.first_name)
            setLastName(data.sur_name)
            setDepartment(data.department)
            setPost(data.post)
            setMobile(data.mobile)
            setEmail(data.email_id)
            setEmployeeCode(data.employee_code)
            setBasicSalary(data.aadhar_no)
            setDeatAllow(data.salary_detail.deatness_allowance)
            setTravelAllow(data.salary_detail.travelling_allowance)
            setFoodAllow(data.salary_detail.food_allowance)
            setPetrolAllow(data.salary_detail.petrol_allowance)
            setPf(data.salary_detail.provident_fund)
            setEsi(data.salary_detail.employee_state_insurance)
            setAadhaar(data.aadhar_no)
            setPan(data.pan_details)
            setBankName(data.bank_details.bank_name)
            setAcHolderName(data.bank_details.account_holder_name)
            setAccountNo(data.bank_details.account_no)
            setIfsc(data.bank_details.ifsc_code)
        }
    }, [])

    return (
        <div className="">
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <IdcardOutlined />
                            Basic Information
                        </span>
                    }
                    key="1"
                >
                    {/* Basic Info */}

                    <div className="grid grid-cols-2 gap-x-2 borderImp p-2 rounded-md">
                        <InputField my="2" labelName="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <InputField my="2" labelName="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <InputField my="2" labelName="Department" value={department} onChange={e => setDepartment(e.target.value)} />
                        <InputField my="2" labelName="Post" value={post} onChange={e => setPost(e.target.value)} />
                        <InputField my="2" labelName="Mobile" type="number" value={mobile} onChange={e => setMobile(e.target.value)} />
                        <InputField my="2" labelName="Email Id" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        {/* <InputField my="2" labelName="Date of Joining" type="date" value={joiningDate} onChange={e => setJoiningDate(e.target.value)} /> */}
                        <div className='my-2'>
                            <label htmlFor="joiningDate">Date of Joining</label>
                            <input type="datetime-local" className="border w-full p-1 outline-sky-500 outline-[1px]" value={joiningDate} onChange={e => setJoiningDate(e.target.value)} />
                            {/* <DatePicker style={{width: "100%"}} value={joiningDate} onChange={date => setJoiningDate(date)} /> */}
                        </div>
                        <InputField my="2" labelName="Employe Code" value={employeeCode} onChange={e => setEmployeeCode(e.target.value)} />
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <FileSyncOutlined />
                            Salary Information
                        </span>
                    }
                    key="2"
                >
                    {/* Salary Info */}
                    <div className="grid grid-cols-2 gap-x-2 borderImp p-2 rounded-md">
                        <InputField my="2" labelName="Basic Salary" type="number" value={basicSalary} onChange={e => setBasicSalary(e.target.value)} />
                        <InputField my="2" labelName="Deatness Allowance" type="number" value={deatAllow} onChange={e => setDeatAllow(e.target.value)} />
                        <InputField my="2" labelName="Travelling Allowance" type="number" value={travelAllow} onChange={e => setTravelAllow(e.target.value)} />
                        <InputField my="2" labelName="Food Allowance" type="number" value={foodAllow} onChange={e => setFoodAllow(e.target.value)} />
                        <InputField my="2" labelName="Petrol Allowance" type="number" value={petrolAllow} onChange={e => setPetrolAllow(e.target.value)} />
                        <InputField my="2" labelName="Provident Fund (PF)" type="number" value={pf} onChange={e => setPf(e.target.value)} />
                        <InputField my="2" labelName="Employe State Insurance (ESI)" type="number" value={esi} onChange={e => setEsi(e.target.value)} />
                        <InputField my="2" labelName="Total Salary" type="number" value={totalSalary} onChange={e => setTotalSalary(e.target.value)} />
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <FileSyncOutlined />
                            Documentation
                        </span>
                    }
                    key="3"
                >
                    {/* Documentation */}
                    <div className="grid grid-cols-2 gap-x-3 borderImp p-2 rounded-md">
                        <InputField my="2" labelName="Aadhaar Number" type="number" value={aadhaar} onChange={e => setAadhaar(e.target.value)} />
                        <InputField my="2" labelName="Pan Details" value={pan} onChange={e => setPan(e.target.value)} />
                        <div className="my-2">
                            <label htmlFor="docs1">Document 1 : </label>
                            <div className="flex items-center gap-x-1">
                                <UploadDocs />
                                <button className="bg-blue-500 p-1 px-3 text-white">View</button>
                            </div>
                        </div>
                        <div className="my-2">
                            <label htmlFor="docs1">Document 2 : </label>
                            <div className="flex items-center gap-x-1">
                                <UploadDocs />
                                <button className="bg-blue-500 p-1 px-3 text-white">View</button>
                            </div>
                        </div>
                        <div className="my-2">
                            <label htmlFor="docs1">Document 3 : </label>
                            <div className="flex items-center gap-x-1">
                                <UploadDocs />
                                <button className="bg-blue-500 p-1 px-3 text-white">View</button>
                            </div>
                        </div>
                        <div className="my-2">
                            <label htmlFor="docs1">Document 4 : </label>
                            <div className="flex items-center gap-x-1">
                                <UploadDocs />
                                <button className="bg-blue-500 p-1 px-3 text-white">View</button>
                            </div>
                        </div>
                        <div className="my-2">
                            <label htmlFor="docs1">Resume : </label>
                            <div className="flex items-center gap-x-1">
                                <UploadDocs />
                                <button className="bg-blue-500 p-1 px-3 text-white">View</button>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <FileSyncOutlined />
                            Bank Details
                        </span>
                    }
                    key="4"
                >
                    {/* Bank Details */}
                    <div className="borderImp p-2 rounded-md">
                        <ImageUploader />
                        <InputField my="2" labelName="Bank Name" value={bankName} onChange={e => setBankName(e.target.value)} />
                        <InputField my="2" labelName="Account Holder Name" value={acHolderName} onChange={e => setAcHolderName(e.target.value)} />
                        <InputField my="2" labelName="Account Number" value={accountNo} onChange={e => setAccountNo(e.target.value)} />
                        <InputField my="2" labelName="IFSC" value={ifsc} onChange={e => setIfsc(e.target.value)} />
                    </div>
                </TabPane>
            </Tabs>
            {btnContent}
        </div>
    )
}

export default EmployeeForm