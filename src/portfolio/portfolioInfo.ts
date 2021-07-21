interface Portfolio {
  title: string
  agency: string
  logoFileName: string
  detail: PortfolioDetail
}

interface PortfolioDetail {
  preview?: string[]
  skills: Skill[]
  languages: Langauge[]
  features: string[]
}

export interface Skill {
  name: string
  background?: string
  color?: string
}

export interface Langauge {
  name: string
  background?: string
  color?: string
}

const skills: {[key: string]: Skill} = {
  vue: {
    name: 'Vue.js',
    background: '#3fb984'
  },
  nuxt: {
    name: 'Nuxt.js',
    background: '#46b280',
  },
  express: {
    name: 'Express.js',
    background: '#d6d6d6',
    color: '#000000'
  },
  electron: {
    name: 'Electron.js',
    background: '#262a37',
    color: '#a0ebf9'
  },
  arduino: {
    name: 'Arduino',
    background: '#20979c'
  },
  razorpage: {
    name: 'ASP .NET Core Razor Pages',
    background: '#5026d5'
  },
  wpf: {
    name: 'WPF',
    background: '#1277c1'
  },
  webform: {
    name: 'ASP .NET Web Forms',
    background: '#1277c1'
  },
  winform: {
    name: 'ASP .NET Windows Forms',
    background: '#1277c1'
  },
  jquery: {
    name: 'JQuery',
    background: '#1e2e3b'
  },
  tesseract: {
    name: 'Tesseract',
  },
  azure: {
    name: 'Azure',
    background: '#018ad7'
  },
  oracle: {
    name: 'Oracle',
    background: '#ed1c24'
  },
  mysql: {
    name: 'My-SQL',
    background: '#5382a1',
  },
  mssql: {
    name: 'MS-SQL',
    background: '#f21614',
  },
  socket: {
    name: 'Socket',
  },
  serialport: {
    name: 'SerialPort',
  },
  gnuboard: {
    name: 'Gnuboard5',
    background: '#425bce',
  }
}

const languages: {[name:string]: Langauge} = {
  javascript: {
    name: 'Javascript',
    background: '#f0da50',
    color: '#323230'
  },
  node: {
    name: 'Node.js',
    background: '#83cd29',
    color: '#404137'
  },
  python: {
    name: 'Python',
    background: '#3774a6',
  },
  csharp: {
    name: 'C#',
    background: '#662079'
  },
  cdplus: {
    name: 'C++',
    background: '#01599c'
  },
  php: {
    name: 'PHP',
    background: '#8993be',
    color: '#232531'
  }
}

export const portfolioInfo: Portfolio[] = [
  {
    title: 'Integrate SAP with MS CRM',
    agency: 'Cariflex',
    logoFileName: `cariflex.png`,
    detail: {
      preview: [
        'cariflex_1.png',
        'cariflex_2.png',
      ],
      skills: [
        skills.vue,
        skills.nuxt,
        skills.express,
        skills.azure
      ],
      languages: [
        languages.javascript,
        languages.node
      ],
      features: [
        'SAP CRM 데이터 통합',
        'RFC Interface로 실시간 화면 구현',
        'MS Dynamics CRM에 실시간 페이지 임베드',
      ]
    }
  },
  {
    title: 'Prescription Scan',
    agency: 'MrBot',
    logoFileName: 'mrbot.png',
    detail: {
      skills: [
        skills.vue,
        skills.electron,
        skills.tesseract,
        skills.express,
        skills.mssql,
        skills.azure
      ],
      languages: [
        languages.javascript,
        languages.node,
        languages.python
      ],
      features: [
        '업로드된 처방전 이미지를 Text로 변환하여 CRM에 바인딩',
        'OCR API 연동(Google, Kakao, Naver)',
        'Tesseract 결과 확인을 위한 Node 서버 구현',
        '디테일한 Tesseract 작업을 위한 Python Script',
        'MS Dynamics CRM, Azure Blob Storage 연동',
        '이미지 Crop 기능',
        'OCR Data Drag&Drop 기능',
        'Excel 내보내기 기능',
      ]
    }
  },
  {
    title: 'SMS Service',
    agency: 'Qualisoft',
    logoFileName: 'qualisoft.png',
    detail: {
      preview: [
        'quali.png',
      ],
      skills: [
        skills.vue,
        skills.nuxt
      ],
      languages: [
        languages.javascript,
        languages.node
      ],
      features: [
        'Popbill API를 이용한 SMS 서비스',
        'SMS Service 인증 로직 구현'
      ]
    }
  },
  {
    title: 'Scholarship Management',
    agency: 'Future foundation of Korea',
    logoFileName: 'mirae.png',
    detail: {
      preview: [
        'mirae.png',
      ],
      skills: [
        skills.razorpage,
        skills.jquery,
        skills.azure
      ],
      languages: [
        languages.csharp,
        languages.javascript
      ],
      features: [
        'MS Dynamics CRM 연동',
        'Azure Blob Storage 연동',
        'PASS 인증 기능',
      ]
    }
  },
  {
    title: 'Fleet Management System',
    agency: 'PwC',
    logoFileName: 'pwc.png',
    detail: {
      preview: [
        'pwc.png',
      ],
      skills: [
        skills.webform,
        skills.jquery,
        skills.oracle
      ],
      languages: [
        languages.csharp,
        languages.javascript
      ],
      features: [
        'PwC 내부 데이터 연동',
        '차량 생성 및 수정 폼 개발',
        'Excel 가져오기 및 Validate 기능',
        'Excel 내보내기 기능',
        '각 항목별 Excel Form 다운로드 기능',
        '사용자 권한 부여 기능',
        'Window ADFS 인증 기능',
      ]
    }
  },
  {
    title: 'Remote Control System',
    agency: 'Hanwha Q Cells',
    logoFileName: 'qcell.png',
    detail: {
      skills: [
        skills.wpf,
        skills.socket,
        skills.serialport,
        skills.mysql
      ],
      languages: [
        languages.csharp
      ],
      features: [
        'Socket 통신 구현',
        'Master&Slave 관계로 원격 컨트롤 기능',
        '각 Slave 기계들의 상황을 모니터 할 수 있는 Master 화면 구현',
        '각 Slave 기계들의 시작&종료 시간 설정 및 바로 시작&정지 기능',
      ]
    }
  },
  {
    title: 'PV Monitoring',
    agency: 'LG Hausys',
    logoFileName: 'hausys.png',
    detail: {
      preview: [
        'hausys_1.png',
        'hausys_2.png',
      ],
      skills: [
        skills.winform,
        skills.arduino,
        skills.serialport,
        skills.mysql
      ],
      languages: [
        languages.csharp,
        languages.cdplus
      ],
      features: [
        'SerialPort를 사용하여 8개의 태양광 패널 측정 모듈 연동',
        '태양광 패널 측정을 위한 Arduino 프로그래밍',
        '각 모듈의 측정 데이터를 디테일하게 볼 수 있는 화면 구현',
        '측정 주기를 설정하여 각 주기마다 DB에 데이터 저장',
      ]
    }
  },
  {
    title: 'E-commerce Site',
    agency: 'Laberry',
    logoFileName: 'laberry.png',
    detail: {
      preview: [
        'laberry.png',
      ],
      skills: [
        skills.gnuboard,
        skills.jquery,
        skills.mysql
      ],
      languages: [
        languages.php,
        languages.javascript
      ],
      features: [
        '디자인된 이미지 퍼블리싱',
        '결제 모듈 연동',
        '룰렛 이벤트 개발',
        '출석체크 이벤트 개발',
        '유저 등급 기능',
      ]
    }
  },
]