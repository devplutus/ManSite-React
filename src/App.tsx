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

  const changeMenu = (index: number) => {
    const content = (ContentDiv.current) as HTMLDivElement

    const menu = document.getElementById('menu_container')
    const profile = document.getElementById('profile')
    const resume = document.getElementById('resume')
    const portfolio = document.getElementById('portfolio')

    const divInMenu = [
      profile,
      resume,
      portfolio
    ]

    if (!isMobile) {
      if (index === 0) {
        content.classList.remove('show')
        menu.style.width = '10%'
        profile.classList.remove('large')
      } else {
        content.classList.add('show')
        menu.style.width = '20%'
        profile.classList.add('large')
        divInMenu[index].scrollIntoView({
          behavior: 'smooth'
        })
      }
    } else {
      content.scrollTo({
        top: divInMenu[index].offsetTop - 105,
        behavior: 'smooth'
      })
    }
  }

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
            <Menu isMobile={isMobile} changeMenu={changeMenu} />
            <Profile />
            <div ref={ContentDiv} id="main_content_slide">
              <Resume className="content" isMobile={isMobile} />
              <Portfolio className="content" isMobile={isMobile} />
            </div>
          </div>
        ) : (
          <>
          <Menu isMobile={isMobile} changeMenu={changeMenu} />
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
