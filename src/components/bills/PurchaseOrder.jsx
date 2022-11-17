import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'
import { Tabs, Pagination } from 'antd';

import BillBoxContainer from './billsComponents/BillBoxContainer';

const { TabPane } = Tabs;

const PurchaseOrder = ({ setAddPurchase }) => {
    return (
        <div>

            <div className="flex justify-between items-baseline">
                <p className="font-semibold">Purchase Order</p>
                <div className="flex gap-x-4 text-xs">
                    <button className="px-3 flex items-center gap-x-1  rounded-full leading-3"><GrList /> Templates</button>
                    <button onClick={() => setAddPurchase(true)} className="p-2 flex items-center gap-x-1 text-blue-500 hover:bg-gray-50 rounded-full font-semibold"><BsPlus className="text-base" /> Create New</button>
                </div>
            </div>

            <BillBoxContainer>
                <Tabs size="small" defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span className="text-xs font-semibold">
                                History
                            </span>
                        }
                        key="1"
                    >
                        <div className="text-xs">
                            <h1>Some answer</h1>
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className="text-xs font-semibold">
                                Saved PO
                            </span>
                        }
                        key="2"
                    >
                        <h1>tab pane two content</h1>
                    </TabPane>
                </Tabs>
            </BillBoxContainer>
        </div>
    )
}

export default PurchaseOrder