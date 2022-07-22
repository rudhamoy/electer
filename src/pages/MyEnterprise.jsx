import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import MyEnterpriseIcon from '../data/icons/MyEnterprise.png'
import { AddFirm, PersonalDetail, RoleManagement } from '../components/myEnterprise'

const ButtonTab = ({tabName, tabLink, query}) => {
  const activeTab = "p-2 px-4 bg-[#03C9D7] text-blue-50 font-semibold rounded-full"
  const normalTab = "p-2 px-4 rounded-full hover:bg-gray-100 text-gray-600 font-semibold"
  return (
    <Link to={`/my_enterprise?tab=${tabLink}`} className={query === tabLink ? activeTab : normalTab}>{tabName}</Link>
  )
} 

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const MyEnterprise = () => {
  let query = useQuery()

  let tabContent = query.get("tab")

  return (
    <div>
      <PageHeader pageTitle="My Enterprise" icon={MyEnterpriseIcon} />
      {/* button tabs */}
      <div className="flex items-center gap-x-6 my-4">
       <ButtonTab tabName="Firm Details" tabLink="firm" query={tabContent} />
       <ButtonTab tabName="Personal Details" tabLink="personal" query={tabContent} />
        <ButtonTab tabName="Role Management" tabLink="role" query={tabContent} />
      </div>
      <div className="border rounded-sm p-4">
      {tabContent === 'firm' ? <AddFirm /> : tabContent === 'personal' ?  <PersonalDetail /> : <RoleManagement />}
      </div>
    </div>
  )
}

export default MyEnterprise