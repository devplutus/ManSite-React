import * as React from 'react'
import { useRef, useContext } from 'react'
import './App.scss'

import { MainContext } from './providers/mainProvider'

import MoveBackground from './common/MoveBackground'
import Profile from './profile/Profile'
import Menu from './common/Menu'
import Resume from './resume/Resume'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

const App = () => {
  const ContentDiv = useRef()

  const { isMobile } = useContext(MainContext)

  return (
    <>
      <MoveBackground />
      <div id="main_container">
        {/* Drag 이슈 때문에 모바일&PC 나눔 */}
        {!isMobile ? (
          <div id="main_content">
            <Menu />
            <Profile />
            <div ref={ContentDiv} id="main_content_slide">
              <Resume className="content" isMobile={isMobile} />
              <Portfolio className="content" isMobile={isMobile} />
              <Contact className="content" isMobile={isMobile} />
            </div>
          </div>
        ) : (
          <>
          <Menu />
          <div ref={ContentDiv} id="m_main_content">
            <Profile />
            <Resume className="content" isMobile={isMobile} />
            <Portfolio className="content" isMobile={isMobile} />
            <Contact className="content" isMobile={isMobile} />
          </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
