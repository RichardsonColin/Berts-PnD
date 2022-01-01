import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
// constants
import { mediaQueries } from '@/src/constants';

BurgerMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRoute: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function BurgerMenu({ routes, currentRoute, open }) {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} mediaQueries={mediaQueries} aria-hidden={!isHidden}>
      <MenuList>
        {routes.map((route) => (
          <MenuItem key={route} mediaQueries={mediaQueries}>
            <Link href={route} passHref>
              <StyledLink
                isCurrentRoute={route === currentRoute}
                tabIndex={tabIndex}
              >
                {route === '/' ? 'home' : route.replace('/', '')}
              </StyledLink>
            </Link>
          </MenuItem>
        ))}
        <QuoteLinkButton />
      </MenuList>
    </StyledMenu>
  );
}

// styles
const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  padding: 1.5rem;
  background: var(--primary);
  text-align: right;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileS}) {
    font-size: 1.25em;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
    font-size: 1.5em;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    font-size: 2.5em;
  }
  @media (max-width: ${({ mediaQueries }) => mediaQueries.mobileL}) {
    width: 100%;
  }
  /* Landscape on medium devices */
  @media (max-width: ${({ mediaQueries }) =>
      mediaQueries.laptop}) and (max-height: 768px) {
    font-size: 1.5em;
  }
  /* Landscape on small devices */
  @media (max-width: ${({ mediaQueries }) =>
      mediaQueries.tablet}) and (max-height: 500px) {
    font-size: 1em;
  }
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-bottom: 2rem;

  /* Landscape on small devices */
  @media (max-width: ${({ mediaQueries }) =>
      mediaQueries.tablet}) and (max-height: 500px) {
    margin-bottom: 1rem;
  }
`;
const StyledLink = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.3s linear;

  ${({ isCurrentRoute }) =>
    isCurrentRoute
      ? css`
          color: var(--primary-dark);
          padding-left: 10px;
          border-left: 4px solid var(--primary-light);
          border-bottom: 2px solid var(--primary-light);
        `
      : ''}

  &:hover {
    color: var(--primary-dark);
  }
`;
