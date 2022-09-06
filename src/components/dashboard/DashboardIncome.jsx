import React from 'react'
import { Table } from 'antd'

import { dashIncomeColumn } from '../../data/table/dashboardTable'

const DashboardIncome = () => {
  return (
    <div>
        <Table columns={dashIncomeColumn} />
    </div>
  )
}

export default DashboardIncome