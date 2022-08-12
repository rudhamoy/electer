import React from 'react'
import MonthlyExpense from '../components/accounts/MonthlyExpense'
import MonthlySales from '../components/accounts/MonthlySales'
import SalesExpenditureGraph from '../components/accounts/SalesExpenditureGraph'
import PageHeader from '../components/PageHeader'
import AccountImage from '../data/icons/Accounts.png'

import GST from '../data/icons/GST.png'
import Reports from '../data/icons/Reports.png'
import TotalSales from '../data/icons/TotalSales.png'

const AccountBox = ({icon, title, color}) => {
  return (
    <div className={`bg-[${color}] w-[150px] h-[110px] flex justify-between flex-col items-center p-2 shadow-md rounded-sm`}>
      <img src={icon} alt={title}  className="h-[40px] w-[35px]" />
      <h1 className="text-white font-semibold">{title}</h1>
    </div>
  )
}

const Accounts = () => {
  return (
    <div>
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

      <div className="flex gap-x-4">
        <AccountBox icon={GST} title="GST RETURNS" color="#a33b3c" />
        <AccountBox icon={Reports} title="REPORTS" color="#3097c0" />
        <AccountBox icon={TotalSales} title="TOTAL SALES" color="#30b87a" />
      </div>

      <div className="bg-white rounded-sm shadow-md p-4">
        <MonthlyExpense />
      </div>
    </div>
    </div>
  )
}

export default Accounts