import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import './App.scss'

import MoveBackground from './common/MoveBackground'
import Profile from './profile/Profile'
import Menu from './common/Menu'
import Resume from './resume/Resume'
import Portfolio from './portfolio/Portfolio'

const App = () => {
  const ContentDiv = useRef()

  const [isMobile, setIsMobile] = useState(document.body.clientWidth < 1024)

  const checkMobile = () => {
    const mobile = document.body.clientWidth < 1024
    if (isMobile !== mobile) {
      setIsMobile(mobile)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  })

  return (
    <>
      <MoveBackground />
      <div id="main_container">
        {/* Drag 이슈 때문에 모바일&PC 나눔 */}
        {!isMobile ? (
          <div id="main_content">
            <Menu isMobile={isMobile} />
            <Profile />
            <div ref={ContentDiv} id="main_content_slide">
              <Resume className="content" isMobile={isMobile} />
              <Portfolio className="content" isMobile={isMobile} />
            </div>
          </div>
        ) : (
          <>
          <Menu isMobile={isMobile} />
          <div ref={ContentDiv} id="m_main_content">
            <Profile />
            <Resume className="content" isMobile={isMobile} />
            <Portfolio className="content" isMobile={isMobile} />
          </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
