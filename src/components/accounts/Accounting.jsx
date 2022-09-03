import React, { useState } from 'react'
import { Modal } from 'antd'

import GST from '../../data/icons/GST.png'
import Reports from '../../data/icons/Reports.png'
import TotalSales from '../../data/icons/TotalSales.png'
import CreateSale from './CreateSale'

const AccountBox = ({icon, title, onClick}) => {
    return (
      <div className={`bg-white w-[150px] h-[110px] flex justify-between flex-col items-center p-2 shadow-md rounded-sm`}>
        <img src={icon} alt={title}  className="h-[40px] w-[35px]" />
        <button onClick={onClick} className="text-lg font-semibold">{title}</button>
      </div>
    )
  }

const Accounting = () => {
    const [showAddSale, setShowAddSale] = useState(false)

    const showAdd = ()=> {
        setShowAddSale(true)
    }
    const handleOk = ()=> {
        setShowAddSale(false)
    }
    const handleCancel = ()=> {
        setShowAddSale(false)
    }

  return (
    <div>
        {showAddSale === true && (
             <Modal width="600px" title="Add New Sales" visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
               <CreateSale />
            </Modal>
        )}
        <div className="flex gap-4 flex-wrap">
        <AccountBox icon={GST} title="GST RETURNS" />
        <AccountBox icon={Reports} title="REPORTS" />
        <AccountBox 
        icon={Reports} 
        title="CREATE SALES" 
        onClick={() => {
            setShowAddSale(true)
        }} />
        <AccountBox icon={TotalSales} title="TOTAL SALES" />
      </div>
    </div>
  )
}

export default Accounting