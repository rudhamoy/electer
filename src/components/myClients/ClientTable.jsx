import React, { useState, useEffect } from 'react'
import { Space, Table, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { myClientColumn } from '../../data/table/Table';
import ClientForm from './ClientForm';
import ActionBtn from '../../utils/ActionBtn';
import { fetchClients, deleteClient } from '../../features/client/clientSlice';
import { modalBtnCondition } from '../../features/activity/activitySlice';
import DeleteModal from '../../utils/DeleteModal';

const ClientTable = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const [deleteId, setDeleteId] = useState()
    const [editData, setEditData] = useState()

    const { clients, status } = useSelector(state => state.clients);
    const auth = useSelector(state => state.auth.auth)

    const dispatch = useDispatch()

    const handleOk = () => {
        setShowAdd(false)
        setDeleteModal(false)
        setShowEdit(false)
    };

    const handleCancel = () => {
        setShowAdd(false)
        setDeleteModal(false)
        setShowEdit(false)
    };

    const newColumns = [
        ...myClientColumn,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (<Space size="middle">
                    <button
                        className="text-blue-500 border px-1 rounded-sm border-blue-500"
                        onClick={() => {
                            setShowEdit(true)
                            setEditData(record)
                            dispatch(modalBtnCondition('edit'))
                        }}
                    >Edit</button>
                    <button className="text-red-500 border px-1 rounded-sm border-red-500" onClick={() => {
                        setDeleteModal(true)
                        setDeleteId(record.id)
                    }}>Delete</button>
                </Space>
                )
            },
        },
    ]


    const newClientData = []
    clients.map((item, index) => {

        const indexNo = {
            index: index
        }

        let newList = {
            ...item,
            ...indexNo
        }

        return newClientData.push(newList)
    })

    useEffect(() => {
        if (status === "succeeded") {
            dispatch(fetchClients())
        }
        dispatch(fetchClients())
        if (status === 'loading') {
            dispatch(fetchClients())
        }

    }, [dispatch])

    return (
        <>
            {/* Adding client modal */}
            {showAdd === true && (
                <Modal title="Add Client" width={650} visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
                    <ClientForm setShowAdd={setShowAdd} />
                </Modal>
            )}
            {/* Edit client modal */}
            {showEdit === true && (
                <Modal title="Add Client" width={650} visible={showEdit} onOk={handleOk} onCancel={handleCancel}>
                    <ClientForm setShowEdit={setShowEdit} data={editData} />
                </Modal>
            )}
            {/* delete client modal */}
            {deleteModal === true && (
                <Modal title="Delete Client" width={650} visible={deleteModal} onOk={handleOk} onCancel={handleCancel}>
                    <DeleteModal
                        onClick={() => {
                            dispatch(deleteClient(deleteId))
                            if (status === 'succeeded') {
                                dispatch(fetchClients())
                                setDeleteModal(false)
                            }
                        }}
                        handleCancel={handleCancel}
                    />
                </Modal>
            )}
            <div>
                <div className="flex items-center justify-end mb-2">
                    <ActionBtn
                        createName="Client"
                        className={showAdd === false}
                        onClick={() => {
                            setShowAdd(!showAdd)
                              dispatch(modalBtnCondition('add'))
                        }}
                        btnCondition={showAdd === true}
                    />
                </div>
                <Table columns={newColumns} dataSource={newClientData} loading={status === 'loading' && true} />
            </div>
        </>
    )
}

export default ClientTable