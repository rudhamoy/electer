import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Accounts, Dashboard, MyClients, MyEnterprise, Payroll, Bills, Inventory, Login, Register } from './pages'
import { Navbar, Sidebar } from './components'
import ProtectedRoute from './utils/ProtectedRoute'

const App = () => {
  const { activeMenu } = useSelector(state => state.activity)

  const user = true

  return (
    <div className="bg-[#EFEFF7]">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu && (
            <div className="w-[20%] fixed sibebar dark:bg-secondary-dark-bg bg-[#E5E5EA]">
              <Sidebar />
            </div>
          )}
          <div className={`${activeMenu ? 'md:ml-[20%] w-[80%]' : 'flex-2 w-[100%]'}  min-h-screen`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  w-full">
              <Navbar />
            </div>
            <div className="p-4 px-6">
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Dashboard />} exact />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/my_clients" element={<MyClients />} />
                  <Route path="/my_enterprise" element={<MyEnterprise />} />
                  <Route path="/payroll" element={<Payroll />} />
                  <Route path="/bills" element={<Bills />} />
                  <Route path="/inventory" element={<Inventory />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App