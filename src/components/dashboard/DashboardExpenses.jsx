import React from 'react'
import { Table } from 'antd'
import { dashExpensesColumn } from '../../data/table/dashboardTable'

const DashboardExpenses = () => {
  return (
    <div>
        <Table columns={dashExpensesColumn} />
    </div>
  )
}

export default DashboardExpenses