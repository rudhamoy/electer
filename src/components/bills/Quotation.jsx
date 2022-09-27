import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Quotation = ({setAddQuotation}) => {
    return (
        <div>

            <div className="flex justify-between items-baseline">
                <p className="font-semibold">Quotation</p>
                <div className="flex gap-x-4 text-xs">
                    <button className="px-3 flex items-center gap-x-1  rounded-full leading-3"><GrList /> Templates</button>
                    <button onClick={() => setAddQuotation(true)} className="p-2 flex items-center gap-x-1 text-blue-500 hover:bg-gray-50 rounded-full font-semibold"><BsPlus className="text-base" /> Create New</button>
                </div>
            </div>

            <div className="borderImp rounded-md p-1 px-2 bg-gray-50 text-xs">
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
                                Saved Quotations
                            </span>
                        }
                        key="2"
                    >
                        <h1>tab pane two content</h1>
                    </TabPane> 
                </Tabs>
            </div>

        </div>
    )
}

export default Quotation