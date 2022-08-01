import React from 'react'
import LogoSlip from '../../data/icons/logp.png'

const SalarySlip = ({ salaryData }) => {
    return (
        <div className='border-2 w-[100%]'>
            {/* FIrst box */}
            <div className="flex">
                <div className="w-[55%] flex justify-center items-center">
                    <img src={LogoSlip} alt="logo" className="w-[65px]" />
                </div>
                <div className='border-l-2 border-r-2 w-full'>
                    <div className="flex justify-center items-center border-b-2">
                        <h1 className="font-bold text-lg uppercase">Salary Slip</h1>
                    </div>
                    <div className="flex justify-center items-center text-xs font-semibold">
                        <p>Aug 2022</p>
                    </div>
                </div>
                <div className="w-[55%] flex justify-center items-center">
                    <h1 className="font-bold text-lgs uppercase">confidential</h1>
                </div>
            </div>
            {/* Second box */}
            <div className="border-t-2 flex text-xs font-bold">
                <div className="w-[100%] border-r-2 pl-2">
                    <p>Name: </p>
                    <p>Employee ID: </p>
                    <p>Monthly Pay: </p>
                </div>
                <div className="w-[100%] pl-2">
                    <p>Department: </p>
                    <p>Designation: </p>
                    <div className="flex gap-x-14">
                        <span>Absent:</span>
                        <span>Half Days:</span>
                    </div>
                </div>
            </div>
            {/* Third */}
            <div className="bg-blue-400 border-t-2 flex text-white font-bold h-[30px]">
                <div className="w-[100%] border-r-2 flex justify-center items-center ">
                    <p className="mt-2">Description</p>
                </div>
                <div className="w-[100%] flex">
                    <div className="w-[100%] flex justify-center items-center border-r-2">
                        <p className="mt-2">Earnings</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center">
                        <p className="mt-2">Deductions</p>
                    </div>
                </div>
            </div>
            {/* fourth */}
            <div className="border-t-2 flex text-xs font-bold">
                <div className="w-[100%] border-r-2">
                    <div className="pl-2">
                    <p>Basic Salary: </p>
                    <p>Deatness Allowance: </p>
                    <p>Travelling Allowance: </p>
                    <p>Food Allowance: </p>
                    <p>Petrol Allowance: </p>
                    <p>Provident Fund(PF): </p>
                    <p>Employee State Insurance(ESI): </p>
                    </div>
                    <div className="flex">
                        <div className="w-[100%]">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="w-[100%]">
                            <p>Leave Deductions</p>
                            <p>Half Days Deductions</p>
                        </div>
                    </div>
                </div>
                <div className="w-[100%]  flex">
                    <div className="w-[100%] border-r-2 ">
                        <div className="text-right pr-4">
                        <p>95000.00 </p>
                        <p>4000.00 </p>
                        <p>3500.00 </p>
                        <p>2000.00 </p>
                        <p>500.00 </p>
                        <p>1875.00 </p>
                        <p>875.00 </p>
                        </div>
                    </div>
                    <div className="w-[100%] relative">
                        <div className="text-right pr-4 absolute bottom-1">
                        <p>3200.00</p>
                        <p>625.00</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth */}
            <div className=" border-t-2 flex font-bold h-[30px]">
                <div className="w-[100%] border-r-2 text-left ">
                    <p className="pl-2">Total</p>
                </div>
                <div className="w-[100%] flex">
                    <div className="w-[100%] text-right border-r-2">
                        <p className="pr-2">22,250.00</p>
                    </div>
                    <div className="w-[100%] text-right">
                        <p className="pr-2">3825.00</p>
                    </div>
                </div>
            </div>
            {/* Sixth Box */}
            <div className="flex border-t-2 h-[53px]">
                <div className="w-[100%] border-r-2 flex items-center">
                    <h1 className="pl-4">Authorized Sign</h1>
                </div>
                <div className="w-[100%]">
                <div className="bg-blue-400 flex justify-center items-center border-b-2">
                        <h1 className="text-white font-semibold">Net Pay</h1>
                    </div>
                    <div className="flex justify-center items-center text-xs font-semibold">
                        <p>18,425.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalarySlip