/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useContext } from 'react'
import './Resume.scss'

import { experience, educations, languages, codings, enviroments, knowledges } from './resumeInfo'

import ContentTitle from '../common/ContentTitle'
import ResumeSubTitle from './ResumeSubTitle'
import ResumeCard from './ResumeCard'
import BarChart from './chart/BarChart'
import CircleChart from './chart/CircleChart'
import DotChart from './chart/DotChart'
import Knowledge from './Knowledge'
import { MainContext } from '../providers/mainProvider'

const Resume = ({ className }) => {
  const { isMobile, language } = useContext(MainContext)

  return (
    <div id="resume" className={className}>

      <ContentTitle title={language === 'ko' ? '이력서' : 'RESUME'} />
      <div className="resume_container">
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-briefcase" title={language === 'ko' ? '경력' : 'EXPERIENCE'} />
          {experience.map((e, i) => (
            <div key={new Date().getTime() * i}>
              <ResumeCard {...e} />
            </div>
          ))}
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-graduation-cap" title={language === 'ko' ? '학력' : 'EDUCATION'} />
          {educations.map((e, i) => (
            <div key={new Date().getTime() * i}>
              <ResumeCard {...e} />
            </div>
          ))}
        </div>
      </div>

      <ContentTitle title="MY SKILLS" />
      <div className="resume_container">
        <div className="resume_content">
          <ResumeSubTitle icon="fab fa-js" title={language === 'ko' ? '프로그래밍 언어' : 'LANGUAGE'} />
          {
            languages.map((e, i) => (
              <div key={new Date().getTime() * i}>
                <BarChart {...e} isMobile={isMobile} />
              </div>
            ))
          }
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-code" title={language === 'ko' ? '프레임워크' : 'FRAMEWORK'} />
          <div className='resume_content_flex'>
            {
              codings.map((e, i) => (
                <div key={new Date().getTime() * i}>
                  <CircleChart {...e} isMobile={isMobile} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="resume_container">
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-screwdriver" title={language === 'ko' ? '개발 환경' : 'ENVIRONMENT'} />
          {
            enviroments.map((e, i) => (
              <div key={new Date().getTime() * i}>
                <DotChart {...e} isMobile={isMobile} />
              </div>
            ))
          }
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="far fa-lightbulb" title={language === 'ko' ? '개발 지식' : 'KNOWLEDGE'} />
          {
            knowledges.map((e, i) => (
              <div key={new Date().getTime() * i}>
                <Knowledge {...e} isMobile={isMobile} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Resume
