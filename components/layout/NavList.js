import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// hooks
import useCurrentRoute from '@/hooks/useCurrentRoute';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
// styling components
import { StyledHeader as StyledHeaderWrapper } from '@/components/layout/Header';
import { StyledFooter as StyledFooterWrapper } from '@/components/layout/Footer';
// constants
import { siteRoutes, mediaQueries } from '@/src/constants';

NavList.propTypes = {
  showCallToAction: PropTypes.bool,
};

export default function NavList({ showCallToAction = true }) {
  const currentRoute = useCurrentRoute();
  return (
    <StyledNavList mediaQueries={mediaQueries}>
      {siteRoutes.map((route) => (
        <NavListItem key={route}>
          <Link href={route} passHref>
            <StyledLink isCurrentRoute={route === currentRoute}>
              {route === '/' ? 'home' : route.replace('/', '')}
            </StyledLink>
          </Link>
        </NavListItem>
      ))}
      {showCallToAction && (
        <NavListItem>
          <QuoteLinkButton />
        </NavListItem>
      )}
    </StyledNavList>
  );
}

// styles
const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s ease;

  /* Custom underline */
  &::before {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    opacity: 0;
    content: '';
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  ${StyledHeaderWrapper} &::before {
    background-color: var(--primary-light);
  }

  ${StyledFooterWrapper} &::before {
    background-color: var(--secondary-light);
  }

  ${({ isCurrentRoute }) => {
    if (isCurrentRoute) {
      return css`
        ${StyledHeaderWrapper} && {
          color: var(--primary-dark);
        }
        ${StyledFooterWrapper} && {
          color: var(--secondary-light);
        }
        &::before {
          opacity: 1;
        }
      `;
    }
  }}

  &:hover::before {
    opacity: 1;
  }
`;
const NavListItem = styled.li``;
const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  ${StyledHeaderWrapper} & {
    align-items: baseline;
  }

  ${StyledFooterWrapper} & {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      flex-direction: row;
      width: 500px;
    }
  }

  ${StyledHeaderWrapper} & ${NavListItem} {
    margin-left: 2.5rem;
  }

  ${StyledFooterWrapper} & ${NavListItem} {
    margin-bottom: 0.5rem;
  }

  ${StyledHeaderWrapper} & ${NavListItem} ${StyledLink} {
    &:hover {
      color: var(--primary-dark);
    }
  }

  ${StyledFooterWrapper} & ${NavListItem} ${StyledLink} {
    font-size: 1em;
    &:hover {
      color: var(--secondary-light);
    }
  }
`;
