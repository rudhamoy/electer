import React from 'react'
import { Table } from 'antd'

const { Column, ColumnGroup } = Table;

const GstThree = () => {
    return (
        <div>
            {/* statistics data */}
            <div className="grid grid-cols-2 mb-6">
                <div>
                    <p>Total Invoice: <span className="font-bold">198</span></p>
                    <p>Total Sales Value: <span className="font-bold">₹1,86,345</span></p>
                </div>
                <div>
                    <p>Total Sales Value</p>
                    <div className="flex justify-between">
                        <p>CGST: <span className="font-bold">₹123456</span></p>
                        <p>SGST: <span className="font-bold">₹87333</span></p>
                        <p>IGST: <span className="font-bold">₹73838</span></p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <Table>
                <Column 
                title="SL No" 
                dataIndex="slno" 
                key="slno" 
                className="text-xs"
                />
                <Column title="Invoice" dataIndex="invoice" key="invoice" className="text-xs" />
                <Column title="Date" dataIndex="date" key="date" className="text-xs" />
                <Column title="Taxable Value" dataIndex="taxableValue" key="taxableValue" className="text-xs" />
                <ColumnGroup title="Tax" className="text-xs">
                    <Column title="CGST" dataIndex="cgst" key="cgst" className="text-xs" />
                    <Column title="SGST" dataIndex="sgst" key="sgst" className="text-xs" />
                    <Column title="IGST" dataIndex="igst" key="igst" className="text-xs" />
                </ColumnGroup>
            </Table>
        </div>
    )
}

export default GstThree