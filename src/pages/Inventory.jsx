import React from 'react'

import PageHeader from '../components/PageHeader'
import { InventoryTableGrid } from '../data/table/Table'
import InventoryIcon from '../data/icons/Inventory.png'
import { InventoryDataBox, InventoryTable } from '../components/inventory'
import Layout from '../components/Layout'

import StockValue from '../data/icons/inventory/stockvalue.png'
import NoStock from '../data/icons/inventory/nostock.png'
import LowStock from '../data/icons/inventory/lowstock.png'
import TotalNum from '../data/icons/inventory/totalno.png'
import SubCategory from '../data/icons/inventory/subcategory.png'
import Category from '../data/icons/inventory/category.png'

const Inventory = () => {
  return (
    <Layout>
      <div className=" overflow-hidden">
        <PageHeader pageTitle="Inventory" icon={InventoryIcon} />

        {/* inventory overview data box */}
        <div className="mt-10 flex items-center justify-between borderImp rounded-md bg-gray-50 p-3">
          <InventoryDataBox icon={StockValue} title="Total Stock Value" numData="₹12,34,590" />
          <InventoryDataBox icon={TotalNum} title="Total No of Products" numData="251" />
          <InventoryDataBox icon={LowStock} title="Product with Low Stock" numData="12" />
          <InventoryDataBox icon={NoStock} title="Product with NO Stock" numData="5" />
          <InventoryDataBox icon={Category} title="Total Categories" numData="21" />
          <InventoryDataBox icon={SubCategory} title="Total Sub-Categories" numData="12" />
        </div>
        {/* Table */}
        <div className="my-10 borderImp rounded-md p-3">
          <InventoryTable />
        </div>
      </div>
    </Layout>
  )
}

export default Inventory