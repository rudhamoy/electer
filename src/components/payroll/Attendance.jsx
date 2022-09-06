import React, { useState, useEffect } from 'react'
import { Space, Table, Modal, Radio, Switch, DatePicker, Calendar } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { attendanceColumnList } from '../../data/table/Table'
import InfoIcon from '../../data/icons/payroll/info.png'
import { modalBtnCondition } from '../../features/activity/activitySlice';
import { createAttendance, fetchAttendance, createDate, getDateList, updateAttendance } from '../../features/payroll/payrollSlice';

const Attendance = () => {
    const dispatch = useDispatch()

    const [attend, setAttend] = useState()
    const [modalData, setModalData] = useState([])
    const [isEmployeInfoVisible, setIsEmployeInfoVisible] = useState(false);
    const [dateToday, setDateToday] = useState('')
    const [showBtn, setShowBtn] = useState(true)
    const [dateId, setDateId] = useState()

    const { employees, createdDate, attendance } = useSelector(state => state.payroll)

    // create a list of present - so when date selected the switch button changes accordingly by comparing to the employees data and attendance data -
    let present = []
    attendance.forEach(item => {
        if (item?.attendence_date.date === dateToday) {
            present.push(item)
        }
    })



    // Add New Column to the table - action 
    const newColumnList = [
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
        ...attendanceColumnList,
        {
            title: 'Present',
            key: 'present',
            render: (_, record) => {
                return (<Space wrap>
                    <Switch
                        checked={record.present}
                        disabled={!dateId}
                        onClick={(checked, event) => {
                            if (checked === true) {
                                const attendData = {
                                    present: true,
                                    absent: false,
                                    attendence_date: dateId,
                                    employee: record.id
                                }
                                const updateAttend = {
                                    id: record.attendId,
                                    present: true,
                                    absent: false,
                                    attendence_date: dateId,
                                    employee: record.id
                                }
                                console.log(attendData)
                                if(record.attendId !== null) {
                                    dispatch(updateAttendance(updateAttend))
                                } else {
                                    dispatch(createAttendance(attendData))
                                }
                            }
                        }}
                    />

                </Space>
                )
            },
        },
        {
            title: 'Absent',
            key: 'absent',
            render: (_, record) => {
                return (<Space wrap>
                    <Switch
                    checked={record.absent}
                    disabled={!dateId}
                    onClick={(checked, event) => {
                        if (checked === true) {
                            const attendData = {
                                absent: true,
                                present: false,
                                attendence_date: dateId,
                                employee: record.id
                            }
                            const updateAttend = {
                                id: record.attendId,
                                absent: true,
                                present: false,
                                attendence_date: dateId,
                                employee: record.id
                            }
                            if(record.attendId !== null) {
                                dispatch(updateAttendance(updateAttend))
                            } else {
                                dispatch(createAttendance(attendData))
                            }
                        }
                    }}
                    />
                </Space>
                )
            },
        },
        {
            title: 'Half Day',
            key: 'halfDay',
            render: (_, record) => {
                return (<Space wrap>
                    <Switch
                    disabled={!dateId}
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

        present.forEach(p => {
            if (p.employee === item.id) {
                attendant.present = p.present
                attendant.absent = p.absent
                attendant.attendId = p.id
            }
        })

        let newList = {
            ...item,
            ...employeeName,
            ...attendant
        }
        return newEmployeesData.push(newList)
    })

    // post date to api
    const saveDateHandler = async (e) => {
        e.preventDefault()
        dispatch(createDate({ date: dateToday }))
    }

    useEffect(() => {
        dispatch(getDateList())
        dispatch(fetchAttendance())
    }, [])

    // to check if date already existed in the backend
    useEffect(() => {
        const btnCond = () => {
            for (let index = 0; index < createdDate.length; index++) {
                if (createdDate[index].date === dateToday) {
                    setDateId(createdDate[index].id)
                    setShowBtn(false)
                    break;
                } else {
                    setShowBtn(true)
                    setDateId()
                }

            }
        }
        btnCond()
    }, [dateToday, createdDate])


    return (
        <div>
            <div className="flex justify-between mt-20">
                {/* Table */}
                <div className="bg-gray-100 rounded-sm p-3 w-[65%]">
                    <Table columns={newColumnList} dataSource={newEmployeesData} />

                </div>
                <div className="w-[300px]">
                    <div className='my-2 flex flex-col gap-y-2 w-full'>
                        <label htmlFor="dateToday" className="font-semibold">Select Date: </label>
                        <DatePicker onChange={(date, dateString) => {
                            setDateToday(dateString)
                        }}
                        />
                        {dateToday && (
                            <>
                                <div className="w-full bg-emerald-200 border border-emerald-400 px-2 pt-1">
                                    <p className="text-sm">You Selected Date : {dateToday}</p>
                                </div>
                                {showBtn === true && (
                                    <button
                                        className="p-2 rounded-md bg-blue-500 text-white font-semibold"
                                        onClick={saveDateHandler}
                                    >Save Date</button>
                                )}

                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attendance