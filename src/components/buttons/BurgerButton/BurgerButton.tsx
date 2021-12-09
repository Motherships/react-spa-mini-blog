import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { media } from '@/styled-vars'

const NavbarBurger = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: currentColor;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;

  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;

  ${media.lg} {
    display: none;
  }

  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
`

type BurgerButtonProps = {
  className?: string
  isActive?: boolean
  onClickHandler: () => void
}
export const BurgerButton: React.FC<BurgerButtonProps> = ({
  className = '',
  isActive = false,
  onClickHandler,
}) => {
  const classes = classNames(
    'navbar-burger',
    isActive ? 'is-active' : '',
    className
  )

  return (
    <NavbarBurger
      className={classes}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar"
      onClick={() => {
        onClickHandler()
      }}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </NavbarBurger>
  )
}
