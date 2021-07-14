/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import './DotChart.scss'

const DotChart = ({ name, value, isMobile }) => {
  const chart = useRef(0)
  const [animate, setAnimate] = useState(false)

  const startAnimation = async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const dots = chart.current.getElementsByClassName('dot')
    for (let i = 0; i < Math.floor(value/10); i++) {
      dots[i].classList.add('fill')
      await delay(100)
    }

    if (value % 10 !== 0) {
      const lastDot = dots[Math.floor(value/10)];
      const remain = value % 10 * 10
      lastDot.style.setProperty('--dot-chart-width', `${remain}%`)
      lastDot.classList.add('fill_value')
    }
  }

  useEffect(() => {
    const mainContent = document.getElementById('m_main_content')
    const resume = document.getElementById('resume')

    const interval = setInterval(() => {
      const scroll = isMobile ? mainContent.clientHeight : resume.clientHeight
      const { top: chartTop } = chart.current.getBoundingClientRect()
      const { top: resumeTop } = resume.getBoundingClientRect()
      const top = chartTop - (!isMobile ? resumeTop : 0)
      
      if (!animate && scroll > top) {
        setTimeout(startAnimation, 200)
        setAnimate(true)
        clearInterval(interval)
      } else if (animate) {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  })

  return (
    <div className="dot_chart">
      <span className="dot_chart_title">{name}</span>
      <div ref={chart} className="dot_chart_back">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div className="dot" key={i} />
          ))}
      </div>
    </div>
  )
}

export default DotChart
