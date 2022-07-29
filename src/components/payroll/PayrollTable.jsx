import React, { useState } from 'react'
import { Space, Table, Tag, Modal } from 'antd';

import { payrollColumnList, payrollData } from '../../data/table/Table'
import InfoIcon from '../../data/icons/payroll/info.png'
import EmployeeInfo from './EmployeeInfo';

const PayrollTable = () => {
    let newColumns = []

    const [modalData, setModalData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
                        setIsModalVisible(true)
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
                return (<Space size="middle">
                    <button className="text-green-500 border px-1 rounded-sm border-green-500" onClick={() => {
                        setModalData(record);
                        setIsModalVisible(true)
                    }}>Salary Slip</button>
                    <button className="text-blue-500 border px-1 rounded-sm border-blue-500">Edit</button>
                    <button className="text-red-500 border px-1 rounded-sm border-red-500">Delete</button>
                </Space>
                )
            },
        },
    ];

    return (
        <div>
            {modalData && isModalVisible === true && (

                <Modal title="Employee Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeInfo />
                </Modal>
            )}
            {/* table */}
            <Table columns={payrollColumn} dataSource={payrollData} />
        </div>
    )
}

export default PayrollTable