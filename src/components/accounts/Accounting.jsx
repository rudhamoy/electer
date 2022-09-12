import React, { useState } from 'react'
import { Modal, Drawer, Button, Space } from 'antd'
import { useNavigate, Link } from 'react-router-dom'

import GST from '../../data/icons/GST.png'
import Reports from '../../data/icons/Reports.png'
import TotalSales from '../../data/icons/TotalSales.png'
import CreateSale from './CreateSale'

const AccountBox = ({ icon, title, onClick }) => {
  return (
    <div className={`bg-white w-[150px] h-[110px] flex justify-between flex-col items-center p-2 shadow-md rounded-md`}>
      <img src={icon} alt={title} className="h-[40px] w-[35px]" />
      <button onClick={onClick} className="text-lg font-semibold">{title}</button>
    </div>
  )
}

const Accounting = ({setOpen}) => {
  const [showAddSale, setShowAddSale] = useState(false)
  const navigate = useNavigate()

  const showAdd = () => {
    setShowAddSale(true)
  }
  const handleOk = () => {
    setShowAddSale(false)
  }
  const handleCancel = () => {
    setShowAddSale(false)
  }

  return (
    <div>
      {/* {showAddSale === true && (
        <Modal width="600px" title="Add New Sales" visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
          <CreateSale />
        </Modal>
      )} */}
      <div className="flex justify-between gap-y-5 flex-wrap">
        <AccountBox
          icon={GST}
          title="GST RETURNS"
          onClick={() => navigate('/accounts/gst?gstTab=one')}
        />
        <AccountBox icon={Reports} title="REPORTS" />
        <AccountBox
          icon={Reports}
          title="CREATE SALES"
          onClick={() => {
            // setShowAddSale(true)
            setOpen(true)
          }} />
        <AccountBox icon={TotalSales} title="TOTAL SALES" />
      </div>
    </div>
  )
}

export default Accounting