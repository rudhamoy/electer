import React from 'react'
import { Table, Space } from 'antd'
import { FcViewDetails } from 'react-icons/fc'

import { gstOneColumn } from '../../data/table/GstTable'

const GstOne = () => {

    const gstoneColumn = [
        ...gstOneColumn,
        {
            title: 'View Invoice',
            dataIndex: 'view',
            key: 'view',
            className: 'text-[10px]',
            render: (_, record) => {
                return (<Space wrap>
                    <button className="">
                        <FcViewDetails />
                    </button>
                </Space>
                )
            },
          },
    ]

  return (
    <div>
        <Table columns={gstoneColumn} />
    </div>
  )
}

export default GstOne