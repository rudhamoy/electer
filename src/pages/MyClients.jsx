import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids'

import PageHeader from '../components/PageHeader'
import MyClientsIcon from '../data/icons/MyClients.png'
import { MyClientsTableGrid } from '../data/table/Table'

const MyClients = () => {
  return (
    <div>
      <PageHeader icon={MyClientsIcon} pageTitle="My Clients" />

      <div className="flex justify-between mt-20">
        {/* Table */}
      <div className="bg-gray-100 rounded-sm p-3 w-[65%]">
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
            {MyClientsTableGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter, Search]} />
        </GridComponent>
      </div>
        {/* details overview */}
        <div>Details</div>
      </div>
    </div>
  )
}

export default MyClients