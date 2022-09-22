import React,{ useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

import Logo from '../data/icons/electerlogo.png'
import MyEnterprise from '../data/icons/MyEnterprise.png'
import Logout from '../data/icons/Logout.png'

import { links } from '../data/dummy'
import { hideSidebar } from '../features/activity/activitySlice';

const Sidebar = () => {
    const dispatch = useDispatch()
    const {activeMenu} = useSelector(state => state.activity)


    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-gray-100 text-xs m-2 font-semibold uppercase';

    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-700 dark:hover:text-black text-xs hover:bg-gray-100 m-2 font-semibold uppercase';

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 '>
            {/* {activeMenu && ( */}
                <>
                    <div className="my-10 flex flex-col justify-center items-center">
                        <div>
                            {/* Logo */}
                            <img src={Logo} alt="" className="w-[150px]" />
                        </div>
                        <div className="flex items-center justify-around border-t-4 border-white mt-2">
                        <Tooltip title="My Enterprise" color="cyan" placement="bottom">
                            <NavLink
                                to='/my_enterprise?tab=firm'
                            >
                                <img src={MyEnterprise} className="w-[25px]" />
                            </NavLink>

                            </Tooltip>
                            <Tooltip title="Logout" color="cyan" placement="bottom">
                            <NavLink
                                to='/'
                                className={normalLink}
                            >
                                <img src={Logout} className="w-[25px]" />
                            </NavLink>

                            </Tooltip>
                        </div>
                    </div>
                    <div className="mt-10">
                        {links.map((item, index) => (
                            <NavLink
                                to={`/${item.link}`}
                                key={index}
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                style={({ isActive }) => ({
                                    // backgroundColor: isActive ? 'white' : '',
                                    color: isActive ? '#03C9D7' : '',
                                })}
                            >
                                <img className="h-[25px]" src={item.icon} alt={item.title} />
                                <span>{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </>
            {/* )} */}
        </div>
    )
}

export default Sidebar