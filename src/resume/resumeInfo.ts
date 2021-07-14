interface Resume {
  active: boolean
  startYear: number
  endYear: number
  title: string
  agency: string
  desc: string
}

interface Chart {
  name: string
  value: number
}

interface Knowledge {
  title: string
  subTitle: string
}

export const experience: Resume[] = [
  {
    active: true,
    startYear: 2020,
    endYear: null,
    title: 'FullStack Developer',
    agency: 'Qualisoft',
    desc: ` <b>Javascript</b> was used as the primary language. 
    Developing Dynamics CRM services and websites using the <b>Nuxt.js</b> and <b>Express.js</b> framework.`,
  },
  {
    active: false,
    startYear: 2018,
    endYear: 2019,
    title: 'Software Programmer',
    agency: 'TNE Tech.',
    desc: ` Develop desktop applications for solar collector panel measurements based on 
    <b>C#</b> using the <b>.Net Winforms</b> and <b>WPF</b> framework.`,
  },
]

export const educations: Resume[] = [
  {
    active: true,
    startYear: 2020,
    endYear: null,
    title: 'The Cyber University of Korea',
    agency: 'Seoul',
    desc: `Bachelor's degree in <b>computer science</b>.`,
  },
  {
    active: false,
    startYear: 2017,
    endYear: 2019,
    title: 'World Cyber College',
    agency: 'Gyeonggi',
    desc: `Associate's degree in <b>computer science</b>.`,
  },
  {
    active: false,
    startYear: 2013,
    endYear: 2015,
    title: 'Kyungsung University',
    agency: 'Busan',
    desc: `Bachelor's degree in <b>computer science</b>. But dropped out of college.`,
  },
]

export const languages: Chart[] = [
  { name: "HTML & CSS", value: 100 },
  { name: "Javascript", value: 90 },
  { name: "MY-SQL&MS-SQL", value: 60 },
  { name: "Python", value: 80 },
  { name: "GO", value: 60 },
  { name: "Dart", value: 50 },
  { name: "C#", value: 50 },
]

export const codings: Chart[] = [
  { name: "Express.js", value: 90 },
  { name: "Vue.js", value: 90 },
  { name: "Nuxt.js", value: 85 },
  { name: "React.js", value: 70 },
  { name: "Electron.js", value: 65 },
  { name: "Flutter", value: 65 },
]

export const enviroments: Chart[] = [
  { name: "Git", value: 84 },
  { name: "Microsoft Azure", value: 70 },
  { name: "AWS", value: 48 },
  { name: "Notion", value: 100 },
  { name: "MS Office", value: 95 },
  { name: "Adobe Photoshop", value: 88 },
  { name: "Adobe XD", value: 73 },
]

export const knowledges: Knowledge[] = [
  {
    title: 'OOP',
    subTitle: 'C#, JAVA'
  },
  {
    title: 'Data Structure',
    subTitle: 'Array, Stack, Queue, Graph, Tree'
  },
  {
    title: 'Javascript',
    subTitle: 'Execution Context, ES6, DOM'
  },
  {
    title: 'Algorithm',
    subTitle: 'DP, Recursion, Greedy, DFS, BFS'
  },
  {
    title: 'Network',
    subTitle: 'HTTP, TCP/UDP, Socket'
  },
  {
    title: 'Compare SSR with SPA',
    subTitle: ''
  },
]