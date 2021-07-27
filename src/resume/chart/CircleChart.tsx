import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import './CircleChart.scss'

const CircleChart = ({ name, value, isMobile }) => {
  const chart = useRef<HTMLDivElement>()
  const chartPercentage = useRef<HTMLSpanElement>()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const mainContent = document.getElementById('m_main_content')
    const resume = document.getElementById('resume')

    const startAnimate = () => {
      const animateInterval = setInterval(() => {
        let percentage = parseInt(chartPercentage.current.innerText || '0', 10)
        if (percentage < value) {
          percentage += Math.floor(value / 2) > percentage ? 3 : 2
          percentage = percentage > value ? value : percentage
          chart.current.style.setProperty('--circle-chart-width', `${percentage}%`)
          chartPercentage.current.innerText = percentage.toString()
        } else {
          clearInterval(animateInterval)
        }
      }, 20)
    }
    
    const interval = setInterval(() => {
      const scroll = isMobile ? mainContent.clientHeight : resume.clientHeight
      const { top: chartTop } = chart.current.getBoundingClientRect()
      const { top: resumeTop } = resume.getBoundingClientRect()
      const top = chartTop - (!isMobile ? resumeTop : 0)
      
      if (!animate && scroll > top) {
        setTimeout(startAnimate, 200)
        setAnimate(true)
        clearInterval(interval)
      } else if (animate) {
        clearInterval(interval)
      }
    }, 10)
    return () => clearInterval(interval)
  })

  return (
    <div className="circle_chart_container">
      <div ref={chart} className="circle_chart">
        <div className="circle_chart_value">
          <span ref={chartPercentage}>0</span>%
        </div>
      </div>
      <span className="circle_chart_title">{name}</span>
    </div>
  )
}

export default CircleChart
