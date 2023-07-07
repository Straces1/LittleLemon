import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    height: 150px;
    z-index: 50;
    background: transparent;
`
export const NavLogo = styled.img`
    margin-right: 1rem;
    width: 20vw;

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

`
export const NavItem = styled.li`
    height: 50px;
    cursor: pointer;
    color: black;
    display: block;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    z-index: 50;
    font-size: 24pt;
    padding-inline: 10px;
    text-transform: uppercase;
    font-weight: 500;
    color: #000;

`