import React, { useState, useEffect } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { Space, Table, Tag, Modal } from 'antd';
import { AiFillFilter } from 'react-icons/ai'

import { inventoryData, inventoryColumnList } from '../../data/table/Table'
import SelectComponent from '../SelectComponent'
import InventoryForm from './InventoryForm'

const InventoryTable = () => {
    let filterSample = []
    let newColumns = []
    // const { inventoryFilData } = useStateContext()


    const [modalData, setModalData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showSelect, setShowSelect] = useState(false)
    const [inventoryFilData, setInventoryFilData] = useState()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // map the column list - push to array list
    inventoryColumnList.map(item => (
        newColumns.push(item)
    ))

    // Add New Column - action 
    const inventoryColumns = [
        ...newColumns,
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (<Space size="middle">
                    <button className="text-green-500 border px-1 rounded-sm border-green-500" onClick={() => {
                        setModalData(record);
                        setIsModalVisible(true)
                    }}>Details</button>
                    <button className="text-blue-500 border px-1 rounded-sm border-blue-500">Edit</button>
                    <button className="text-red-500 border px-1 rounded-sm border-red-500">Delete</button>
                </Space>
                )
            },
        },
    ];

    // Filter data table
    inventoryData.map(i => {
        const { subcategory } = i
        inventoryFilData?.map(item => {
            if (subcategory === item) {
                filterSample.push(i)
            }
        })
        
    })

    return (
        <>
            {modalData && isModalVisible === true && (

                <Modal title="Product Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <InventoryForm />
                </Modal>
            )}
            {/* FIlter & Sorting & Add */}
            <div className="my-8">
                <div>
                    <button onClick={() => setShowSelect(!showSelect)}>
                        <AiFillFilter className="cursor-pointer text-2xl" />
                    </button>
                    {showSelect === true ? (<SelectComponent />) : (<p className="font-semibold text-xs">Filter</p>)}
                </div>
            </div>
            {/* table */}
            <Table columns={inventoryColumns} dataSource={!filterSample.length ? inventoryData : filterSample} />
        </>
    )
}

export default InventoryTable;