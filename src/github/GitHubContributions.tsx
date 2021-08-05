/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useEffect, useState } from 'react'
import './GitHubContributions.scss'

import axios from 'axios'
import { Contribution } from './GitHubTypes'

const GitHubContributions = ({ url, token }) => {
  const [contributions, setContributions] = useState<Contribution>({
    days: [],
    totalContributions: 0,
  })

  const getContributions = async () => {
    // Reset State
    const tempContributions: Contribution = {
      days: [],
      totalContributions: 0,
    }

    const { data } = await axios({
      url,
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
        Authorization: `token ${token}`,
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
  )
}

export default GitHubContributions