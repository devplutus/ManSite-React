/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import './Carousel.scss'

const Carousel = ({ preview, isMobile, onChildClick }) => {
  const CarouselDiv = useRef<HTMLDivElement>()

  const [index, setIndex] = useState(0)

  const SLIDE_GAP = 100

  let pos1 = 0
  let isDown = false
  let initTranslateX = 0

  if (!preview) {
    return <NoImage />
  }

  const onSwipe = (e) => {
    if (isDown) {
      const MIN_LEFT = 0
      const MAX_LEFT = document.getElementById(`carousel_child${preview.length - 1}`).offsetLeft * -1
      const carousel = CarouselDiv.current

      let pos2 = pos1
      if (e.type === 'mousemove') {
        pos1 = (e as MouseEvent).clientX
      } else {
        pos1 = (e as TouchEvent).touches[0].clientX
      }
      pos2 -= pos1

      let nextPos = (parseFloat(carousel.style.transform.replace(/translateX\(|px\)/g, '')) || 0) - pos2
      if (nextPos >= MIN_LEFT) nextPos = 0
      else if (nextPos <= MAX_LEFT) nextPos = MAX_LEFT

      carousel.style.transform = `translateX(${nextPos}px)`
    }
  }

  const onMouseClickAndDown = (e: Event) => {
    const carousel = CarouselDiv.current as HTMLDivElement

    if (e.type.indexOf('mouse') !== -1) {
      isDown = e.type === 'mousedown'
      if (isDown) pos1 = (e as MouseEvent).clientX
    } else {
      isDown = e.type === 'touchstart'
      if (isDown) pos1 = (e as TouchEvent).touches[0].clientX
    }

    if (isDown) {
      initTranslateX = parseFloat(carousel.style.transform.replace(/translateX\(|px\)/g, '')) * -1 || 0
    } else checkIndex()
  }

  const checkIndex = () => {
    const carousel = CarouselDiv.current as HTMLDivElement
    const offsetLeft = parseFloat(carousel.style.transform.replace(/translateX\(|px\)/g, '')) * -1 || 0
    const gap = offsetLeft - initTranslateX

    if (gap < -SLIDE_GAP && index !== 0) {
      setIndex(index - 1)
    } else if (gap > SLIDE_GAP && index !== preview.length - 1) {
      setIndex(index + 1)
    }
  }

  const shiftSlide = () => {
    const carousel = CarouselDiv.current as HTMLDivElement
    const { clientWidth } = document.getElementById('carousel_child0')
    carousel.classList.add('transition')
    carousel.style.transform = `translateX(${clientWidth * index * -1}px)`
    setTimeout(() => carousel.classList.remove('transition'), 100)
    isDown = false
  }

  useEffect(() => {
    if (!preview || preview.length === 1) return () => {}
    
    shiftSlide()

    const carousel = CarouselDiv.current as HTMLDivElement
    if (isMobile) {
      carousel.addEventListener('touchstart', onMouseClickAndDown)
      carousel.addEventListener('touchend', onMouseClickAndDown)
      carousel.addEventListener('touchmove', onSwipe)
      carousel.classList.add('transition')
      return () => {
        carousel.removeEventListener('touchstart', onMouseClickAndDown)
        carousel.removeEventListener('touchend', onMouseClickAndDown)
        carousel.removeEventListener('touchmove', onSwipe)
      }
    }

    carousel.addEventListener('mousedown', onMouseClickAndDown)
    carousel.addEventListener('mouseup', onMouseClickAndDown)
    carousel.addEventListener('mousemove', onSwipe)
    return () => {
      carousel.removeEventListener('mousedown', onMouseClickAndDown)
      carousel.removeEventListener('mouseup', onMouseClickAndDown)
      carousel.removeEventListener('mousemove', onSwipe)
    }
  })

  return (
    <div className="carousel_container">
      <div ref={CarouselDiv} className="carousel">
        {preview.map((p, i) => (
          <div
            key={i}
            id={`carousel_child${i}`}
            className="carousel_child"
            // onClick={() => onChildClick(`/images/portfolio/preview/${p}`)}
            style={{ background: `url('/images/portfolio/preview/${p}')` }}
          />
        ))}
      </div>
      <div className="carousel_count">
        {preview.map((_, i) => (
          <div className={`carousel_count_item ${i === index && 'active'}`} key={new Date().getTime() + i} />
        ))}
      </div>
      {preview && preview.length > 1 && (
        <>
          <div
            className="carousel_buttons_left"
            style={{ display: index !== 0 ? 'flex' : 'none' }}
            onClick={() => setIndex(index - 1)}
          >
            <i className="far fa-arrow-alt-circle-left" />
          </div>
          <div
            className="carousel_buttons_right"
            style={{ display: index !== preview.length - 1 ? 'flex' : 'none' }}
            onClick={() => setIndex(index + 1)}
          >
            <i className="far fa-arrow-alt-circle-right" />
          </div>
        </>
      )}
    </div>
  )
}

const NoImage = () => {
  return (
    <div className="carousel">
      <div className="no_image">
        <i className="fas fa-eye-slash" />
        <span>Can&#39;t attach image due to confidentiality</span>
      </div>
    </div>
  )
}

export default Carousel
