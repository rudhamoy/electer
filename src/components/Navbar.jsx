import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Avatar from '../data/avatar3.png'
import { AiFillBell, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../context/ContextProvider'

const SearchBar = () => (
    <div className="flex border border-gray-100 w-80 h-8 overflow-hidden">
        <input type="search" placeholder='SEARCH HERE' className="h-full w-[80%] outline-none bg-gray-200 px-1" />
        <div className='bg-gray-400 h-[100%] w-[20%] flex justify-center items-center'>
            <AiOutlineSearch className='text-2xl' />
        </div>
    </div>
)

const Navbar = () => {

    const { setActiveMenu } = useStateContext()

    return (
        <div className="flex justify-between items-center p-2 md:mx-6">
            <div className="flex gap-2 items-center">
                <TooltipComponent content="Menu" position="BottomCenter">
                    <button 
                    type="button"
                    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
                    onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu )}
                    >
                        <AiOutlineMenu className='text-[#03C9D7]' />
                    </button>
                </TooltipComponent>
                <p className="text-gray-400 text-sm font-semibold">Thursday / 07/07/22</p>
            </div>
            <div className='flex items-center gap-3'>
                <SearchBar />
                <TooltipComponent
                    content="Profile"
                    position='BottomCenter'
                >
                    <img src={Avatar} className="w-[40px] h-[40px] rounded-full cursor-pointer" />
                </TooltipComponent>
                <TooltipComponent content="Notifications" position="BottomCenter">
                    <button type="button"
                        className="relative text-xl rounded-full hover:bg-light-gray"
                    >
                        <span
                            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 bg-red-700"
                        />
                        <AiFillBell className="text-3xl" />
                    </button>
                </TooltipComponent>
            </div>
        </div>
    )
}

export default Navbar