import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Space, Switch, Radio  } from 'antd'
import { dashAttendanceColumn } from '../../data/table/dashboardTable'

import { fetchEmployees } from '../../features/payroll/payrollSlice'

const DashboardAttendance = () => {
    const dispatch = useDispatch()

    const { employees } = useSelector(state => state.payroll)

    useEffect(() => {
        dispatch(fetchEmployees())
    }, [dispatch])

     // Add New Column to the table - action 
     const newColumnList = [
        ...dashAttendanceColumn,
        {
            title: 'P',
            key: 'present',
            className: "text-[12px]",
            render: (_, record) => {
                return (<Space wrap>
                    <Radio
                        disabled={true}
                    />
                </Space>
                )
            },
        },
        {
            title: 'A',
            key: 'absent',
            className: "text-[12px]",
            render: (_, record) => {
                return (<Space wrap>
                    <Radio
                    disabled={true}
                    />
                </Space>
                )
            },
        },
        {
            title: 'H',
            key: 'halfDay',
            className: "text-[12px]",
            render: (_, record) => {
                return (<Space wrap>
                    <Radio
                    disabled={true}
                     />
                </Space>
                )
            },
        },
    ];

    // copy api data and make a new list of arrays for table data
    const newEmployeesData = []
    employees.map((item) => {

        const employeeName = {
            name: item.first_name + " " + item.sur_name
        }
        let attendant = {
            present: false,
            absent: false,
            attendId: null,
        }

        // present.forEach(p => {
        //     if (p.employee === item.id) {
        //         attendant.present = p.present
        //         attendant.absent = p.absent
        //         attendant.attendId = p.id
        //     }
        // })

        let newList = {
            ...item,
            ...employeeName,
            ...attendant
        }
        return newEmployeesData.push(newList)
    })

  return (
    <div>
        <Table columns={newColumnList} dataSource={newEmployeesData} />
    </div>
  )
}

export default DashboardAttendance