import React, { useState } from 'react'
import { Space, Table, Tag, Modal } from 'antd';

import { payrollColumnList, payrollData } from '../../data/table/Table'
import InfoIcon from '../../data/icons/payroll/info.png'
import EmployeeInfo from './EmployeeInfo';
import SalarySlip from './SalarySlip';

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
  
      onOk() {},
    });
  };


const PayrollTable = () => {
    let newColumns = []

    const [modalData, setModalData] = useState([])
    const [isEmployeInfoVisible, setIsEmployeInfoVisible] = useState(false);

    const handleOk = () => {
        setIsEmployeInfoVisible(false);
    };

    const handleCancel = () => {
        setIsEmployeInfoVisible(false);
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

    return (
        <div>
            {/* Info Modal */}
            {modalData && isEmployeInfoVisible === true && (
                <Modal  title="Employee Profile" visible={isEmployeInfoVisible} onOk={handleOk} onCancel={handleCancel}>
                    <EmployeeInfo />
                </Modal>
            )}
            {/* table */}
            <Table columns={payrollColumn} dataSource={payrollData} />
        </div>
    )
}

export default PayrollTable