import React from 'react'
import PayrollIcon from '../data/icons/PayRoll.png'
import PageHeader from '../components/PageHeader'
import PayrollTable from '../components/payroll/PayrollTable'

const Payroll = () => {
  return (
    <div>
      <PageHeader pageTitle="Payroll" icon={PayrollIcon} />

      {/* Table */}
      <div className="bg-white rounded-md p-3 mt-20">
        <PayrollTable />
    </div>
    </div>
  )
}

export default Payroll