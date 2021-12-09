import classNames from 'classnames'
import React from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export const OLink: React.FC<LinkProps> = ({
  className,
  children,
  to,
  ...props
}) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link
      className={classNames(className, match ? 'is-active' : '')}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}
