import React, { useEffect } from 'react'
import { Table, Space } from 'antd'
import { FcViewDetails } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'

import { gstOneColumn } from '../../data/table/GstTable';
import { fetchSalesInvoice } from '../../features/bills/billsSlice';

const GstOne = () => {
    const dispatch = useDispatch()
    const { invoices } = useSelector(state => state.bills)

    useEffect(() => {
        dispatch(fetchSalesInvoice())
    }, [dispatch])

    const gstoneColumn = [
        ...gstOneColumn,
        {
            title: 'View Invoice',
            dataIndex: 'view',
            key: 'view',
            className: 'text-xs',
            render: (_, record) => {
                return (<Space wrap>
                    <button>
                        <FcViewDetails className="text-xl" />
                    </button>
                </Space>
                )
            },
          },
    ]

    const invoiceList = []

    invoices.forEach((item, index) => {
        const list = {
            ...item,
            index
        }
        return invoiceList.push(list)
    })

    console.log(invoices)

  return (
    <div className="borderImp rounded-md p-1 bg-gray-50">
        <Table columns={gstoneColumn} dataSource={invoiceList} />
    </div>
  )
}

export default GstOne