import classNames from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'

import { BurgerButton } from '@/components/buttons/BurgerButton/BurgerButton'
import { NavbarItem } from '@/components/header/navbar/NavbarItem/NavbarItem'
import { OLink } from '@/components/links/OLink/OLink'
import { Logo } from '@/components/Logo/Logo'
import { Paths } from '@/routes'
import { media } from '@/styled/vars'

const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0 15px 0;

  ${media.lg} {
    padding: 50px 0 30px 0;
  }
`

const NavbarBrand = styled.div`
  display: flex;
  flex: 1;
`
const StyledNavbarLink = styled(OLink)`
  display: flex;
  align-items: center;
`
const NavbarMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
  display: none;
  &.is-active {
    display: block;
  }
  ${media.lg} {
    display: flex;
    align-items: stretch;
    box-shadow: none;
    width: auto;
  }
`

const NavbarStart = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;

  ${media.lg} {
    flex-direction: row;
  }
`
const NavbarEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  ${media.lg} {
    flex-direction: row;
  }
`
export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      <StyledNavbar
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <NavbarBrand className="navbar-brand">
          <StyledNavbarLink className="navbar-item" to={Paths.Index}>
            <Logo />
          </StyledNavbarLink>

          <BurgerButton isActive={navbarOpen} onClickHandler={toggleNavbar} />
        </NavbarBrand>

        <NavbarMenu
          id="navbar"
          className={classNames({
            'navbar-menu': true,
            'is-active': navbarOpen,
          })}
        >
          <NavbarStart className="navbar-start">
            <NavbarItem to={Paths.Index}>Home</NavbarItem>
            <NavbarItem to={Paths.PostListPage}>Blog</NavbarItem>
            <NavbarItem to={Paths.PostFormPage}>Post form</NavbarItem>
          </NavbarStart>

          <NavbarEnd className="navbar-end">
            <div className="navbar-item"></div>
          </NavbarEnd>
        </NavbarMenu>
      </StyledNavbar>
    </>
  )
}
