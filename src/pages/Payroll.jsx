import React from 'react'
import PayrollIcon from '../data/icons/PayRoll.png'
import PageHeader from '../components/PageHeader'
import PayrollTable from '../components/payroll/PayrollTable'
import Layout from '../components/Layout'

const Payroll = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Payroll" icon={PayrollIcon} />

      {/* Table */}
      <div className="borderImp rounded-md p-3 mt-20">
        <PayrollTable />
    </div>
    </Layout>
  )
}

export default Payroll