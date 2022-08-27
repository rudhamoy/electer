import React, { useState, useEffect } from 'react'
import { Space, Table, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

import { payrollColumnList, payrollData } from '../../data/table/Table'
import InfoIcon from '../../data/icons/payroll/info.png'
import EmployeeForm from './EmployeeForm';
import SalarySlip from './SalarySlip';
import ActionBtn from '../../utils/ActionBtn';
import { modalBtnCondition } from '../../features/activity/activitySlice';
import { fetchEmployees, deleteEmployee } from '../../features/payroll/payrollSlice';

// salary info modal
const info = (data) => {
    Modal.info({
        title: 'Salary Slip',
        width: "600px",
        content: (
            <div>
                <SalarySlip salaryData={data} />
            </div>
        ),

        onOk() { },
    });
};


const PayrollTable = () => {
    let newColumns = []
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth.auth)
    const employeesData = useSelector(state => state.payroll.employees)
    

    const [modalData, setModalData] = useState([])
    const [isEmployeInfoVisible, setIsEmployeInfoVisible] = useState(false);
    const [showAdd, setShowAdd] = useState(false)

    const handleOk = () => {
        setIsEmployeInfoVisible(false);
        setShowAdd(false)
    };

    const handleCancel = () => {
        setIsEmployeInfoVisible(false);
        setShowAdd(false)
    };

    // map the column list - push to array list
    payrollColumnList.map(item => (
        newColumns.push(item)
    ))

    // Add New Column - action 
    const payrollColumn = [
        {
            title: 'Info',
            key: 'info',
            render: (_, record) => {
                return (<Space size="middle">
                    <button className="" onClick={() => {
                        setModalData(record);
                        setIsEmployeInfoVisible(true)
                        dispatch(modalBtnCondition(''))
                    }}>
                        <img src={InfoIcon} className="w-[30px]" alt="info" />
                    </button>
                </Space>
                )
            },
        },
        ...newColumns,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (<Space wrap>
                    <button className="text-green-500 border px-1 rounded-sm border-green-500" onClick={() => info(record)}>Salary Slip</button>
                    <button className="text-blue-500 border px-1 rounded-sm border-blue-500">Edit</button>
                    <button className="text-red-500 border px-1 rounded-sm border-red-500">Delete</button>
                </Space>
                )
            },
        },
    ];


    useEffect(() => {
        if(auth.authToken) {
            dispatch(fetchEmployees())
        }
    }, [dispatch])

    // copy api data and make a new list of arrays for table data
    const newEmployeesData = []
    employeesData.map((item, index) => {

        const employeeName = {
            name: item.first_name + " " + item.sur_name
        }
        const salaryData = {
            salary: item.salary_detail.basic_salary
        }

        let newList = {
            ...item,
            ...employeeName,
            ...salaryData
        }

        return newEmployeesData.push(newList)
    })

    console.log(newEmployeesData)

    return (
        <div>
            {/* Info Modal */}
            {modalData && isEmployeInfoVisible === true && (
                <Modal title="Employee Profile" visible={isEmployeInfoVisible} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeForm />
                </Modal>
            )}
            {/* Add employee Modal */}
            {showAdd === true && (
                <Modal title="Add New Employee" visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeForm />
                </Modal>
            )}

                {/* Buttons - add - attendance */}
            <div className="flex items-center justify-end gap-x-2 mb-2">
                <button className="p-2 px-3 bg-blue-500 text-white rounded-md text-xs">Attendance</button>
                <ActionBtn
                    createName="Employee"
                    className={showAdd === false}
                    onClick={() => {
                        setShowAdd(!showAdd)
                          dispatch(modalBtnCondition('add'))
                    }}
                    btnCondition={showAdd === true}
                />
            </div>
            {/* table */}
            <Table columns={payrollColumn} dataSource={newEmployeesData} />
        </div>
    )
}

export default PayrollTable