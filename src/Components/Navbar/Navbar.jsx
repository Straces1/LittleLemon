import React, {useState} from 'react';
import {data} from '../../data/NavbarData';

import {Nav, NavLogo, NavMenu, NavItem, NavLink, NavContainer, MenuWrapper, Hamburger, MobileMenu, MobileLink} from './Navbar.style'


const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
  return (
    <Nav>
      <NavContainer>
        <NavLink to='/'>
            <NavLogo src='./assets/Logo.svg' alt='logo' />
        </NavLink>
        <MenuWrapper>
            <NavMenu>
                {data.map((el, key) => {
                    return (
                        <NavItem key={key}><NavLink to={el.to}>{el.text}</NavLink></NavItem>
                    )
                })}
            </NavMenu>
        </MenuWrapper>
        <Hamburger onClick={handleClick}>
            <img src="./assets/hamburger.svg" alt="mobile button" />
        </Hamburger>
        {show && 
            <MobileMenu>{data.map((el, key) => {
                return (
                    <MobileLink key={key} to={el.to} onClick={handleClick} >{el.text} </MobileLink>
                )
            })}</MobileMenu>
        }
      </NavContainer>
    </Nav>
  )
}

export default Navbar
