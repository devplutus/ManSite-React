/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { createContext, useState } from 'react'

export const MainContext = createContext({
  langauge: '',
  setLangaugeHandler: (language: string): void => {}
})

const MainContextProvider = ({ children }) => {
  const initLangauge = localStorage.getItem('language') || 'ko'
  const [langauge, setLangauge] = useState(initLangauge)
  const setLangaugeHandler = (langauge: string) => {
    setLangauge(langauge)
  }
  return (
    <MainContext.Provider value={{
      langauge,
      setLangaugeHandler
    }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider