import React, { useState, useEffect } from 'react';
import { Space, Table, Modal } from 'antd';
import { AiFillFilter } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import { inventoryColumnList } from '../../data/table/Table'
import InventoryForm from './InventoryForm'
import ActionBtn from '../../utils/ActionBtn';
import { modalBtnCondition } from '../../features/activity/activitySlice';
import { fetchCat, fetchSubCat, fetchParticular, fetchProducts, deleteProduct } from '../../features/inventory/inventorySlice';
import DeleteModal from '../../utils/DeleteModal';

const InventoryTable = () => {
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth.auth)
    const { status, products } = useSelector(state => state.inventory)

    const [modalData, setModalData] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showSelect, setShowSelect] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    const [deleteId, setDeleteId] = useState()
    const [deleteModal, setDeleteModal] = useState()
    const [editData, setEditData] = useState()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false)
        setShowAdd(false)
        setShowEdit(false)
        setDeleteModal(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false)
        setShowAdd(false)
        setShowEdit(false)
        setDeleteModal(false)
    };

    const inventoryColumns = [
        ...inventoryColumnList,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (<Space size="middle">
                    <button className="text-green-500 border px-1 rounded-sm border-green-500" onClick={() => {
                        setModalData(record);
                        setIsModalVisible(true)
                        dispatch(modalBtnCondition(''))
                    }}>Details</button>
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
    ];


    useEffect(() => {
        // if(status === "succeeded") {
        //     dispatch(fetchProducts())
        // }
        dispatch(fetchCat())
        dispatch(fetchSubCat())
        dispatch(fetchParticular())
        dispatch(fetchProducts())
        if (status === 'loading') {
            dispatch(fetchCat())
            dispatch(fetchSubCat())
            dispatch(fetchParticular())
            dispatch(fetchProducts())
        }
    }, [dispatch])


    // Data for tatle -make a  copy from api and make a new object and push it to array
    const tableProducts = []
    products.map((item, index) => {
        const total = {
            total: item.price * item.quantity
        }
        let catName = {
            catName: item.category.name
        }
        let subCatName = {
            subCatName: item.sub_category.name,
        }
        let particularName = {
            particularName: item.perticulars.name
        }
        let indexNo = {
            index: index
        }

        const newList = {
            ...item,
            ...total,
            ...catName,
            ...subCatName,
            ...particularName,
            ...indexNo
        }
        return (
            tableProducts.push(newList)
        )
    })


    return (
        <>
            {/* Deatails modal */}
            {modalData && isModalVisible === true && (

                <Modal title="Product Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <InventoryForm data={modalData} />
                </Modal>
            )}
            {/* Adding product modal */}
            {showAdd === true && (
                <Modal title="Add Product" visible={showAdd} onOk={handleOk} onCancel={handleCancel}>
                    <InventoryForm setShowAdd={setShowAdd} />
                </Modal>
            )}
            {/* Delete product modal */}
            {deleteModal === true && (
                <Modal title="Delete Product" visible={deleteModal} onOk={handleOk} onCancel={handleCancel}>
                    <DeleteModal
                        onClick={() => {
                            dispatch(deleteProduct(deleteId))
                            setDeleteModal(false)
                        }}
                        handleCancel={handleCancel}
                    />
                </Modal>
            )}
            {/* Edit product modal */}
            {showEdit === true && (
                <Modal title="Edit Product" visible={showEdit} onOk={handleOk} onCancel={handleCancel}>
                    <InventoryForm setShowEdit={setShowEdit} data={editData} />
                </Modal>
            )}

            {/* FIlter & Sorting & Add */}
            <div className="my-8">
                <div>
                    <button onClick={() => setShowSelect(!showSelect)}>
                        <AiFillFilter className="cursor-pointer text-2xl" />
                    </button>
                    {/* {showSelect === true ? (<SelectComponent />) : (<p className="font-semibold text-xs">Filter</p>)} */}
                </div>
                <ActionBtn
                    className={showAdd === false}
                    onClick={() => {
                        setShowAdd(!showAdd)
                        dispatch(modalBtnCondition('add'))
                    }}
                    btnCondition={showAdd === true}
                    createName="Product"
                />
            </div>

            {/* table */}
            <Table columns={inventoryColumns} key={products.id} dataSource={tableProducts} loading={status === 'loading' && true} />
        </>
    )
}

export default InventoryTable;