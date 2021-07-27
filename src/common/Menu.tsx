import * as React from 'react'
import { useEffect, useState, useRef, useContext } from 'react'
import { MainContext } from '../providers/mainProvider'
import './Menu.scss'

const menuItems = [
  {
    icon: 'fa-address-card',
    title: 'Profile',
  },
  {
    icon: 'fa-file-invoice',
    title: 'Resume',
  },
  {
    icon: 'fa-pencil-ruler',
    title: 'Portfolio',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Contact',
  },
]

const menuId = menuItems.map(m => m.title.toLowerCase())

const Menu = () => {
  
  const [page, setPage] = useState(0)
  const [isMove, setIsMove] = useState(false)

  const menuContainer = useRef<HTMLDivElement>()
  const menu = useRef<HTMLDivElement>()
  const menuSelected = useRef<HTMLDivElement>()
  const menuSelectedItems = useRef<HTMLDivElement>()

  const { isMobile } = useContext(MainContext)

  const moveMenu = (index: number, onlyMenu=false) => {
    // Move Selected Menu
    const width = menu.current.getElementsByClassName('item')[0].clientWidth
    menuSelected.current.style.left = isMobile ? `${width * index}px` : '0'
    menuSelected.current.style.top = isMobile ? '0' : `${75 * index}px`
    menuSelectedItems.current.style.right = isMobile ? `${width * index}px` : '0'
    menuSelectedItems.current.style.bottom = isMobile ? '0' : `${75 * index}px`

    // Move Content
    const content = document.getElementById(isMobile ? 'm_main_content' : 'main_content_slide')
    const divInMenu = {
      profile: document.getElementById('profile'),
      resume: document.getElementById('resume'),
      portfolio: document.getElementById('portfolio'),
      contact: document.getElementById('contact'),
    }

    if (!isMobile) {
      if (index === 0) {
        content.classList.remove('show')
        menuContainer.current.style.width = '10%'
        divInMenu.profile.classList.remove('large')
      } else {
        content.classList.add('show')
        menuContainer.current.style.width = '20%'
        divInMenu.profile.classList.add('large')
        divInMenu[menuId[index]].scrollIntoView({
          behavior: 'smooth'
        })
      }
    } else {
      if (!onlyMenu) {
        // Momentum Scroll로 인해서 억지로 스크롤 Disable
        content.style.overflow = 'hidden'
        const { scrollTop } = content
        content.scrollTop = scrollTop
        setTimeout(() => {
          content.style.overflow = 'scroll'
        })
        content.scrollTo({
          top: divInMenu[menuId[index]].offsetTop - 105,
          behavior: 'smooth'
        })
      }
      if (page !== index && !onlyMenu) {
        setIsMove(true)
        const interval = setInterval(() => {
          if (content.scrollTop === divInMenu[menuId[index]].offsetTop - 105) {
            setIsMove(false)
            clearInterval(interval)
          }
        }, 100)
      }
    }
    setPage(index)
  }

  const resize = () => {
    const width = menu.current.getElementsByClassName('item')[0].clientWidth
    menuSelected.current.style.width = `${width}px`
    menuSelectedItems.current.style.width = `${menu.current.clientWidth}px`
    moveMenu(page, true)
  }

  const checkContentByScroll = () => {
    if (isMove) return

    const menuHeight = menuContainer.current.clientHeight
    const { bottom: currentBottom } = document.getElementById(menuId[page]).getBoundingClientRect()

    if (page !== 0) {
      const { bottom: prevBottom } = document.getElementById(menuId[page-1]).getBoundingClientRect()
      if (prevBottom > menuHeight) {
        moveMenu(page-1, true)
      }
    }

    if (currentBottom <= menuHeight) {
      moveMenu(page+1, true)
    }
  }

  useEffect(() => {
    if (isMobile) {
      const mainContent = document.getElementById('m_main_content')

      resize()
      window.addEventListener('resize', resize)
      mainContent.addEventListener('scroll', checkContentByScroll)
      return () => {
        if (menuSelected.current) menuSelected.current.setAttribute('style', '')
        if (menuSelectedItems.current) menuSelectedItems.current.setAttribute('style', '')
        window.removeEventListener('resize', resize)
        mainContent.removeEventListener('scroll', checkContentByScroll)
      }  
    }
    return null
  }, [menu, menuSelected, menuSelectedItems])

  return (
    <div ref={menuContainer} id="menu_container">
      <div ref={menu} id="menu">
        {menuItems.map((item, index) => {
          return (
            <div
              role="menuitem"
              className="item"
              key={`menuItem${item.icon}`}
              onClick={() => {
                moveMenu(index)
              }}
            >
              <i className={`fas ${item.icon}`} />
              <span>{item.title.toUpperCase()}</span>
            </div>
          )
        })}
      </div>
      <div ref={menuSelected} id="menu_selected">
        <div ref={menuSelectedItems} id="menu_selected_items">
          {menuItems.map((item) => {
            return (
              <div className="item" key={`menuItem${item.icon}`}>
                <i className={`fas ${item.icon}`} />
                <span>{item.title.toUpperCase()}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Menu
