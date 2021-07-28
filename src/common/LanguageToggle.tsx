import * as React from 'react'
import { useRef, useContext } from 'react'
import './LanguageToggle.scss'

import ko from '../assets/svg/south-korea.svg'
import en from '../assets/svg/united-states.svg'
import { MainContext } from '../providers/mainProvider'

const LanguageToggle = () => {

  const languageToggle = useRef<HTMLDivElement>()

  const { language, setLanguageHandler } = useContext(MainContext)

  return (
    <div role='button' ref={languageToggle} className='language_toggle' onClick={() => setLanguageHandler(language === 'ko' ? 'en' : 'ko')}>
      <div className={`language_toggle_item ${ language === 'ko' ? 'active' : '' }`}>
        <img className='language_toggle_icon' src={ko} alt="Korean" />
      </div>
      <div className={`language_toggle_item ${ language === 'en' ? 'active' : '' }`}>
        <img className='language_toggle_icon' src={en} alt="English" />
      </div>
    </div>
  )
}

export default LanguageToggle