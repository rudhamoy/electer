import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids'

import PayrollIcon from '../data/icons/PayRoll.png'
import PageHeader from '../components/PageHeader'
import { PayrollTableGrid, PayrollData } from '../data/table/Table'

const Payroll = () => {
  return (
    <div>
      <PageHeader pageTitle="Payroll" icon={PayrollIcon} />

      {/* Table */}
      {/* <div className="bg-gray-100 rounded-sm p-3 w-[65%]">
        <GridComponent
          dataSource={PayrollData}
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
            {PayrollTableGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter, Search]} />
        </GridComponent>
    </div> */}
    </div>
  )
}

export default Payroll