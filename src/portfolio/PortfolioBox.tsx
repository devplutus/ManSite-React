import * as React from 'react'
import './PortfolioBox.scss'

const PortfolioBox = (props) => {
  const {url, title, agency, onClick} = props
  return (
    <div role='button' className='portfolio_box' onClick={onClick}>
      <div className='portfolio_box_image_container'>
        <div className='portfolio_box_image' style={{
          background: `url('${url}') no-repeat center`
        }} />
      </div>
      <div className='portfolio_box_desc'>
        <div className='portfolio_box_title'>
          {title}
        </div>
        <div className='portfolio_box_agency'>
          {agency}
        </div>
      </div>
    </div>
  )
}

export default PortfolioBox