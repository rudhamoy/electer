import React from 'react'
import { Select } from 'antd';
import { Link, useLocation } from 'react-router-dom'

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader'
import AccountImage from '../data/icons/Accounts.png'
import SelectField from '../utils/SelectField'
import GstTable from '../components/gst/GstTable';

const { Option } = Select

const ButtonTab = ({ tabName, tabLink, query }) => {
    const activeTab = "p-3 px-8 bg-[#03C9D7] text-blue-50 font-semibold rounded-full uppercase mx-1"
    const normalTab = "p-3 px-8 rounded-full hover:bg-gray-100 text-gray-600 font-semibold uppercase mx-1 borderImp"
    return (
      <Link to={`/accounts/gst?gstTab=${tabLink}`} className={query === tabLink ? activeTab : normalTab}>{tabName}</Link>
    )
  }
  
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Gst = () => {

  let query = useQuery()
  let tabContent = query.get("gstTab")

    return (
        <Layout>
            <PageHeader pageTitle="Accounts > gst" icon={AccountImage} />
            <div className="my-10">
                <div className="flex justify-between items-center">
                    {/* button */}
                    <div className="">
                        <ButtonTab tabName="GSTR1" tabLink="one" query={tabContent} />
                        <ButtonTab tabName="GSTR2" tabLink="two" query={tabContent} />
                        <ButtonTab tabName="GSTR3" tabLink="three" query={tabContent} />
                    </div>
                    {/* Select */}
                    <div className="flex w-[50%] gap-x-3">
                        {/* finaicial */}
                        <div className="w-[100%] grid grid-flow-row">
                            <label htmlFor="financial">Financial year</label>
                           
                            <SelectField
                                placeholder="Financial Year"
                            >
                                <Option>2022-2023</Option>
                                <Option>2021-2022</Option>
                            </SelectField>
                        </div>
                        {/* quater */}
                        <div className="w-[100%] grid grid-flow-row">
                            <label htmlFor="financial">Quater</label>
                           
                            <SelectField
                                placeholder="Quater"
                            >
                                <Option>2022-2023</Option>
                                <Option>2021-2022</Option>
                            </SelectField>
                        </div>
                        {/* period */}
                        <div className="w-[100%] grid grid-flow-row">
                            <label htmlFor="financial">Period</label>
                           
                            <SelectField
                                placeholder="Period"
                            >
                                <Option>2022-2023</Option>
                                <Option>2021-2022</Option>
                            </SelectField>
                        </div>
                    </div>
                </div>
                <GstTable tabContent={tabContent} />
                {/* {tabContent === 'one' ? <GstOne /> : tabContent === 'two' ? <GstTwo /> : <GstThree />} */}
            </div>
        </Layout>
    )
}

export default Gst