import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { OLink } from '@/components/links/OLink/OLink'
import { fonts } from '@/styled-vars'
type NavbarItemProps = {
  className?: string
  to: string
}
const StyledLink = styled(OLink)`
  position: relative;

  flex-grow: 0;
  flex-shrink: 0;

  font-family: ${fonts.newYork.small};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;

  padding: 0 16px;
  color: #000000;

  &:before {
    content: '';

    position: absolute;
    /* padding of navbar + 5px */
    bottom: -45px;
    left: 0;
    width: 0;
    height: 1px;
    background: black;
    transition: width ease-in-out 0.3s;
  }
  &.is-active:before {
    width: 100%;
  }
`

export const NavbarItem: React.FC<NavbarItemProps> = ({
  children,
  to,
  className,
}) => {
  const classes = classNames('navbar-item', className)
  return (
    <StyledLink className={classes} to={to}>
      {children}
    </StyledLink>
  )
}
