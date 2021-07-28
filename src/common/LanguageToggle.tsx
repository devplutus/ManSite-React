import * as React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import './LanguageToggle.scss'

import ko from '../assets/svg/south-korea.svg'
import en from '../assets/svg/united-states.svg'
import { MainContext } from '../providers/mainProvider'

const LanguageToggle = () => {

  const languageToggle = useRef<HTMLDivElement>()

  const { langauge, setLangaugeHandler } = useContext(MainContext)

  return (
    <div role='button' ref={languageToggle} className='language_toggle' onClick={() => setLangaugeHandler(langauge === 'ko' ? 'en' : 'ko')}>
      <div className={`language_toggle_item ${ langauge === 'ko' ? 'active' : '' }`}>
        <img className='language_toggle_icon' src={ko} alt="Korean" />
      </div>
      <div className={`language_toggle_item ${ langauge === 'en' ? 'active' : '' }`}>
        <img className='language_toggle_icon' src={en} alt="English" />
      </div>
    </div>
  )
}

export default LanguageToggle