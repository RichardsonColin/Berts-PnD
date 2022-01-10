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

    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      flex-direction: row;
      width: 500px;
    }
  }
`;
const NavListItem = styled.li`
  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} & {
    margin-left: 2.5rem;
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} & {
    margin-bottom: 0.5rem;
  }
`;
const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.2s ease;

  /* Custom underline */
  :before {
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

  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} & {
    :hover {
      color: var(--primary-dark);
    }
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} & {
    font-size: 1em;
    :hover {
      color: var(--primary-light);
    }
  }

  :hover::before {
    opacity: 1;
  }

  /* Header */
  ${StyledHeaderWrapper} ${StyledNavList} &:before {
    background-color: var(--primary-light);
  }

  /* Footer */
  ${StyledFooterWrapper} ${StyledNavList} &:before {
    background-color: var(--secondary-light);
  }

  ${({ isCurrentRoute }) => {
    if (isCurrentRoute) {
      return css`
        /* Footer */
        ${StyledFooterWrapper} ${StyledNavList} && {
          color: var(--color-grey-10);
        }
        &&:before {
          opacity: 1;
        }
      `;
    }
  }}
`;
