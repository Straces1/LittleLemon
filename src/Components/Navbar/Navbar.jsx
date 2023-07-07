import React from 'react'
import {data} from '../../data/NavbarData'

import {Nav, NavLogo, NavMenu, NavItem, NavLink} from './Navbar.style'

const Navbar = () => {
  return (
    <Nav>
      <NavLogo src='./assets/Logo.svg' alt='logo' />
      <NavMenu>
        {data.map((el, key) => {
            return (
                <NavItem key={key}><NavLink to={el.to}>{el.text}</NavLink></NavItem>
            )
        })}
      </NavMenu>
    </Nav>
  )
}

export default Navbar
