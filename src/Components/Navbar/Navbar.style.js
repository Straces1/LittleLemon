import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    height: 150px;
    z-index: 50;
    background-color: white;
`
export const NavLogo = styled.img`
    float: left;
    margin-right: 1rem;
    width: 550px;
    @media screen and (max-width: 1514px){width: 450px;}
    @media screen and (max-width: 582px){width: 70vw;}
    

`
export const NavContainer = styled.div`
    display: flex;
    justify-items: flex-end;
    width: 75vw;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
    position: relative;

 
    @media screen and (max-width: 2047px){width: 80vw;}
    @media screen and (max-width: 1903px){width: 85vw;}
    @media screen and (max-width: 1764px){width: 90vw;}
    @media screen and (max-width: 1663px){width: 95vw;}
    @media screen and (max-width: 1584px){width: 100vw;}
`
export const MenuWrapper = styled.div`
    position: absolute;
    right: 0;
    margin-top: 55px;
    @media screen and (max-width: 1514px){margin-top: 120px}
    @media screen and (max-width: 1280px){display: none;}
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`
export const NavItem = styled.li`
    height: 40px;
    cursor: pointer;
    color: black;
    display: block;
    &:hover {
        transform: translateY(5px);
        transition: 0.3s;
    }
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
    &:hover {
        transform: translateY(5px);
        transition: 0.3s;
    }
`
export const Hamburger = styled.button`
    display: none;
    position: absolute;
    right: 0;
    margin-top: 40px;
    margin-right:40px;
    background: none;
    border: none;
    img {
        width: 50px;
    }
    &:hover {
        transform: translateY(5px);
        transition: 0.3s;
    }
    @media screen and (max-width: 1279px){display: block;}
    @media screen and (max-width: 480px){margin-right:20px;margin-top: 20px;}
`
export const MobileMenu = styled.div`
    width: 60vw;
    margin-left: 20vw;
    /* padding: 10px; */
    background-color: white;
    border: 1px solid rgba(0,0,0,0.4);
    box-shadow: 5px 10px 20px rgba(0,0,0,0.3);
    position: absolute;
    top: 130px;
    border-radius: 10px;
    text-align: center;
    @media screen and (max-width: 768px){width: 80vw; margin-left: 10vw;}
    @media screen and (max-width: 480px){width: 90vw; margin-left: 2.5vw;}


`
export const MobileLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-size: 24pt;
    font-weight: 500;
    text-transform: uppercase;
    color: black;
    padding: 15px 0;
    width: 100%;
    &:first-child{
        margin-top:5px;
    }
    &:nth-child(6) {
        margin-bottom: 5px;
    }
    &:hover {background-color: rgba(1,1,1,0.3);}
    &:active {background-color: rgba(1,1,1,0.3);}

    
`