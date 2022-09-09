import React from 'react'
import GstOne from './GstOne'
import GstThree from './GstThree'
import GstTwo from './GstTwo'

const GstTable = ({tabContent}) => {
  return (
    <div className="my-10">
        {tabContent === 'one' ? <GstOne /> : tabContent === 'two' ? <GstTwo /> : <GstThree />}
    </div>
  )
}

export default GstTable