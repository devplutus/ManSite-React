/* eslint-disable react/no-danger */
import * as React from 'react'
import { useContext } from 'react'
import { MainContext } from '../providers/mainProvider'
import './ResumeCard.scss'

const ResumeCard = ({ active, startYear, endYear, title, agency, desc, className='' }) => {

  const { language } = useContext(MainContext)

  return (
    <div className={`resume_card ${className} ${active ? 'active' : ''}`}>
      <div className={`resume_card_year ${active ? 'active' : ''}`}>
        {startYear} ~ {endYear || (language === 'ko' ? '현재' : 'Present')}
      </div>
      <div className="resume_card_title">{title[language]}</div>
      <div className="resume_card_agency">{agency[language]}</div>
      <div className="resume_card_desc" dangerouslySetInnerHTML={{ __html: desc[language] }} />
    </div>
  )
}

export default ResumeCard
