import React from 'react'
import ClientTable from '../components/myClients/ClientTable'
import Layout from '../components/Layout'

import PageHeader from '../components/PageHeader'
import MyClientsIcon from '../data/icons/MyClients.png'

const MyClients = () => {
  return (
    <Layout>
      <PageHeader icon={MyClientsIcon} pageTitle="My Clients" />

      <div className="flex justify-between mt-20">
        {/* Table */}
        <div className="bg-gray-100 rounded-sm p-3 w-[65%]">
          <ClientTable />
        </div>
        {/* details overview */}
        <div>Details</div>
      </div>
    </Layout>
  )
}

export default MyClients