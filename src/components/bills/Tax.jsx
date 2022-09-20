import React from 'react'
import { BsPlus } from 'react-icons/bs'
import InputField from '../../utils/InputField'

const Tax = ({
    cgstRate, setCgstRate,
    sgstRate, setSgstRate,
    igstRate, setIgstRate,
    utgstRate, setUtgstRate,
    editTax, setEditTax
}) => {
    return (
        <div>

            <div className={`${editTax === true ? 'block absolute top-0 left-0 bottom-0 right-0 h-[100%] z-50 backdrop-blur-sm bg-white/30' : "hidden"}`}>
                <div className={`${editTax === true && 'absolute top-[35%] shadow-gray-500 z-50 bg-white'} border rounded-md shadow-md`}>
                    <div className="border-b  px-3 flex items-baseline justify-between">
                        <p className="font-semibold">Tax</p>
                        <button onClick={() => setEditTax(!editTax)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${editTax === true && 'rotate-45 text-red-500'} text-base`} /> {editTax !== true && 'Edit Tax'}</button>
                    </div>
                    <div className="grid grid-cols-4 gap-x-4 p-2 px-3">
                        <InputField type="number" my="2" labelName="CGST Rate" value={cgstRate} onChange={e => setCgstRate(e.target.value)} />
                        <InputField type="number" my="2" labelName="SGST Rate" value={sgstRate} onChange={e => setSgstRate(e.target.value)} />
                        <InputField type="number" my="2" labelName="IGST Rate" value={igstRate} onChange={e => setIgstRate(e.target.value)} />
                        <InputField type="number" my="2" labelName="UTGST Rate" value={utgstRate} onChange={e => setUtgstRate(e.target.value)} />
                    </div>
                </div>
            </div>

            <div>
                <div className="borderImp rounded-md mb-4">
                        <div className="border-b  px-3 flex items-baseline justify-between">
                            <p className="font-semibold">Tax</p>
                            <button onClick={() => setEditTax(!editTax)} className="p-2 flex items-center gap-x-1 text-blue-500 font-semibold"><BsPlus className={`${editTax === true && 'rotate-45 text-red-500'} text-base`} /> {editTax !== true && 'Edit Tax'}</button>
                        </div>
                        <div className="grid grid-cols-4 gap-x-4 p-2 px-3">
                            <InputField type="number" my="2" labelName="CGST Rate" value={cgstRate} onChange={e => setCgstRate(e.target.value)} />
                            <InputField type="number" my="2" labelName="SGST Rate" value={sgstRate} onChange={e => setSgstRate(e.target.value)} />
                            <InputField type="number" my="2" labelName="IGST Rate" value={igstRate} onChange={e => setIgstRate(e.target.value)} />
                            <InputField type="number" my="2" labelName="UTGST Rate" value={utgstRate} onChange={e => setUtgstRate(e.target.value)} />
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Tax