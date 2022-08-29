import React, { useState, useEffect } from 'react'
import { Space, Table, Modal, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

import { payrollColumnList, payrollData } from '../../data/table/Table'
import InfoIcon from '../../data/icons/payroll/info.png'
import EmployeeForm from './EmployeeForm';
import SalarySlip from './SalarySlip';
import ActionBtn from '../../utils/ActionBtn';
import { modalBtnCondition } from '../../features/activity/activitySlice';
import { fetchEmployees, deleteEmployee } from '../../features/payroll/payrollSlice';
import Attendance from './Attendance';

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
    const {employees, status} = useSelector(state => state.payroll)
    

    const [modalData, setModalData] = useState([])
    const [isEmployeInfoVisible, setIsEmployeInfoVisible] = useState(false);
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [editData, setEditData] = useState()
    const [showAttendance, setShowAttendance] = useState(false)

    const handleOk = () => {
        setIsEmployeInfoVisible(false);
        setShowAdd(false)
        setShowEdit(false)
    };

    const handleCancel = () => {
        setIsEmployeInfoVisible(false);
        setShowAdd(false)
        setShowEdit(false)
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
                        setIsEmployeInfoVisible(true)
                        setModalData(record);
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
                    <button 
                    className="text-blue-500 border px-1 rounded-sm border-blue-500"
                    onClick={() => {
                        setShowEdit(true)
                        setEditData(record)
                        dispatch(modalBtnCondition('edit'))
                    }}
                    >Edit</button>
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
    employees.map((item, index) => {

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


    return (
        <div>
            {/* Info Modal */}
            {modalData && isEmployeInfoVisible === true && (
                <Modal title="Employee Profile" visible={isEmployeInfoVisible} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeForm data={modalData} />
                </Modal>
            )}
            {/* Add employee Modal */}
            {showAdd === true && (
                <Modal title="Add New Employee" visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeForm setShowAdd={setShowAdd} />
                </Modal>
            )}
            {/* Edit employee Modal */}
            {showEdit === true && (
                <Modal title="Add New Employee" visible={showEdit} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeForm setShowEdit={setShowEdit} data={editData} />
                </Modal>
            )}

                {/* Buttons - add - attendance */}
            <div className="flex items-center justify-end gap-x-2 mb-2">
               
                <ActionBtn
                    createName="Attendance"
                    className={showAttendance === false}
                    onClick={() => {
                        setShowAttendance(!showAttendance)
                        //   dispatch(modalBtnCondition('add'))
                    }}
                    btnCondition={showAttendance === true}
                />
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
            {showAttendance === true ? (
                <Attendance />
            ) : (
                 <Table 
                 columns={payrollColumn} 
                 dataSource={newEmployeesData} 
                 loading={status === 'loading' && true} 
                 />
            )}
           
        </div>
    )
}

export default PayrollTable