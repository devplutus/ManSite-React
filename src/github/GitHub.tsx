/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import './GitHub.scss'

import ContentTitle from '../common/ContentTitle'
import { MainContext } from '../providers/mainProvider'

interface ContributionDay {
  color: string
  count: number
  level: string
  date: string
  weekday: number
}

interface Contribution {
  totalContributions: number
  days: ContributionDay[]
}

const GIT_API_URL = 'https://api.github.com/graphql'
const GIT_API_TOKEN = 'token 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'

const GitHub = ({ className }) => {
  const [contributions, setContributions] = useState<Contribution>({
    days: [],
    totalContributions: 0,
  })

  const { language } = useContext(MainContext)

  const getContributions = async () => {
    // Reset State
    const tempContributions: Contribution = {
      days: [],
      totalContributions: 0,
    }

    const { data } = await axios({
      url: GIT_API_URL,
      method: 'POST',
      data: {
        query: `
          query ContributionsView {
            user(login: "devplutus") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                color
                                contributionCount
                                contributionLevel
                                date
                                weekday
                            }
                        }
                    }
                }
            }
        }
        `,
      },
      headers: {
        Authorization: GIT_API_TOKEN,
      },
    })

    if (data.data) {
      const { contributionCalendar } = data.data.user.contributionsCollection
      tempContributions.totalContributions = contributionCalendar.totalContributions
      contributionCalendar.weeks.forEach(({ contributionDays }) => {
        contributionDays.forEach(({ color, date, weekday, contributionCount: count, contributionLevel: level }) => {
          tempContributions.days.push({ color, count, level, date, weekday })
        })
      })
    }

    tempContributions.days.reverse()

    setContributions(tempContributions)
  }

  useEffect(() => {
    getContributions()
  }, [])

  return (
    <div id="github" className={className}>
      <ContentTitle title={language === 'ko' ? '깃허브' : 'GITHUB'} />
      <div className="github_container">
        <div className="github_sub_title">
          Contributions
        </div>
        <div className="github_tree">
          {Array(Math.ceil(contributions.days.length / 7))
            .fill(0)
            .map((_, i) => (
              <div key={`git_week_${i}`} className="tree_week">
                {contributions.days.slice(i * 7, (i + 1) * 7).map((day) => {
                  return (
                    <div key={`git_day_${day.date}`} className="tree_day" style={{ background: day.color }} />
                  )
                })}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default GitHub
