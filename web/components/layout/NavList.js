import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// hooks
import useCurrentRoute from '@/hooks/useCurrentRoute';
// styling components
import { StyledHeader as StyledHeaderWrapper } from '@/components/layout/Header';
import { StyledFooter as StyledFooterWrapper } from '@/components/layout/Footer';
// constants
import { siteRoutes, mediaQueries } from '@/utils/constants';

NavList.propTypes = {};

export default function NavList() {
  const currentRoute = useCurrentRoute();
  return (
    <StyledNavList>
      {siteRoutes.map((route) => (
        <NavListItem key={route}>
          <Link href={route} passHref prefetch={false}>
            <StyledLink isCurrentRoute={route === currentRoute}>
              <LinkText>
                {route === '/' ? 'home' : route.replace('/', '')}
              </LinkText>
            </StyledLink>
          </Link>
        </NavListItem>
      ))}
    </StyledNavList>
  );
}

// styles
const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  /* Header */
  ${StyledHeaderWrapper} & {
    align-items: baseline;
  }

  /* Footer */
  ${StyledFooterWrapper} & {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
      width: 500px;
    }
  }
`;
const NavListItem = styled.li`
  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} & {
    margin-left: 2rem;
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} & {
    margin-bottom: 0.5rem;
  }
`;
const LinkText = styled.span`
  vertical-align: text-bottom;
  line-height: 15px;
`;
const StyledLink = styled.a`
  position: relative;
  padding: 0.4rem 0.5rem;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.2s ease;

  /* Custom border */
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 50%;
    height: 100%;
    border-top: 1px solid var(--secondary-light);
    border-left: 1px solid var(--secondary-light);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    width: 50%;
    height: 100%;
    border-bottom: 1px solid var(--secondary-light);
    border-right: 1px solid var(--secondary-light);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} & {
    &:hover {
      color: var(--secondary);
    }
    &:hover::before,
    &:hover::after {
      opacity: 1;
    }
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} & {
    &:hover {
      color: var(--primary-light);
    }
  }

  ${({ isCurrentRoute }) => {
    if (isCurrentRoute) {
      return css`
        /* Header */
        ${StyledHeaderWrapper} ${StyledNavList} && {
          color: var(--secondary);
        }
        ${StyledHeaderWrapper} ${StyledNavList} &&:before,
        ${StyledHeaderWrapper} ${StyledNavList} &&:after {
          opacity: 1;
        }

        /* Footer */
        ${StyledFooterWrapper} ${StyledNavList} && {
          color: var(--primary-light);
        }
      `;
    }
  }}
`;
