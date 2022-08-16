import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// styling components
import { StyledHeader as StyledHeaderWrapper } from '@/components/layout/Header';
import { StyledFooter as StyledFooterWrapper } from '@/components/layout/Footer';
// constants
import { siteRoutes, mediaQueries } from '@/utils/constants';

NavList.propTypes = {};

export default function NavList() {
  return (
    <StyledNavList>
      {siteRoutes.map((route) => (
        <NavListItem key={route}>
          <Link href={route} passHref>
            <StyledLink>
              {route === '/' ? 'home' : route.replace('/', '')}
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
    margin-left: 1.75rem;
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} & {
    margin-bottom: 0.5rem;
  }
`;
const StyledLink = styled.a`
  position: relative;
  padding: 0.2rem 0.3rem;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.2s ease;

  /* Custom underline */
  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 50%;
    height: 100%;
    opacity: 0;
    content: '';
    cursor: pointer;
    transition: opacity 0.2s ease;
    z-index: -1;
  }
  &:after {
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 50%;
    height: 100%;
    opacity: 0;
    content: '';
    cursor: pointer;
    transition: opacity 0.2s ease;
    z-index: -1;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} & {
    background-color: #fff;
    &:hover {
      color: var(--secondary);
    }
  }

  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} &:before,
  ${StyledHeaderWrapper} ${StyledNavList} &:after {
    background-color: var(--secondary-light);
  }
`;
