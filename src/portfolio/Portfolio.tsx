import * as React from 'react'
import ContentTitle from '../common/ContentTitle'
import './Portfolio.scss'

const Portfolio = ({ className, isMobile }) => {
  return (
    <div id='portfolio' className={className}>
      <ContentTitle title="PORTFOLIO" />
    </div>
  )
}

export default Portfolio