import * as React from 'react'
import { useEffect, useState } from 'react'
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

const Menu = ({ isMobile, changeMenu }) => {
  const [page, setPage] = useState(0)
  const [isMove, setIsMove] = useState(false)

  const moveMenu = (index: number, callback=null) => {
    // Mobile & Tablet
    const menu = document.getElementById('menu')
    const width = menu.getElementsByClassName('item')[0].clientWidth
    const menuSelected = document.getElementById('menu_selected')
    const menuSelectedItem = document.getElementById('menu_selected_items')
    menuSelected.style.left = isMobile ? `${width * index}px` : '0'
    menuSelected.style.top = isMobile ? '0' : `${75 * index}px`
    menuSelectedItem.style.right = isMobile ? `${width * index}px` : '0'
    menuSelectedItem.style.bottom = isMobile ? '0' : `${75 * index}px`
    
    if (page !== index) {
      if (callback) {
        setIsMove(true)
        callback(index)
        setIsMove(false)
      }
      setPage(index)
    }
  }

  const resize = () => {
    const menu = document.getElementById('menu')
    const width = menu.getElementsByClassName('item')[0].clientWidth
    document.getElementById('menu_selected').style.width = `${width}px`
    document.getElementById('menu_selected_items').style.width = `${menu.clientWidth}px`
    moveMenu(page)
  }

  const checkContentByScroll = () => {
    if (isMove) return
    
    const menuHeight = document.getElementById('menu_container').clientHeight
    const { bottom: currentBottom } = document.getElementById(menuId[page]).getBoundingClientRect()
    if (page !== 0) {
      const { bottom: prevBottom } = document.getElementById(menuId[page-1]).getBoundingClientRect()
      if (prevBottom > menuHeight) {
        moveMenu(page-1)
      }
    }
    if (currentBottom <= menuHeight) {
      moveMenu(page+1)
    }
  }

  useEffect(() => {
    if (isMobile) {
      const mainContent = document.getElementById('m_main_content')

      resize()
      window.addEventListener('resize', resize)
      mainContent.addEventListener('scroll', checkContentByScroll)
      return () => {
        document.getElementById('menu_selected').setAttribute('style', '')
        document.getElementById('menu_selected_items').setAttribute('style', '')
        window.removeEventListener('resize', resize)
        mainContent.removeEventListener('scroll', checkContentByScroll)
      }  
    }
    return null
  })

  return (
    <div id="menu_container">
      <div id="menu">
        {menuItems.map((item, index) => {
          return (
            <div
              role="menuitem"
              className="item"
              key={`menuItem${item.icon}`}
              onClick={() => {
                moveMenu(index, changeMenu)
              }}
            >
              <i className={`fas ${item.icon}`} />
              <span>{item.title.toUpperCase()}</span>
            </div>
          )
        })}
      </div>
      <div id="menu_selected">
        <div id="menu_selected_items">
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
