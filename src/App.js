import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Accounts, Dashboard, MyClients, MyEnterprise, Payroll, Bills, Inventory } from './pages'
import { Navbar, Sidebar } from './components'
import { useStateContext } from './context/ContextProvider'

const App = () => {
  const { activeMenu } = useStateContext()

  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu && (
            <div className="w-[20%] fixed sibebar dark:bg-secondary-dark-bg bg-gray-100">
            <Sidebar />
          </div>
          )}
          <div className={`${activeMenu ? 'md:ml-[20%] w-[80%]' : 'flex-2 w-[100%]'}  min-h-screen`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  w-full">
            <Navbar />
            </div>
            <div className="p-4 px-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/my_clients" element={<MyClients />} />
                <Route path="/my_enterprise" element={<MyEnterprise />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/inventory" element={<Inventory />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App