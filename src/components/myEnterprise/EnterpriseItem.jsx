import React, { useState, useEfect } from 'react'
import './enterprise.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSetting, AiOutlineDelete } from 'react-icons/ai'
import { HiViewList } from 'react-icons/hi'
import { TiPencil } from 'react-icons/ti'
import { Skeleton, Space } from 'antd';
import { useSearchParams } from 'react-router-dom'

import { modalBtnCondition } from '../../features/activity/activitySlice'


const EnterpriseItem = ({ item, setClickId }) => {
    const [visible, setVisible] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch()
    const { status } = useSelector(state => state.enterprise);

    // popover content
    const classContent = 'text-xs my-1 flex items-center gap-x-1'
    const content = (
        <div className="flex gap-x-3">
            <button
                className={classContent}
            >
                <HiViewList
                    className='text-green-500 text-2xl p-1 rounded-full bg-white shadoww'
                /> View
            </button>
            <button className={classContent}
                onClick={() => {
                    dispatch(modalBtnCondition('edit'))
                    setSearchParams({ id: item.id })
                }}
            >
                <TiPencil className="text-orange-700 text-2xl p-1 rounded-full bg-white shadoww" /> Edit
            </button>
            <button className={classContent}
            >
                <AiOutlineDelete className="text-red-500 text-2xl p-1 rounded-full bg-white shadoww" />  Delete
            </button>
        </div>
    )

    if (status !== 'succeeded') return <Skeleton avatar paragraph={{ rows: 4 }} />

    return (
        <div className="p-2 my-2  ">
            <div className="flex gap-x-3 my-2 ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="logo" className="w-[50px] border" />
                <p className="font-bold text-gray-700 text-lg uppercase cursor-pointer">{item.company_name}</p>
                <AiOutlineSetting onClick={() => setVisible(!visible)} className="cursor-pointer" />
                {visible === true && content}
            </div>
            <div>
                <p className="text-gray-600 text-sm">Business type : {" "} <span className="capitalize font-semibold">{item.business_type.name}</span></p>
                <p className="text-gray-600 text-sm -mt-2">Industry type : {" "} <span className="capitalize font-semibold">{item.IndustryType.name}</span></p>
            </div>
        </div>
    )
}

export default EnterpriseItem