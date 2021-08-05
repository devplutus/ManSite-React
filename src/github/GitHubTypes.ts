export interface ContributionDay {
  color: string
  count: number
  level: string
  date: string
  weekday: number
}

export interface Contribution {
  totalContributions: number
  days: ContributionDay[]
}

export interface Commit {
  repositoryID: number
  date: Date
  message: string
}

export interface Language {
  color: string
  name: string
}

export interface Repository {
  id: number
  name: string
  languages: Language[]
}