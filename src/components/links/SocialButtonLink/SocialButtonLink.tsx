import React from 'react'
import type { LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { OLink } from '@/components/links/OLink/OLink'

const StyledSocialButtonLink = styled(OLink)``
export const SocialButtonLink: React.FC<LinkProps> = ({
  children,
  ...props
}) => {
  return <StyledSocialButtonLink {...props}>{children}</StyledSocialButtonLink>
}
