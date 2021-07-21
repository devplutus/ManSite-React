import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
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

const Menu = ({ isMobile }) => {
  const [page, setPage] = useState(0)
  const [isMove, setIsMove] = useState(false)

  const menuContainer = useRef()
  const menu = useRef()
  const menuSelected = useRef()
  const menuSelectedItems = useRef()

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
        menuSelected.current.setAttribute('style', '')
        menuSelectedItems.current.setAttribute('style', '')
        window.removeEventListener('resize', resize)
        mainContent.removeEventListener('scroll', checkContentByScroll)
      }  
    }
    return null
  })

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
