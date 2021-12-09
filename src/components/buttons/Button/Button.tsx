import classNames from 'classnames'
import React from 'react'

type ButtonProps = {
  className?: string
}
export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  const classes = classNames('button', className)
  return <button className={classes}>{children}</button>
}
