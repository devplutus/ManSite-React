/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import './Resume.scss'

import { experience, educations, languages, codings, enviroments, knowledges } from './resumeInfo'

import ContentTitle from '../common/ContentTitle'
import ResumeSubTitle from './ResumeSubTitle'
import ResumeCard from './ResumeCard'
import BarChart from './chart/BarChart'
import CircleChart from './chart/CircleChart'
import DotChart from './chart/DotChart'
import Knowledge from './Knowledge'

const Resume = ({ className, isMobile }) => {
  
  return (
    <div id="resume" className={className}>

      <ContentTitle title="RESUME" />
      <div className="resume_container">
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-briefcase" title="EXPERIENCE" />
          {experience.map((e, i) => (
            <div key={new Date().getTime() * i}>
              <ResumeCard {...e} />
            </div>
          ))}
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-graduation-cap" title="EDUCATION" />
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
          <ResumeSubTitle icon="fab fa-js" title="LANGUAGE" />
          {
            languages.map((e, i) => (
              <div key={new Date().getTime() * i}>
                <BarChart {...e} isMobile={isMobile} />
              </div>
            ))
          }
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="fas fa-code" title="FRAMEWORK" />
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
          <ResumeSubTitle icon="fas fa-screwdriver" title="ENVIRONMENT" />
          {
            enviroments.map((e, i) => (
              <div key={new Date().getTime() * i}>
                <DotChart {...e} isMobile={isMobile} />
              </div>
            ))
          }
        </div>
        <div className="resume_content">
          <ResumeSubTitle icon="far fa-lightbulb" title="KNOWLEDGE" />
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
