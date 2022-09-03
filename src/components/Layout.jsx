import React from 'react'
import { useSelector } from 'react-redux';

import { Navbar, Sidebar } from './index'

const Layout = ({children}) => {
    const { activeMenu } = useSelector(state => state.activity)
  return (
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
              {children}
            </div>
          </div>
        </div>
  )
}

export default Layout