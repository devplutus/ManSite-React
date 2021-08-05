/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { useContext } from 'react'
import './GitHub.scss'

import ContentTitle from '../common/ContentTitle'
import GitHubContributions from './GitHubContributions'
import GitHubcommits from './GitHubCommits'

import { MainContext } from '../providers/mainProvider'

const GIT_API_URL = 'https://api.github.com/graphql'
const { GIT_API_TOKEN } = process.env


const GitHub = ({ className }) => {

  const { language } = useContext(MainContext)

  return (
    <div id="github" className={className}>
      <ContentTitle title={language === 'ko' ? '깃허브' : 'GITHUB'} />

      <div className="github_container">
        <div className="github_sub_title">
            { language === 'ko' ? '활동' : 'Contributions'}
        </div>
        <GitHubContributions url={GIT_API_URL} token={GIT_API_TOKEN} />
      </div>

      <div className="github_container">
        <div className="github_sub_title">
            { language === 'ko' ? '최근 커밋' : 'Lately Commits'}
        </div>
        <GitHubcommits url={GIT_API_URL} token={GIT_API_TOKEN} />
      </div>

    </div>
  )
}

export default GitHub
