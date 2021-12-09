import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

const StyledColumn = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  &.is-1 {
    flex: none;
    width: 8.33333%;
  }

  &.is-offset-1 {
    margin-left: 8.33333%;
  }

  &.is-2 {
    flex: none;
    width: 16.66667%;
  }

  &.is-offset-2 {
    margin-left: 16.66667%;
  }

  &.is-3 {
    flex: none;
    width: 25%;
  }

  &.is-offset-3 {
    margin-left: 25%;
  }

  &.is-4 {
    flex: none;
    width: 33.33333%;
  }

  &.is-offset-4 {
    margin-left: 33.33333%;
  }

  &.is-5 {
    flex: none;
    width: 41.66667%;
  }

  &.is-offset-5 {
    margin-left: 41.66667%;
  }

  &.is-6 {
    flex: none;
    width: 50%;
  }

  &.is-offset-6 {
    margin-left: 50%;
  }

  &.is-7 {
    flex: none;
    width: 58.33333%;
  }

  &.is-offset-7 {
    margin-left: 58.33333%;
  }

  &.is-8 {
    flex: none;
    width: 66.66667%;
  }

  &.is-offset-8 {
    margin-left: 66.66667%;
  }

  &.is-9 {
    flex: none;
    width: 75%;
  }

  &.is-offset-9 {
    margin-left: 75%;
  }

  &.is-10 {
    flex: none;
    width: 83.33333%;
  }

  &.is-offset-10 {
    margin-left: 83.33333%;
  }

  &.is-11 {
    flex: none;
    width: 91.66667%;
  }

  &.is-offset-11 {
    margin-left: 91.66667%;
  }

  &.is-12 {
    flex: none;
    width: 100%;
  }

  &.is-offset-12 {
    margin-left: 100%;
  }
`
type ColumnProps = {
  className?: string
}
export const Column: React.FC<ColumnProps> = ({ children, className }) => {
  const classes = classNames('column', className)
  return <StyledColumn className={classes}>{children}</StyledColumn>
}
