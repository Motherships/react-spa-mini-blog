import classNames from 'classnames'
import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

import { Section } from '@/components/layout/Section/Section'
import { OLink } from '@/components/links/OLink/OLink'
import { Logo } from '@/components/Logo/Logo'
import { fonts } from '@/styled-vars'

const StyledFooter = styled.footer`
  background: black;
  padding-top: 18px;
  padding-bottom: 36px;

  .marquee-item {
    margin: 0;
    padding: 0 16px;
    font-family: ${fonts.sf.proText};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */

    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #ffffff;

    &.is-even {
      font-weight: 800;
    }
  }

  section {
    max-width: 488px;
    margin: 100px auto 0;
  }
  svg {
    margin: 0 auto 24px;
  }

  .footer__text {
    margin: 0 0 32px 0;
    font-family: ${fonts.newYork.small};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;

    color: #ffffff;
  }

  .social-link-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 28px;

    margin: 0;
    padding: 0;

    &__item {
      list-style: none;
    }

    &__social-link {
      font-family: ${fonts.sf.proText};
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 170%;
      /* or 27px */

      text-decoration: underline;

      color: #ffffff;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .copyright {
    margin-top: 64px;
    font-family: ${fonts.sf.proText};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
    /* or 17px */
    text-align: center;

    color: #ffffff;
  }
`

const marqueeItems = [
  'Digital product design',
  'Remote work',
  'UX design',
  'Distributed teams',
  'Creativity',
  'Strategy',
  'Suspense',
  'Growth',
]
export const Footer: React.FC = () => {
  classNames
  return (
    <StyledFooter>
      <Marquee gradient={false}>
        {marqueeItems.map((item, index) => {
          return (
            <p
              className={classNames(
                'marquee-item',
                index % 2 === 0 ? 'is-odd' : 'is-even'
              )}
              key={item}
            >
              {item}
            </p>
          )
        })}
      </Marquee>

      <Section>
        <OLink to="/">
          <Logo theme="dark" />
        </OLink>
        <p className="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <ul className="social-link-list">
          <li className="social-link-list__item">
            <a className="social-link-list__social-link social-link" href="/">
              Twitter
            </a>
          </li>
          <li className="social-link-list__item">
            <a className="social-link-list__social-link social-link" href="/">
              LinkedIn
            </a>
          </li>
          <li className="social-link-list__item">
            <a className="social-link-list__social-link social-link" href="/">
              RSS
            </a>
          </li>
        </ul>
        <p className="copyright">
          © 2012–2020 Nordic Rose Co. <br />
          All rights reserved.
        </p>
      </Section>
    </StyledFooter>
  )
}
