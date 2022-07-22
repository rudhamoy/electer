import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids'

import PageHeader from '../components/PageHeader'
import { InventoryTableGrid } from '../data/table/Table'
import InventoryIcon from '../data/icons/Inventory.png'
import { InventoryDataBox } from '../components/inventory'

import StockValue from '../data/icons/inventory/stockvalue.png'
import NoStock from '../data/icons/inventory/nostock.png'
import LowStock from '../data/icons/inventory/lowstock.png'
import TotalNum from '../data/icons/inventory/totalno.png'
import SubCategory from '../data/icons/inventory/subcategory.png'
import Category from '../data/icons/inventory/category.png'

const Inventory = () => {
  return (
    <div className="w-full overflow-hidden">
      <PageHeader pageTitle="Inventory" icon={InventoryIcon} />

      {/* inventory overview data box */}
      <div className="my-10 flex items-center justify-between">
        <InventoryDataBox icon={StockValue} title="Total Stock Value" numData="₹12,34,590" />
        <InventoryDataBox icon={TotalNum} title="Total No of Products" numData="251" />
        <InventoryDataBox icon={LowStock} title="Product with Low Stock" numData="12" />
        <InventoryDataBox icon={NoStock} title="Product with NO Stock" numData="5" />
        <InventoryDataBox icon={Category} title="Total Categories" numData="21" />
        <InventoryDataBox icon={SubCategory} title="Total Sub-Categories" numData="12" />
      </div>

      {/* Table */}
      <div className="my-10 mt-20 bg-gray-100 rounded-sm p-3">
        <GridComponent
          allowPaging
          allowSorting
          toolbar={['Add', 'Edit', 'Delete', 'Search']}
          editSettings={{
            allowDeleting: true,
            allowEditing: true,
            allowAdding: true,
            mode: 'Dialog'
          }}
          width="auto"
        >
          <ColumnsDirective>
            {InventoryTableGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter, Search]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Inventory