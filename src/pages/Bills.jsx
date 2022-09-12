import React from 'react'
import BillsInfo from '../components/bills/BillsInfo'
import DeliveryChalan from '../components/bills/DeliveryChalan'
import Invoice from '../components/bills/Invoice'
import PurchaseOrder from '../components/bills/PurchaseOrder'
import Quotation from '../components/bills/Quotation'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import BillsIcon from '../data/icons/Bills.png'

const Bills = () => {
  return (
    <Layout>
      <PageHeader icon={BillsIcon} pageTitle="Bill" />
      <div className='mt-10 grid grid-cols-2 gap-5'>
        {/* INFo */}
        <div className="col-span-2">
        <BillsInfo />
        </div>
        <div className=" borderImp rounded-md p-2">
          <Invoice />
        </div>
        <div className=" borderImp rounded-md p-2">
          <PurchaseOrder />
        </div>
        <div className=" borderImp rounded-md p-2">
          <Quotation />
        </div>
        <div className=" borderImp rounded-md p-2">
          <DeliveryChalan />
        </div>
      </div>
    </Layout>
  )
}

export default Bills