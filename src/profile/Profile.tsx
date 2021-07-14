import * as React from 'react'
import { useEffect, useState } from 'react'
import './Profile.scss'

const jobList = [
  {
    title: 'Web Developer',
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
    title: 'Front-End',
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
    title: 'Back-End',
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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const Profile = () => {

  const [index, setIndex] = useState(0)

  const typeJob = async (index: number) => {
    const jobTitle = document.getElementById('profile_job_title')
    const jobSkills = document.getElementById('profile_skills')
    jobSkills.classList.remove('hide')
    const job = jobList[index].title

    for (let reverse = 0; reverse < 2; reverse++) {
      for (let i = 0; i <= job.length; i++) {
        const slice = !reverse ? i : job.length - i
        jobTitle.innerHTML = `${job.slice(0, slice)}` || '&nbsp;'
        await delay(100)
      }
  
      if (reverse === 0) await delay(1000)
    }

    jobSkills.classList.add('hide')
    await delay(1000)
    setIndex(index + 1 === jobList.length ? 0 : index + 1)
  }

  useEffect(() => typeJob(index))

  return (
    <div id="profile">
      <div id="profile_image" />
      <div id="profile_name">
        <span>JUNG BYEONG MAN</span>
      </div>
      <div id="profile_birth">
        <span>1994. 06. 22.</span>
      </div>
      <div id="profile_residence">
        <span>Yongsan-gu, Seoul, Korea</span>
      </div>
      <div id="profile_job">
        <span id="profile_job_title" />
      </div>
      <div id="profile_skills">
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
