/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { createContext, useState, useEffect } from 'react'

export const MainContext = createContext({
  langauge: 'ko',
  isMobile: false,
  setIsMobileHandler: (isMobile: boolean): void => {},
  setLangaugeHandler: (language: string): void => {}
})

const MainContextProvider = ({ children }) => {

  const [langauge, setLangauge] = useState(localStorage.getItem('language') || 'ko')
  const [isMobile, setIsMobile] = useState(document.body.clientWidth < 1024)

  const setLangaugeHandler = (langauge: string) => {
    setLangauge(langauge)
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
      langauge,
      isMobile,
      setIsMobileHandler,
      setLangaugeHandler
    }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider