import React from 'react'
import { Table } from 'antd';

const MonthlyExpense = () => {

    const expenseColumn = [
        {
          title: 'Sl No',
          dataIndex: 'slNo',
          key: 'slNo',
        },
        {
          title: 'Expense Particular',
          dataIndex: 'expenseParticular',
          key: 'expenseParticular',
        },
        {
          title: 'Expense Type',
          dataIndex: 'expenseType',
          key: 'expenseType',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        
      ];

  return (
    <div>
        <Table columns={expenseColumn} />
    </div>
  )
}

export default MonthlyExpense