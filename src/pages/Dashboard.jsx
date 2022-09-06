import React from 'react';
import { Calendar } from 'antd'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader';
import DashboardIcon from '../data/icons/Dashboard.png'

import DashboardAttendance from '../components/dashboard/DashboardAttendance';
import DashboardIncome from '../components/dashboard/DashboardIncome';
import DashboardExpenses from '../components/dashboard/DashboardExpenses';
import ProductSalesPie from '../components/dashboard/ProductSalesPie';

const Dashboard = () => {
  return (
    <Layout>
       <PageHeader icon={DashboardIcon} pageTitle="Hi, Rudhamoy Debbarma" />
      <div className="grid grid-cols-6 gap-2 mt-20">
        <div className="border p-2 col-span-4">My growth chart</div>
        <div className="border col-span-2 p-2">
          <p>Calendar</p>
          <Calendar fullscreen={false} />
        </div>
        <div className="border col-span-3">
          <p className="m-2">Product Sales Contribution</p>
          <ProductSalesPie />
        </div>
        <div className="border p-2 col-span-3">
          <p>Today's Attendance</p>
          <DashboardAttendance />
        </div>
        <div className="border p-2 col-span-3">
          <p>Today's Income</p>
          <DashboardIncome />
        </div>
        <div className="border p-2 col-span-3">
          <p>Today's Expenses</p>
          <DashboardExpenses />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard