import * as React from 'react';
import './MoveBackground.scss';

const IS_MOBILE = window.screen.width < 780
const MAX_COUNT = IS_MOBILE ? 10 : 20
const MAX_SIZE = 150 / (IS_MOBILE ? 3 : 1)
const MIN_SIZE = 70 / (IS_MOBILE ? 3 : 1)

const MoveBackground = () => {

  const getRandomValue = (max: number, min: number): number => {
    return Math.floor((Math.random() * (max-min+1)) + min)
  }
  
  const createRectInfo = (idx: number) => {
    const size = getRandomValue(MAX_SIZE, MIN_SIZE)
    const delay = getRandomValue(50, 20)
    const key = (new Date().getTime() / idx).toString()

    return React.createElement('div', {
      className: 'background_rect',
      key,
      style: {
        width : `${size}px`,
        height : `${size}px`,
        bottom : `-${size}px`,
        left : `${getRandomValue(window.screen.width + 50, -50)}px`,
        animationDuration : `${delay}s`,
      }
    })
  }

  return (
    <div id="movebackground">
      {
        Array(MAX_COUNT).fill(0).map((_, idx) => createRectInfo(idx))
      }
    </div>
  )
};

export default MoveBackground;