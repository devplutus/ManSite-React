import * as React from 'react'
import './ResumeSubTitle.scss'

const ResumeSubTitle = ({ icon, title }) => {
  return (
    <div className='resume_subtitle'>
      <i className={ icon } />
      <span>{ title }</span>
    </div>
  )
}

export default ResumeSubTitle