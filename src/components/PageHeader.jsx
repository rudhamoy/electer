import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const PageHeader = ({pageTitle, pageDetail, icon}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <img src={icon} alt={pageTitle} className="w-[35px]" />
        <h1 className="uppercase font-semibold">{pageTitle}</h1>
        <p>{pageDetail}</p>
        </div>
        <BsFillArrowLeftCircleFill className="text-[#03C9D7] text-3xl" />
    </div>
  )
}

export default PageHeader