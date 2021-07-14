/* eslint-disable react/no-danger */
import * as React from 'react'
import './ResumeCard.scss'

const ResumeCard = ({ active, startYear, endYear, title, agency, desc }) => {
  return (
    <div className="resume_card">
      <div className={`resume_card_year ${active ? 'active' : ''}`}>
        {startYear} ~ {endYear || 'Present'}
      </div>
      <div className="resume_card_title">{title}</div>
      <div className="resume_card_agency">{agency}</div>
      <div className="resume_card_desc" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  )
}

export default ResumeCard
