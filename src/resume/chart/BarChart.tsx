import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import './BarChart.scss'

const BarChart = ({ name, value, isMobile }) => {
  const chart = useRef<HTMLDivElement>()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const mainContent = document.getElementById('m_main_content')
    const resume = document.getElementById('resume')

    const interval = setInterval(() => {
      if (!chart.current) return

      const scroll = isMobile ? mainContent.clientHeight : resume.clientHeight
      const { top: chartTop } = chart.current.getBoundingClientRect()
      const { top: resumeTop } = resume.getBoundingClientRect()
      const top = chartTop - (!isMobile ? resumeTop : 0)
      
      if (!animate && scroll > top) {
        setTimeout(() => {
          if (chart.current) {
            chart.current.style.setProperty('--bar-chart-width', `${value}%`)
            chart.current.classList.add('fill')
          }
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
    <div className="bar_chart">
      <span className="bar_chart_title">{name}</span>
      <div className="bar_chart_back">
        <div ref={chart} className="bar_chart_value" />
      </div>
    </div>
  )
}

export default React.memo(BarChart)
