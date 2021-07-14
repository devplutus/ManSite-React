import * as React from 'react'
import './ContentTitle.scss'

const ContentTitle = ({ title }) => {
  return (
    <div className="content_title">
      <span>
        { title }
      </span>
    </div>
  )
}

export default ContentTitle