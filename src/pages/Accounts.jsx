import React from 'react'
import Accounting from '../components/accounts/Accounting'
import MonthlyExpense from '../components/accounts/MonthlyExpense'
import MonthlySales from '../components/accounts/MonthlySales'
import SalesExpenditureGraph from '../components/accounts/SalesExpenditureGraph'
import PageHeader from '../components/PageHeader'
import AccountImage from '../data/icons/Accounts.png'
import Layout from '../components/Layout'

const Accounts = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Accounts" icon={AccountImage} />
      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="bg-white rounded-sm shadow-md p-4">
          <h1>Sales and Expenditure Grap</h1>
          <SalesExpenditureGraph />
        </div>
        <div className="bg-white rounded-sm shadow-md p-4">
          <h1>Sales This Month</h1>
          <MonthlySales />
        </div>

        <Accounting />

        <div className="bg-white rounded-sm shadow-md p-4">
          <MonthlyExpense />
        </div>
      </div>
    </Layout>
  )
}

export default Accounts