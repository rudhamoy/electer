import React, { useState } from 'react'
import AddInvoice from '../components/bills/AddInvoice'
import BillsInfo from '../components/bills/BillsInfo'
import DeliveryChalan from '../components/bills/DeliveryChalan'
import Invoice from '../components/bills/Invoice'
import PurchaseOrder from '../components/bills/PurchaseOrder'
import Quotation from '../components/bills/Quotation'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import BillsIcon from '../data/icons/Bills.png'
import Drawer from '../utils/Drawer'

const Bills = () => {

  const [addInvoice, setAddInvoice] = useState(false)
  const [addPurchase, setAddPurchase] = useState(false)
  const [addQuotation, setAddQuotation] = useState(false)
  const [addDeliveryCalan, setAddDeliveryChalan] = useState(false)


  return (
    <div className="relative">
      {addInvoice === true && (
        <Drawer setOpen={setAddInvoice} title="Invoice">
          <AddInvoice setAddInvoice={setAddInvoice} />
        </Drawer>
      )}
      {addPurchase === true && (
        <Drawer setOpen={setAddPurchase} title="Purchase">
          <p>Add Purchase order here</p>
        </Drawer>
      )}
      {addQuotation === true && (
        <Drawer setOpen={setAddQuotation} title="Quotation">
          <p>Add Quotation here</p>
        </Drawer>
      )}
      {addDeliveryCalan === true && (
        <Drawer setOpen={setAddDeliveryChalan} title="Delivery Chalan">
          <p>Add Delivery Chalan here</p>
        </Drawer>
      )}
      <Layout>
        <PageHeader icon={BillsIcon} pageTitle="Bill" />
        <div className='mt-10 grid grid-cols-2 gap-5'>
          {/* INFo */}
          <div className="col-span-2">
            <BillsInfo />
          </div>
          <div className=" borderImp rounded-md p-2 shadoww">
            <Invoice setAddInvoice={setAddInvoice} />
          </div>
          <div className=" borderImp rounded-md p-2">
            <PurchaseOrder setAddPurchase={setAddPurchase} />
          </div>
          <div className=" borderImp rounded-md p-2">
            <Quotation setAddQuotation={setAddQuotation} />
          </div>
          <div className=" borderImp rounded-md p-2">
            <DeliveryChalan setAddDeliveryChalan={setAddDeliveryChalan} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Bills