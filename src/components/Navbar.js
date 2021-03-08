
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const [sidebarData, setSidebarData] = useState([])

  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    setSidebarData(SidebarData())
  }, [])

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={ showSidebar } />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={ showSidebar }>
          <li className='navbar-toogle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((datum, index) => {
            return (
              <li key={ index } className={ datum.className }>
                <Link to={ datum.path }>
                  <span>{ datum.title }</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
