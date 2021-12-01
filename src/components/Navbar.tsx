import classNames from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Paths } from '@/routes'
export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const burgerClass = classNames({
    'navbar-burger': true,
    'is-active': navbarOpen,
  })

  const menuClass = classNames({
    'navbar-menu': true,
    'is-active': navbarOpen,
  })
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Bulma"
            />
          </a>

          <button
            className={burgerClass}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={() => {
              toggleNavbar()
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbar" className={menuClass}>
          <div className="navbar-start">
            <Link className="navbar-item" to={Paths.Index}>
              Home
            </Link>
            <Link className="navbar-item" to={Paths.PostListPage}>
              Blog
            </Link>
            <Link className="navbar-item" to={Paths.PostFormPage}>
              Post form
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
