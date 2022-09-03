import React from 'react';
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader';
import DashboardIcon from '../data/icons/Dashboard.png'

const Dashboard = () => {
  return (
    <Layout>
       <PageHeader icon={DashboardIcon} pageTitle="Hi, Rudhamoy Debbarma" />
      <div className="grid grid-cols-3 gap-3 mt-20">
        <div className="border p-2">My growth chart</div>
        <div className="border p-2">Calender</div>
        <div className="border p-2">Product Sales Contribution</div>
        <div className="border p-2">Today's Attendance</div>
        <div className="border p-2">Today's Income</div>
        <div className="border p-2">Today's Expenses</div>
      </div>
    </Layout>
  )
}

export default Dashboard