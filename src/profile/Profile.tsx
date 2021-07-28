/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { useEffect, useState, useContext, useRef } from 'react'
import LanguageToggle from '../common/LanguageToggle'
import { MainContext } from '../providers/mainProvider'
import './Profile.scss'

const jobList = [
  {
    title: {
      'ko': '웹 개발자',
      'en': 'Web Developer'
    },
    icons: [
      'devicon-javascript-plain',
      'devicon-typescript-plain',
      'devicon-python-plain-wordmark',
      'devicon-go-line',
      'devicon-csharp-plain',
      'devicon-dart-plain',
      'devicon-photoshop-line',
      'devicon-xd-line',
      'devicon-github-original-wordmark',
    ]
  },
  {
    title: {
      'ko': '프론트 엔드',
      'en': 'Front-End'
    },
    icons: [
      'devicon-react-original-wordmark',
      'devicon-vuejs-plain-wordmark',
      'devicon-babel-plain',
      'devicon-webpack-plain',
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-sass-original',
      'devicon-electron-original-wordmark',
      'devicon-jquery-plain-wordmark',
      'devicon-flutter-plain',
    ]
  },
  {
    title: {
      'ko': '백 엔드',
      'en': 'Back-End'
    },
    icons: [
      'devicon-dotnetcore-plain',
      'devicon-express-original-wordmark',
      'devicon-mysql-plain',
      'devicon-nginx-original',
      'devicon-linux-plain',
      'devicon-microsoftsqlserver-plain-wordmark',
    ]
  }
]

const Profile = () => {
  
  const { isMobile, language } = useContext(MainContext)

  const profileSkills = useRef<HTMLDivElement>()

  const [index, setIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [jobTitle, setJobTitle] = useState('')
  const [isEnd, setIsEnd] = useState(false)

  const showSkills = () => {
    profileSkills.current.classList.add('show')
  }

  const hideSkills = () => {
    profileSkills.current.classList.remove('show')
  }

  useEffect(() => {
    setIsEnd(false)
    setReverse(false)
    setJobTitle(' ')
    showSkills()
  }, [language])

  useEffect(() => {
    showSkills()
  }, [index])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (reverse) {
        setJobTitle(jobTitle.slice(0, jobTitle.length-1))
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [reverse])

  useEffect(() => {
    if (isEnd) {
      hideSkills()
      const timeout = setTimeout(() => {
        setIndex(index + 1 === jobList.length ? 0 : index + 1)
        setIsEnd(false)
        setJobTitle(' ')
      }, 1000)
      return () => clearTimeout(timeout)
    }
    return () => {}
  }, [isEnd])

  useEffect(() => {
    const title = jobList[index].title[language]
    const currentLength = jobTitle.length
    const timeout = setTimeout(() => {
      if (!reverse) {
        if (currentLength === title.length) {
          setReverse(true)
        } else {
          setJobTitle(title.slice(0, currentLength+1))
        }
      } else if (reverse) {
        if (currentLength === 0) {
          setReverse(false)
          setIsEnd(true)
        } else {
          setJobTitle(title.slice(0, currentLength-1))
        }
      }
    }, 200)

    return () => clearTimeout(timeout)
  }, [jobTitle])

  return (
    <div id="profile">
      {
        !isMobile && <LanguageToggle />
      }
      <div id="profile_image" />
      <div id="profile_name">
        <span>
          { language === 'ko' ? '정 병 만' : 'BYEONG MAN JUNG'}
        </span>
      </div>
      <div id="profile_birth">
        <span>1994. 06. 22.</span>
      </div>
      <div id="profile_residence">
        <span>
        { language === 'ko' ? '서울특별시 용산구' : 'Yongsan-gu, Seoul, Korea'}
        </span>
      </div>
      <div id="profile_job">
        <span id="profile_job_title">
          { jobTitle }
        </span>
      </div>
      <div ref={profileSkills} id="profile_skills">
        {
          jobList[index]
          .icons
          .map(icon => <i key={icon} className={icon} />)
        }
      </div>
    </div>
  )
}

export default Profile
