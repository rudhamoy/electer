import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AddDC from '../components/bills/AddDC'
import AddInvoice from '../components/bills/AddInvoice'
import AddPurchaseOrder from '../components/bills/AddPurchaseOrder'
import AddQuotation from '../components/bills/AddQuotation'
import AddReceivedInvoice from '../components/bills/AddReceivedInvoice'
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

  const {view} = useSelector(state => state.activity)

  const [addInvoice, setAddInvoice] = useState(false)
  const [addPurchase, setAddPurchase] = useState(false)
  const [addQuotation, setAddQuotation] = useState(false)
  const [addDeliveryCalan, setAddDeliveryChalan] = useState(false)
  const [addReceivedInvoice, setAddReceivedInvoice] = useState(false)
  const [viewInvoice, setViewInvoice] = useState(false)

  console.log(view)
  return (
    <div className="relative">
      {addInvoice === true && (
        <Drawer setOpen={setAddInvoice} title="Invoice">
          <AddInvoice setAddInvoice={setAddInvoice} />
        </Drawer>
      )}
      {addReceivedInvoice === true && (
        <Drawer setOpen={setAddReceivedInvoice} title="Received Invoice">
          <AddReceivedInvoice />
        </Drawer>
      )}
      {addPurchase === true && (
        <Drawer setOpen={setAddPurchase} title="Purchase">
          <AddPurchaseOrder />
        </Drawer>
      )}
      {addQuotation === true && (
        <Drawer setOpen={setAddQuotation} title="Quotation">
          <AddQuotation />
        </Drawer>
      )}
      {addDeliveryCalan === true && (
        <Drawer setOpen={setAddDeliveryChalan} title="Delivery Chalan">
          <AddDC />
        </Drawer>
      )}
      {/* {view.viewType === 'invoiceDetail' && (
        <Drawer setOpen={view.viewType}>
          <h1>view details of invoice</h1>
        </Drawer>
      )} */}
      {viewInvoice === true && (
        <Drawer setOpen={setViewInvoice} title="View Invoice">
          <h1>view details of invoice</h1>
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
            <Invoice setAddInvoice={setAddInvoice} setAddReceivedInvoice={setAddReceivedInvoice} setViewInvoice={setViewInvoice} />
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