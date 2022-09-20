import React, { useState } from 'react'
import Accounting from '../components/accounts/Accounting'
import MonthlyExpense from '../components/accounts/MonthlyExpense'
import MonthlySales from '../components/accounts/MonthlySales'
import SalesExpenditureGraph from '../components/accounts/SalesExpenditureGraph'
import PageHeader from '../components/PageHeader'
import AccountImage from '../data/icons/Accounts.png'
import Layout from '../components/Layout'
import AddDrawer from '../components/accounts/AddDrawer'

const Accounts = () => {

  const [ open, setOpen ] = useState(false)
  
  return (    
    <div className="relative">
      {open === true && (
        <AddDrawer setOpen={setOpen} />
      )}
    <Layout>
      <PageHeader pageTitle="Accounts" icon={AccountImage} />
      <div className="grid grid-cols-2 gap-10 my-10">
        <div className="shadoww rounded-md borderImp p-4">
          <h1>Sales and Expenditure Grap</h1>
          <SalesExpenditureGraph />
        </div>
        <div className=" rounded-md borderImp p-4">
          <h1>Sales This Month</h1>
          <MonthlySales />
        </div>
        <Accounting setOpen={setOpen} />
        <div className=" rounded-md borderImp p-4">
          <MonthlyExpense />
        </div>
      </div>
    </Layout>
    </div>
  )
}

export default Accounts