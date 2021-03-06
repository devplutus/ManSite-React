interface Portfolio {
  title: Langauge
  agency: Langauge
  logoFileName: string
  detail: PortfolioDetail
}

interface PortfolioDetail {
  preview?: string[]
  skills: Skill[]
  languages: DevLangauge[]
  features: LangaugeList
}

export interface Skill {
  name: string
  background?: string
  color?: string
}

export interface DevLangauge {
  name: string
  background?: string
  color?: string
}

export interface Langauge {
  ko: string
  en: string
}

export interface LangaugeList {
  ko: string[]
  en: string[]
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

const languages: {[name:string]: DevLangauge} = {
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
    title: {
      ko: 'SAP&MS CRM 마이그레이션',
      en: 'Integrate SAP with MS CRM',
    },
    agency: {
      ko: '(주)대림코퍼레이션',
      en: 'Cariflex'
    },
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
      features: {
        ko: [
          'SAP와 MS Dynamics CRM 데이터 통합',
          'RFC Interface로 실시간 조회 사이트 개발',
          'MS Dynamics CRM에 실시간 페이지 임베드',
        ],
        en: [
          'SAP - MS Dynamics CRM Data Integration',
          'Real-time website development with RFC Interface',
          'Imbedding Real-time website on MS Dynamics CRM',
        ],
      }
    }
  },
  {
    title: {
      ko: '처방전 스캔 프로그램',
      en: 'Prescription Scan'
    },
    agency: {
      ko: 'MrBot',
      en: 'MrBot'
    },
    logoFileName: 'mrbot.png',
    detail: {
      preview: [
        'mrbot_1.png',
        'mrbot_2.png',
        'mrbot_3.png',
      ],
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
      features: {
        ko: [
          '업로드된 처방전 이미지를 Text로 변환하여 CRM에 바인딩',
          'OCR API 연동(Google, Kakao, Naver)',
          'Tesseract 결과 확인을 위한 Node 서버 구현',
          '디테일한 Tesseract 작업을 위한 Python Script',
          'MS Dynamics CRM, Azure Blob Storage 연동',
          'OCR Data Drag&Drop 기능',
        ],
        en: [],
      }
    }
  },
  {
    title: {
      ko: 'SMS 전송 서비스',
      en: 'SMS Service'
    },
    agency: {
      ko: '(주)퀄리소프트',
      en: 'Qualisoft'
    },
    logoFileName: 'qualisoft.png',
    detail: {
      preview: [
        'quali.png',
      ],
      skills: [
        skills.vue,
        skills.nuxt,
        skills.azure
      ],
      languages: [
        languages.javascript,
        languages.node
      ],
      features: {
        ko: [
          'Popbill API를 이용한 SMS 서비스',
          'Vuex를 이용하여 상태 관리',
          'Azure Function을 이용하여 전송 API 개발',
        ],
        en: [
          'SMS Service using Popbill API',
          'State management using Vuex',
          'SMS transfer API development with Azure Function',
        ],
      }
    }
  },
  {
    title: {
      ko: '장학금 관리 시스템',
      en: 'Scholarship Management',
    },
    agency: {
      ko: '미래나눔재단',
      en: 'Future foundation of Korea',
    },
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
      features: {
        ko: [
          'MS Dynamics CRM 연동',
          'Azure Blob Storage 연동',
          'PASS 인증 기능',
        ],
        en: [
          'SystemLink to MS Dynamics CRM and Azure Blob Storage',
          'Authentication with PASS',
        ],
      }
    }
  },
  {
    title: {
      ko: '차량 관리 시스템',
      en: 'Fleet Management System',
    },
    agency: {
      ko: '삼일회계법인',
      en: 'PwC',
    },
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
      features: {
        ko: [
          'PwC 내부 데이터 연동',
          '차량 생성 및 수정 폼 개발',
          'Excel 가져오기 및 Validate 기능',
          'Excel 내보내기 기능',
          '각 항목별 Excel Form 다운로드 기능',
          '사용자 권한 부여 기능',
          'Window ADFS 인증 기능',
        ],
        en: [
          'SystemLink to PWC internal data',
          'Fleet information create and modify form development',
          'Import, Export and Validate Excel file',
          'Excel form download for each item',
          'User authorization',
          'Authentication Window ADFS',
        ],
      }
    }
  },
  {
    title: {
      ko: '원격 컨트롤 시스템',
      en: 'Remote Control System',
    },
    agency: {
      ko: '한화큐셀',
      en: 'Hanwha Q Cells',
    },
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
      features: {
        ko: [
          'Socket 통신 구현',
          'Master&Slave 관계로 원격 컨트롤 기능',
          'Master 화면에서 각 Slave 기계들의 상황을 모니터',
          '각 Slave 기계들의 시작 & 종료 시간 설정 및 바로 시작&정지 기능',
        ],
        en: [
          'Implement socket communication',
          'Remote Control from master machine to slave machine',
          'Monitoring each slave machine\' state in master machine',
          'Start, Stop and Set machine operation time each slave machine\' state in master machine',
        ],
      }
    }
  },
  {
    title: {
      ko: '태양광 측정 모니터링 시스템',
      en: 'PV Monitoring System',
    },
    agency: {
      ko: 'LG 하우시스',
      en: 'LG Hausys',
    },
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
      features: {
        ko: [
          'SerialPort를 사용하여 8개의 태양광 패널 측정 모듈 연동',
          '태양광 패널 측정을 위한 Arduino 프로그래밍',
          '각 모듈의 측정 데이터를 디테일하게 볼 수 있는 화면 구현',
          '측정 주기를 설정하여 각 주기마다 DB에 데이터 저장',
        ],
        en: [
          'SystemLink to 8 of PV panel measurement module using serialport',
          'Arduino programming for PV panel measurement',
          'Window Application to monitoring measured data development',
          'Save to DataBase per interval setting measurement interval'
        ],
      }
    }
  },
  {
    title: {
      ko: '라베리 쇼핑몰 사이트 구축',
      en: 'E-commerce Site',
    },
    agency: {
      ko: '라베리',
      en: 'Laberry',
    },
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
      features: {
        ko: [
          '디자인된 이미지 퍼블리싱',
          '결제 모듈 연동',
          '룰렛 이벤트 개발',
          '출석체크 이벤트 개발',
          '유저 등급 기능',
        ],
        en: [
          'Publishing designed image',
          'SystemLink to payment module',
          'Roulette event development',
          'Attendance check development',
          'User Level feature',
        ],
      }
    }
  },
]