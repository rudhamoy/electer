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
            // className={`p-2 px-3 text-xs text-blue-500 flex gap-x-1 items-center font-semibold`}
            className={`${(className) ? 'text-blue-500' : 'text-red-500'} p-2 px-3 text-xs flex gap-x-1 items-center font-semibold`}
            onClick={onClick}
        >
            {btnContent}
        </button>
    )
}

export default ActionBtn