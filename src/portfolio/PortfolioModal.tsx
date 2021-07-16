/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react'
import { useEffect, useRef } from 'react'
import './PortfolioModal.scss'

const PortfolioModal = ({ closeEvent }) => {
  const modalContent = useRef()

  useEffect(() => {
    setTimeout(() => {
      (modalContent.current as HTMLDivElement).classList.add('show');
    }, 100)
  })

  const closeModal = () => {
    (modalContent.current as HTMLDivElement).classList.remove('show');
    setTimeout(closeEvent, 300)
  }

  return (
    <div className='portfolio_modal_back'>
      <div ref={modalContent} className='portfolio_modal'>
        <div className='portfolio_modal_header'>
          <i role="button" className="far fa-times-circle" onClick={closeModal} />
        </div>
        <div className='portfolio_modal_body'>
          <div className='portfolio_modal_carousel'>
            <div />
            <div />
            <div />
          </div>
          <div className='portfolio_modal_content'>
            <div className='portfolio_modal_desc'>
              <div>Framwork</div>
              <div>test</div>
            </div>
            <div className='portfolio_modal_desc'>
              <div>Languages</div>
              <div>test</div>
            </div>
            <div className='portfolio_modal_desc'>
              <div>Features</div>
              <div>
                <span>- test1</span>
                <span>- test2</span>
                <span>- test3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal