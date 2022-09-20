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
import Drawer from '../../utils/Drawer'

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
    const { employees, status } = useSelector(state => state.payroll)


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
                    <button className="text-green-700 text-xs p-1 px-3 rounded-full bg-green-200" onClick={() => info(record)}>Salary Slip</button>
                    <button
                        className="text-blue-600 text-xs p-1 px-3 rounded-full bg-blue-200"
                        onClick={() => {
                            setShowEdit(true)
                            setEditData(record)
                            dispatch(modalBtnCondition('edit'))
                        }}
                    >Edit</button>
                    <button className="text-red-600 text-xs p-1 px-3 rounded-full bg-red-200">Delete</button>
                </Space>
                )
            },
        },
    ];


    useEffect(() => {
        if (auth.authToken) {
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
                <Drawer
                setOpen={setIsEmployeInfoVisible}
                title="View employee"
                >
                    <EmployeeForm data={modalData} />
                </Drawer>
            )}
            {/* Add employee Modal */}
            {showAdd === true && (
                <Drawer
                setOpen={setShowAdd}
                title="Create a new employee"
                >
                    <EmployeeForm setShowAdd={setShowAdd} />
                </Drawer>
            )}
            {/* Edit employee Modal */}
            {showEdit === true && (
                <Drawer
                setOpen={setShowEdit}
                title="Edit employee"
                >
                    <EmployeeForm setShowEdit={setShowEdit} data={editData} />
                </Drawer>
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
                <div className="borderImp rounded-md p-1 bg-white text-xs">
                    <Table
                        columns={payrollColumn}
                        dataSource={newEmployeesData}
                        loading={status === 'loading' && true}
                    />
                </div>
            )}

        </div>
    )
}

export default PayrollTable