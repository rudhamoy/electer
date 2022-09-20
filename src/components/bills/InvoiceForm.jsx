import React from 'react';
import { Table } from 'antd'
import { invoiceColumn } from '../../data/table/GstTable';

const InvoiceForm = ({
    clients, client,
    date, orderList,
    submitHandler, totalAmount, grandTotal,
    totalCgst,
    totalSgst,
    totalIgst,
    totalUtgst,
}) => {

    return (
        <div className="text-xs grid grid-cols-2 gap-y-2">
            {/* client details */}
            <div>
                <p className="font-semibold text-sm">Client</p>
                <div>
                    {clients.map(item => {
                        if (item.id === client) {
                            return (
                                <div key={item.id}>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            {/* invoice no */}
            <div>
                <div>
                    <p className="font-semibold">Invoice Number: <span className="text-gray-500">EL23009</span></p>
                    <p className="font-semibold">Issue Date: <span className="text-gray-500">{date}</span></p>
                </div>
            </div>

            {/* Product list */}
            <div className="col-span-2">
                <p className="font-semibold text-sm">Product list</p>
                <Table
                    sticky
                    pagination={false}
                    columns={invoiceColumn}
                    dataSource={orderList} />
            </div>

            {/* Tax info */}
            <div className="col-span-2">
                <p className="font-semibold text-sm">Tax info</p>
                <div className="borderImp rounded-md p-2 px-3">
                    <p className="text-right">Total Amount: <span>{totalAmount}</span></p>
                    <div className="grid grid-cols-2 gap-x-2">
                        <p>SGST: <span>{totalSgst.toFixed(2)}</span></p>
                        <p>CGST: <span>{totalCgst.toFixed(2)}</span></p>
                        <p>IGST: <span>{totalIgst.toFixed(2)}</span></p>
                        <p>UTGST: <span>{totalUtgst.toFixed(2)}</span></p>
                    </div>
                    <p className="text-right">Grand Total: <span>{grandTotal}</span></p>
                </div>
            </div>
            <button onClick={submitHandler}>Submit Invoice</button>
        </div>
    )
}

export default InvoiceForm