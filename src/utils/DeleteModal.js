import React from 'react'

const DeleteModal = ({onClick, handleCancel}) => {
    return (
        <div>
            <p>Are you sure ?</p>
            <div className="flex gap-x-4">
                <button className="p-1 px-6 rounded-sm bg-red-500 text-white" onClick={onClick}>Yes</button>
                <button className="p-1 px-6 rounded-sm bg-blue-500 text-white" onClick={handleCancel}>NO</button>
            </div>
        </div>
    )
}

export default DeleteModal