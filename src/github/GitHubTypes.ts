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
  repositoryIndex: number
  date: string
  message: string
}

export interface Language {
  color: string
  name: string
}

export interface Repository {
  name: string
  languages: Language[]
}