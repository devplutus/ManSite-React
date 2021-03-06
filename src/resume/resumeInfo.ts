interface Resume {
  active: boolean
  startYear: number
  endYear: number
  className?: string
  title: Language
  agency: Language
  desc: Language
}

interface Language {
  ko: string
  en: string
}

interface Chart {
  name: string
  value: number
}

interface Knowledge {
  title: Language
  subTitle: Language
}

export const experience: Resume[] = [
  {
    active: true,
    startYear: 2021,
    endYear: null,
    className: 'coupang',
    title: {
      ko: '프론트엔드 개발자',
      en: 'Front-End Developer'
    },
    agency: {
      ko: 'Coupang',
      en: 'Coupang',
    },
    desc: {
      ko: ` <b>CMG(Coupang Media Group) CMP(Contents Management Platform) 팀</b>에서 재직 중.<br/>
      <b>Vue.js</b> & <b>React.js</b>를 사용하여 기획전 및 브랜드존 Display & Admin 페이지 개발.`,
      en: ` Currently at <b>CMG(Coupang Media Group) CMP(Contents Management Platform) Team</b> Developing Display and Admin websites using 
      the <b>Vue.js</b> and <b>React.js</b>.`,
    }
  },
  {
    active: false,
    startYear: 2020,
    endYear: 2021,
    className: 'qualisoft',
    title: {
      ko: '풀스택 개발자',
      en: 'FullStack Developer'
    },
    agency: {
      ko: 'Qualisoft',
      en: 'Qualisoft',
    },
    desc: {
      ko: ` <b>Javascript</b>를 주 언어로 개발. 
      <b>Nuxt.js</b> 와 <b>Express.js</b> 프레임워크를 사용하여 Dynamics CRM 외부 서비스 개발.`,
      en: ` Developing Dynamics CRM services and websites using the <b>Nuxt.js</b> and <b>Express.js</b> framework.`,
    }
  },
  {
    active: false,
    startYear: 2018,
    endYear: 2019,
    className: 'tne',
    title: {
      ko: '윈도우 소프트웨어 개발자',
      en: 'Windows Software Programmer',
    },
    agency: {
      ko: 'TNETECH CO.,LTD',
      en: 'TNETECH CO.,LTD',
    },
    desc: {
      ko: `<b>.Net Winforms</b> and <b>WPF</b> 프레임워크를 사용하여 태양광 패널 성능 측정을 위한 윈도우 데스크탑 어플리케이션 개발. `,
      en: ` Developing desktop applications for performance measurement of solar panels using the <b>.Net Winforms</b> and <b>WPF</b> framework.`,
    }
  },
]

export const educations: Resume[] = [
  {
    active: false,
    startYear: 2020,
    endYear: 2022,
    title: {
      ko: '고려사이버대학교',
      en: 'The Cyber University of Korea'
    },
    agency: {
      ko: '서울',
      en: 'Seoul',
    },
    desc: {
      ko: `<b>소프트웨어 공학과</b> 학사 취득.`,
      en: `Bachelor's degree in <b>Software Engineering</b>.`,
    },
  },
  {
    active: false,
    startYear: 2017,
    endYear: 2019,
    title: {
      ko: '세계사이버대학',
      en: 'World Cyber College',
    },
    agency: {
      ko: '경기도',
      en: 'Gyeonggi Province',
    },
    desc: {
      ko: `<b>컴퓨터정보통신학과</b> 전문학사 취득.`,
      en: `Associate's degree in <b>Computer IT Communications</b>.`,
    }
  },
  {
    active: false,
    startYear: 2013,
    endYear: 2015,
    title: {
      ko: '경성대학교',
      en: 'Kyungsung University',
    },
    agency: {
      ko: '부산',
      en: 'Busan',
    },
    desc: {
      ko: `<b>컴퓨터공학과</b> 1학년 재학 후 중퇴 후 전자정부 표준프레임워크(Spring) 교육 수료.`,
      en: `Pursued Bachelor’s degree in <b>Computer Science</b> for 2 years until dropping out and moving onto private education  subsidized by the government, specialising in Java.`,
    }
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
    title: {
      ko: '객체 지향 프로그래밍',
      en: 'OOP'
    },
    subTitle: {
      ko: 'C#, JAVA',
      en: 'C#, JAVA'
    }
  },
  {
    title: {
      ko: '자료 구조',
      en: 'Data Structure'
    },
    subTitle: {
      ko: '배열, 스택, 큐, 그래프, 트리',
      en: 'Array, Stack, Queue, Graph, Tree'
    }
  },
  {
    title: {
      ko: '자바스크립트',
      en: 'Javascript'
    },
    subTitle: {
      ko: 'Execution Context, ES6, DOM',
      en: 'Execution Context, ES6, DOM'
    }
  },
  {
    title: {
      ko: '알고리즘',
      en: 'Algorithm',
    },
    subTitle: {
      ko: '다이나믹 프로그래밍, 재귀, 그리디, 넓이 우선 탐색, 깊이 우선 탐색',
      en: 'DP, Recursion, Greedy, DFS, BFS'
    }
  },
  {
    title: {
      ko: '네트워크',
      en: 'Network',
    },
    subTitle: {
      ko: 'HTTP&Socket 통신, TCP/UDP',
      en: 'HTTP, TCP/UDP, Socket'
    }
  },
  {
    title: {
      ko: 'SSR과 SPA 차이',
      en: 'Compare SSR with SPA',
    },
    subTitle: {
      ko: '',
      en: ''
    }
  },
]