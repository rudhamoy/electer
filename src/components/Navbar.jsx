import React, { useEffect, useState } from 'react'
import { Tooltip } from 'antd';
import Avatar from '../data/avatar3.png'
import { AiFillBell, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { activeMenuFunc } from '../features/activity/activitySlice';

const SearchBar = () => (
    <div className="flex border border-gray-100 w-80 h-8 overflow-hidden">
        <input type="search" placeholder='SEARCH HERE' className="h-full w-[80%] outline-none bg-gray-200 px-1" />
        <div className='bg-gray-400 h-[100%] w-[20%] flex justify-center items-center'>
            <AiOutlineSearch className='text-2xl' />
        </div>
    </div>
)

const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const [showNav, setShowNav] = useState(true)

    useEffect(() => {
        if(location.pathname === '/register') {
            setShowNav(false)
        }
    }, [location])

    return (
        <>
        {showNav === true && (
            <div className="flex justify-between items-center p-2 md:mx-6">
            <div className="flex gap-2 items-center">
                <Tooltip title="Menu" color="cyan" placement="bottom">
                    <button 
                    type="button"
                    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
                    // onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu )}
                    onClick={() => dispatch(activeMenuFunc())}
                    >
                        <AiOutlineMenu className='text-[#03C9D7]' />
                    </button>
                </Tooltip>
                <p className="text-gray-400 text-sm font-semibold">Thursday / 07/07/22</p>
            </div>
            <div className='flex items-center gap-3'>
                <SearchBar />
                <Tooltip
                    title="Profile"
                    placement='bottom'
                    color="cyan"
                >
                    <Link to="/register">
                    <img src={Avatar} className="w-[40px] h-[40px] rounded-full cursor-pointer" />
                    </Link>
                </Tooltip>
                <Tooltip title="Notifications" placement="bottom" color="cyan">
                    <button type="button"
                        className="relative text-xl rounded-full hover:bg-light-gray"
                    >
                        <span
                            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 bg-red-700"
                        />
                        <AiFillBell className="text-3xl" />
                    </button>
                </Tooltip>
            </div>
        </div>
        )}
        </>
    )
}

export default Navbar