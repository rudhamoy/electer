import React, { useEffect } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Accounts, Dashboard, MyClients, MyEnterprise, Payroll, Bills, Inventory, Login, Register } from './pages'
import { Navbar, Sidebar } from './components'
import ProtectedRoute from './utils/ProtectedRoute'
import Layout from './components/Layout'
import ForgotPassword from './pages/ForgotPassword';
import Gst from './pages/Gst';

import { fetchSystemUser, fetchSystemUserById } from './features/auth/AuthSlice';

const App = () => {
  const { auth, systemUser } = useSelector(state => state.auth)

  const { id } = auth

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSystemUser())
  }, [dispatch])

  useEffect(() => {
    if(systemUser.length > 0 || id) {
      systemUser.forEach(item => {
        if(item.custom_user.id === id) {
          dispatch(fetchSystemUserById(item.id))
        }
      })
    }
  }, [dispatch, id, systemUser])


  return (
    <div className="bg-[#EFEFF7]">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/gst" element={<Gst />} />
            <Route path="/my_clients" element={<MyClients />} />
            <Route path="/my_enterprise" element={<MyEnterprise />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/inventory" element={<Inventory />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App