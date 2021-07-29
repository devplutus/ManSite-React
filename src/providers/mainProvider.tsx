/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { createContext, useState, useEffect } from 'react'

export const MainContext = createContext({
  language: 'ko',
  isMobile: false,
  setIsMobileHandler: (isMobile: boolean): void => {},
  setLanguageHandler: (language: string): void => {}
})

const MainContextProvider = ({ children }) => {

  const [language, setlanguage] = useState(localStorage.getItem('language') || 'ko')
  const [isMobile, setIsMobile] = useState(document.body.clientWidth < 1024)
  
  const setLanguageHandler = (language: string) => {
    localStorage.setItem('language', language)
    setlanguage(language)
  }
  const setIsMobileHandler = (isMobile: boolean) => {
    setIsMobile(isMobile)
  }

  const checkMobile = () => {
    const mobile = document.body.clientWidth < 1024
    if (isMobile !== mobile) {
      setIsMobileHandler(mobile)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  })

  return (
    <MainContext.Provider value={{
      language,
      isMobile,
      setIsMobileHandler,
      setLanguageHandler
    }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider