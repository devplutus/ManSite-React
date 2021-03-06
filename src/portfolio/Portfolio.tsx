/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useState, useContext } from 'react'
import './Portfolio.scss'

import ContentTitle from '../common/ContentTitle'
import PortfolioBox from './PortfolioBox'
import PortfolioModal from './PortfolioModal'

import { portfolioInfo } from './portfolioInfo'
import { MainContext } from '../providers/mainProvider'

const Portfolio = ({ className }) => {

  const { isMobile, language } = useContext(MainContext)

  const [modal, setModal] = useState(false)
  const [detail, setDetail] = useState({
    preview: '',
    skills: '',
    languages: '',
    features: '',
  })
  // const [modal, setModal] = useState(true)
  // const [detail, setDetail] = useState(portfolioInfo[1].detail)
  const openModal = (selected) => {
    if (selected) {
      setDetail(selected)
    }
    if (!modal) {
      setModal(true)
    }
  }

  return (
    <div id="portfolio" className={className}>
      {
        (modal) && <PortfolioModal {...detail} closeEvent={() => setModal(false)} isMobile={isMobile} />
      }
      <ContentTitle title={language === 'ko' ? '포트폴리오' : 'PORTFOLIO'} />
      <div className="portfolio_container">
        {isMobile ? (
          <div className="portfolio_content">
            {portfolioInfo.map((p, i) => (
              <PortfolioBox onClick={() => openModal(p.detail)} key={i} {...p} />
            ))}
          </div>
        ) : (
          <>
            <div className="portfolio_content">
              {portfolioInfo.map((p, i) => i % 2 === 0 && <PortfolioBox onClick={() => openModal(p.detail)} key={i} {...p} />)}
            </div>
            <div className="portfolio_content">
              {portfolioInfo.map((p, i) => i % 2 === 1 && <PortfolioBox onClick={() => openModal(p.detail)} key={i} {...p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Portfolio
