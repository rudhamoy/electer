import React from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'


const ActionBtn = ({ className, onClick, createName, btnCondition }) => {

    let btnContent = ((btnCondition) ? (
        <>
            <AiOutlineClose />
            Cancel

        </>) : (
        <>
            <AiOutlinePlus />
            Add {createName}
        </>
    ))

    return (
        <button
            className={`${(className) ? 'bg-blue-500' : 'bg-red-500'} rounded-md p-2 px-3 text-xs text-white flex gap-x-1 items-center`}
            onClick={onClick}
        >
            {btnContent}
        </button>
    )
}

export default ActionBtn