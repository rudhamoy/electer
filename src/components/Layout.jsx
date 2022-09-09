import React, { useRef, useState, useEffect } from 'react'
import { Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md'

import { Navbar, Sidebar } from './index'
import { activeMenuFunc } from '../features/activity/activitySlice';
import { stubFalse } from 'lodash';

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const ref = useRef()

  const [show, setShow] = useState(false)
  const [showSide, setShowSide] = useState(false)
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const { activeMenu } = useSelector(state => state.activity)

  const collapseExpand = (
    <Tooltip title={activeMenu ? 'Collapse' : 'Expand'} color="cyan" placement="right">
      <button
        type="button"
        className="absolute right-0 top-5 -mr-[14px] bg-gray-50 hover:bg-[#03C9D7] hover:text-white border rounded-full text-xl p-1"
        onClick={() => dispatch(activeMenuFunc())}
      >
        <MdKeyboardArrowRight className={`${activeMenu && "rotate-180"}`} />
      </button>
    </Tooltip>
  )

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {/* show menu when collapsed */}
      {(show || showSide) && (
        <div className="absolute  left-0 top-0 bottom-0 z-50 ">
          <div
            onMouseEnter={() => setShowSide(true)}
            onMouseLeave={() => setShowSide(false)}
            className="fixed w-[18%] bg-[#E5E5EA] sidebar borderImp">
            {/* button to collapse/expand */}
            {collapseExpand}
            <Sidebar />
          </div>
        </div>
      )}

      {/* Show menu when expanded */}
      <div className={`${activeMenu ? "w-[18%] dark:bg-secondary-dark-bg bg-[#E5E5EA]" : "w-[2%]"} fixed h-[100%] border border-gray-300`}>
        {activeMenu ? (
          <Sidebar />
        ) : (
          // show when collapsed - with hover function
          <div
            ref={ref}
            onMouseEnter={() => {
              setShow(true)
            }}
            onMouseLeave={() => {
              setShow(false)
            }}
            className="h-[100%]">
          </div>
        )}
        {/* button to collapse/expand */}
        {collapseExpand}
      </div>

      {/* navbar and the and ui component */}
      <div className={`${activeMenu ? 'md:ml-[18%] w-[82%]' : 'flex-2 ml-6 w-[98%]'}  min-h-screen`}>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  w-full">
          <Navbar />
        </div>
        <div className={`p-4 ${activeMenu ? "px-6" : 'px-6'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout