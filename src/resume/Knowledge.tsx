import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import './Knowledge.scss'

const Knowledge = ({ title, subTitle, isMobile }) => {
  const knowledge = useRef<HTMLDivElement>()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const mainContent = document.getElementById('m_main_content')
    const resume = document.getElementById('resume')

    const interval = setInterval(() => {
      const scroll = isMobile ? mainContent.clientHeight : resume.clientHeight
      const { top: chartTop } = knowledge.current.getBoundingClientRect()
      const { top: resumeTop } = resume.getBoundingClientRect()
      const top = chartTop - (!isMobile ? resumeTop : 0)
      
      if (!animate && scroll > top) {
        setTimeout(() => {
          const icon = knowledge.current.getElementsByClassName('icon')[0]
          icon.classList.add('active')
        }, 200)
        setAnimate(true)
        clearInterval(interval)
      } else if (animate) {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  })

  return (
    <div ref={knowledge} className="knowledge">
      <div className="knowledge_check">
        <i className="far fa-check-circle icon" />
      </div>
      <div className="knowledge_content">
        <span className="knowledge_title">{title}</span>
        {subTitle && <span className="knowledge_sub_title">{subTitle}</span>}
      </div>
    </div>
  )
}

export default Knowledge
