/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import './Carousel.scss'

const Carousel = ({ preview }) => {
  const CarouselDiv = useRef(0)

  let isDown = false

  const [index, setIndex] = useState(0)
  const [left, setLeft] = useState(0)

  if (!preview) {
    return <NoImage />
  }

  const onSwipe = ({movementX}) => {
    if (isDown) {
      const carousel = (CarouselDiv.current as HTMLDivElement)
      const scrollX = carousel.scrollLeft + movementX * -1
      carousel.scrollLeft = scrollX
    }
  }

  const onMouseClickAndDown = ({ type }) => {
    isDown = type === 'mousedown'
  }

  return (
    <div ref={CarouselDiv} className="carousel">
      {preview.map((p, i) => (
        <div
          key={i}
          className="carousel_child"
          onMouseDown={onMouseClickAndDown}
          onMouseUp={onMouseClickAndDown}
          onMouseMove={onSwipe}
          style={{ background: `url('/images/portfolio/preview/${p}')` }}
        />
      ))}
    </div>
  )
}

const NoImage = () => {
  return (
    <div className="carousel">
      <div className="no_image">
        <i className="fas fa-eye-slash" />
        <span>Can&#39;t attach image as corporate request</span>
      </div>
    </div>
  )
}

export default Carousel
