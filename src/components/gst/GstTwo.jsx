import React from 'react'
import { Table, Space } from 'antd'
import { gstTwoColumn } from '../../data/table/GstTable'

const GstTwo = () => {

    // const listCol = [
    //     {
    //         title: 'Sl No',
    //         dataIndex: 'slNo',
    //         key: 'slNo',
    //         className: 'text-[10px]',
    //       },
    //     {
    //         title: 'Suplier Details',
    //         dataIndex: 'suplierDetails',
    //         key: 'suplierDetails',
    //         className: 'text-[10px]',
    //         render: (_, record) => {
    //             return (<Space wrap>
    //                 <button className="">
    //                     {record}
    //                 </button>
    //             </Space>
    //             )
    //         },
    //       },
    // ]

  return (
    <div>
        <div className="borderImp grid grid-cols-8 h-[500px] rounded-sm">
            <div className="col-span-2 p-2">
                <div className="grid grid-cols-3 bg-gray-50 rounded-sm px-2 pt-2">
                    <p className="col-span-1 font-semibold">SL No</p>
                    <p className='col-span-2 font-semibold'>Suplier Details</p>
                </div>
            </div>
            <div className="col-span-6 border-l-2 p-6 bg-white">
                <div className="grid grid-cols-2 mb-10">
                    <p>Supplier Name: <span className="font-semibold">Zion Infratech Pvt Ltd</span></p>
                    <p>Total Invoice: <span className="font-semibold">64</span></p>
                    <p>Total Taxable Value: <span className="font-semibold">₹ 8,10,860</span></p>
                    <p>Total ITC: <span className="font-semibold">₹ 1,08,450</span></p>
                </div>
                <Table columns={gstTwoColumn} />
            </div>
        </div>
    </div>
  )
}

export default GstTwo