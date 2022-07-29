import { FileSyncOutlined, IdcardOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

const InputForm = ({labelName, forName, type}) => {
    return (
        <div className="flex flex-col gap-y-2 my-1">
        <label className='text-xs' htmlFor={forName}>{labelName}</label>
        <input type={type} className="bg-gray-200 p-1 w-full" />
    </div>
    )
}

const EmployeeInfo = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={
                    <span>
                        <IdcardOutlined />
                        Basic Information
                    </span>
                }
                key="1"
            >
                {/* Basic Info */}

                <div className="grid grid-cols-2 gap-x-2">
                    <InputForm labelName="Name" forName="name" type="text" />
                    <InputForm labelName="Last Name" forName="lastName" type="text" />
                    <InputForm labelName="Department" forName="department" type="text" />
                    <InputForm labelName="Post" forName="post" type="text" />
                    <InputForm labelName="Mobile" forName="mobile" type="number" />
                    <InputForm labelName="Email Id" forName="email" type="email" />
                    <InputForm labelName="Date of Joining" forName="doj" type="text" />
                    <InputForm labelName="Employe Code" forName="code" type="number" />
                </div>
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <FileSyncOutlined />
                        Salary Information
                    </span>
                }
                key="2"
            >
                {/* Salary Info */}
                <div className="grid grid-cols-2 gap-x-2">
                <InputForm labelName="Basic Salary" forName="basicSalary" type="number" />
                <InputForm labelName="Deatness Allowance" forName="dAllow" type="number" />
                <InputForm labelName="Travelling Allowance" forName="tAllow" type="number" />
                <InputForm labelName="Food Allowance" forName="fAllow" type="number" />
                <InputForm labelName="Petrol Allowance" forName="pAllow" type="number" />
                <InputForm labelName="Provident Fund (PF)" forName="pFund" type="number" />
                <InputForm labelName="Employe State Insurance (ESI)" forName="esi" type="number" />
                <InputForm labelName="Total Salary" forName="totalSalary" type="number" />
                </div>
            </TabPane>
        </Tabs>
    )
}

export default EmployeeInfo