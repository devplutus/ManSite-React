/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useState, useEffect } from 'react'
import './GitHubCommits.scss'

import axios from 'axios'

import { Language, Repository, Commit } from './GitHubTypes'

const GitHubcommits = ({ url, token }) => {
  const [commits, setCommits] = useState<Commit[]>([])
  const [repositories, setRepositories] = useState<Repository[]>([])

  const getCommits = async () => {
    const { data } = await axios({
      url,
      method: 'POST',
      data: {
        query: `
          query test {
            user(login: "devplutus") {
                repositories(first: 100, privacy: PUBLIC) {
                    nodes {
                        name
                        languages(first: 3) {
                          totalCount
                          nodes {
                              color
                              name
                          }
                        }
                        defaultBranchRef {
                            target {
                                ...on Commit {
                                    history(first: 10) {
                                        nodes {
                                            message
                                            committedDate
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        `
      },
      headers: {
        Authorization: `token ${token}`,
      },
    })

    if (data.data) {
      const newCommits: Commit[] = []
      const newRepositories: Repository[] = []
      const { repositories } = data.data.user

      repositories.nodes.forEach((repo, i) => {
        // Create New Repository
        const newRepo:Repository = {
          languages: [],
          name: repo.name
        }

        // languages
        repo.languages.nodes.forEach(({ color, name }) => {
          newRepo.languages.push({ color, name })
        })

        // Commits
        repo.defaultBranchRef.target.history.nodes.forEach(({ committedDate: date, message }) => {
          newCommits.push({ repositoryIndex: i, date, message })
        })

        newRepositories.push(newRepo)
      })

      // eslint-disable-next-line no-nested-ternary
      newCommits.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)

      setRepositories(newRepositories)
      setCommits(newCommits)
    }
  }

  useEffect(() => {
    getCommits()
  }, [])

  return (
    <div className="github_history">
      {
        commits.map((commit, i) => {
          return (
            <div key={`history_${i}`}>
              <div className='history_date'>
                {commit.date}
              </div>
              {commit.message}
            </div>
          )
        })
      }
    </div>
  )
}

export default GitHubcommits