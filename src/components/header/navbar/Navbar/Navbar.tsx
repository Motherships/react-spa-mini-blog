import classNames from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'

import { BurgerButton } from '@/components/buttons/BurgerButton/BurgerButton'
import { Logo } from '@/components/header/Logo/Logo'
import { NavbarItem } from '@/components/header/navbar/NavbarItem/NavbarItem'
import { OLink } from '@/components/links/OLink/OLink'
import { Paths } from '@/routes'
import { media } from '@/styled-vars'

const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 30px 0;
`

const NavbarBrand = styled.div`
  display: flex;
`

const NavbarMenu = styled.div`
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
          <OLink className="navbar-item" to={Paths.Index}>
            <Logo />
          </OLink>

          <BurgerButton
            className={navbarOpen ? 'is-active' : ''}
            onClickHandler={toggleNavbar}
          />
        </NavbarBrand>

        <NavbarMenu
          id="navbar"
          className={classNames({
            'navbar-menu': true,
            'is-active': navbarOpen,
          })}
        >
          <div className="navbar-start">
            <NavbarItem to={Paths.Index}>Home</NavbarItem>
            <NavbarItem to={Paths.PostListPage}>Blog</NavbarItem>
            <NavbarItem to={Paths.PostFormPage}>Post form</NavbarItem>
          </div>

          <div className="navbar-end">
            <div className="navbar-item"></div>
          </div>
        </NavbarMenu>
      </StyledNavbar>
    </>
  )
}
