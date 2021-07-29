import * as React from 'react'
import { useContext } from 'react'
import { MainContext } from '../providers/mainProvider'
import './PortfolioBox.scss'

const PortfolioBox = (props) => {
  const {logoFileName, title, agency, onClick} = props

  const { language } = useContext(MainContext)

  return (
    <div role='button' className='portfolio_box' onClick={onClick}>
      <div className='portfolio_box_image_container'>
        <div className='portfolio_box_image' style={{
          background: `url('/images/portfolio/logo/${logoFileName}') no-repeat center`
        }} />
      </div>
      <div className='portfolio_box_desc'>
        <div className='portfolio_box_title'>
          {title[language]}
        </div>
        <div className='portfolio_box_agency'>
          {agency[language]}
        </div>
      </div>
    </div>
  )
}

export default PortfolioBox