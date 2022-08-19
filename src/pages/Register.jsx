import React from 'react'
import { FaRegStopCircle } from 'react-icons/fa'
import RegisterBg from '../components/auth/RegisterBg'
import RegisterForm from '../components/auth/RegisterForm'
import Logo from '../data/icons/electerlogo.png'
import BgIcon from '../data/svg/undraw_add_information_j2wg.svg'

const Register = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="electer" className="w-[180px]" />
                <h1 className="text-3xl font-bold mt-6">Business & Accounting Software</h1>
                <p className="text-base text-gray-500"><span className="font-semibold text-black">Electer</span> helps Entrepreneurs to manage their business & finances</p>
            </div>

            <div className="flex justify-center items-center text-xl mt-8">
                <div className="relative">
                    <div className="bg-cyan-500 w-8 h-8 flex justify-center items-center rounded-full text-white">
                        <FaRegStopCircle />
                    </div>
                    <span className="text-gray-800 text-base font-semibold absolute -left-3 whitespace-nowrap">Sign Up</span>
                </div>
                <div className="w-[300px] bg-gray-300 h-[2px]"></div>
                <div className="relative">
                    <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full text-gray-400">
                        <FaRegStopCircle />
                    </div>
                    <span className="text-gray-800 text-base font-semibold absolute -left-3">Business</span>
                </div>
            </div>

            <div className="flex justify-evenly mt-20 w-full ">
                <div className=" shadow-md p-2 ">
                    <RegisterForm />
                </div>
                <div>
                    <img src={BgIcon} alt="bg" className="w-[420px]" />
                </div>
            </div>
        </div>
    )
}

export default Register