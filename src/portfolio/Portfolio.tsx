/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import ContentTitle from '../common/ContentTitle'
import './Portfolio.scss'
import PortfolioBox from './PortfolioBox'

const Portfolio = ({ className, isMobile }) => {
  const portfolioInfo = [
    {
      title: 'Integrate SAP with MS CRM',
      agency: 'Cariflex',
      url: `/images/portfolio/cariflex.png`,
    },
    {
      title: 'Prescription Scan',
      agency: 'MrBot',
      url: '/images/portfolio/mrbot.png',
    },
    {
      title: 'SMS Service',
      agency: 'Qualisoft',
      url: '/images/portfolio/qualisoft.png',
    },
    {
      title: 'Scholarship Management',
      agency: 'Future foundation of Korea',
      url: '/images/portfolio/mirae.png',
    },
    {
      title: 'Fleet Management System',
      agency: 'PwC',
      url: '/images/portfolio/pwc.png',
    },
    {
      title: 'Remote Control System',
      agency: 'Hanwha Q Cells',
      url: '/images/portfolio/qcell.png',
    },
    {
      title: 'PV Monitoring',
      agency: 'LG Hausys',
      url: '/images/portfolio/hausys.png',
    },
    {
      title: 'E-commerce Site',
      agency: 'Laberry',
      url: '/images/portfolio/laberry.png',
    },
  ]

  return (
    <div id="portfolio" className={className}>
      <ContentTitle title="PORTFOLIO" />
      <div className="portfolio_container">
        {isMobile ? (
          <div className="portfolio_content">
            {portfolioInfo.map((p, i) => (
              <PortfolioBox key={i} {...p} />
            ))}
          </div>
        ) : (
          <>
            <div className="portfolio_content">
              {portfolioInfo.map((p, i) => i % 2 === 0 && <PortfolioBox key={i} {...p} />)}
            </div>
            <div className="portfolio_content">
              {portfolioInfo.map((p, i) => i % 2 === 1 && <PortfolioBox key={i} {...p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Portfolio
