import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import PageHeader from '../components/PageHeader'
import MyEnterpriseIcon from '../data/icons/MyEnterprise.png'
import { AddFirm, PersonalDetail, RoleManagement } from '../components/myEnterprise'
import { fetchBusiness } from '../features/enterprise/enterpriseSlice';

import EnterpriseList from '../components/myEnterprise/EnterpriseList'
import ActionBtn from '../utils/ActionBtn'

const ButtonTab = ({ tabName, tabLink, query }) => {
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
  const [showAdd, setShowAdd] = useState(true)

  const dispatch = useDispatch()

  let query = useQuery()
  let tabContent = query.get("tab")

  const auth = useSelector(state => state.auth.auth)
  const business = useSelector(state => state.enterprise.business)

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchBusiness())
    }
  }, [auth, dispatch])

  useEffect(() => {
    if (business !== 0) {
      setShowAdd(false)
    }
  }, [])

  return (
    <div>
      <PageHeader pageTitle="My Enterprise" icon={MyEnterpriseIcon} />
      {/* button tabs */}
      <div className="flex justify-between items-center gap-x-6 my-4">
        <div>
          <ButtonTab tabName="Firm Details" tabLink="firm" query={tabContent} />
          <ButtonTab tabName="Personal Details" tabLink="personal" query={tabContent} />
          <ButtonTab tabName="Role Management" tabLink="role" query={tabContent} />
        </div>
        <div>
          <ActionBtn
            className={showAdd === false}
            onClick={() => setShowAdd(!showAdd)}
            btnCondition={showAdd === true}
            createName="Business"
           />
        </div>
      </div>
      <div className="border bg-white rounded-md p-4">
        {showAdd === true ? <AddFirm /> : tabContent === 'firm' ? (
          <EnterpriseList data={business} />
        ) : (
          tabContent === 'personal' ? <PersonalDetail /> : <RoleManagement />
        )}
      </div>
    </div>
  )
}

export default MyEnterprise