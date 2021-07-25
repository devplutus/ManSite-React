/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react'
import { useEffect, useRef } from 'react'
import './PortfolioModal.scss'
import { Skill, Langauge } from './portfolioInfo'
import Carousel from '../common/Carousel'

const PortfolioModal = ({ closeEvent, preview, skills, languages, features }) => {
  const modalContent = useRef()

  useEffect(() => {
    setTimeout(() => {
      ;(modalContent.current as HTMLDivElement).classList.add('show')
    }, 100)
  })

  const closeModal = () => {
    ;(modalContent.current as HTMLDivElement).classList.remove('show')
    setTimeout(closeEvent, 300)
  }

  return (
    <div className="portfolio_modal_back">
      <div ref={modalContent} className="portfolio_modal glass">
        <div className="portfolio_modal_header">
          <i role="button" className="far fa-times-circle" onClick={closeModal} />
        </div>
        <div className="portfolio_modal_body">
          <div className="portfolio_modal_carousel">
            <Carousel preview={preview} />
          </div>
          <div className="portfolio_modal_content">
            <div className="container">
              <div className="title">Skills</div>
              <div className="body">
                {skills.map((skill: Skill) => (
                  <div className="badge" key={skill.name} style={{
                    background: skill.background,
                    color: skill.color
                  }}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="title">Languages</div>
              <div className="body">
                {languages.map((language: Langauge) => (
                  <div className="badge" key={language.name} style={{
                    background: language.background,
                    color: language.color
                  }}>
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="title">Features</div>
              <div className="body column">
                {features.map((feature, i) => (
                  <div className="feature" key={new Date().getTime() + i}>
                    <i className='fas fa-check' />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal
