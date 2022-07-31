import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// hooks
import useCurrentRoute from '@/hooks/useCurrentRoute';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
// constants
import { siteRoutes, mediaQueries } from '@/utils/constants';

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default function BurgerMenu({ open, setOpen }) {
  const currentRoute = useCurrentRoute();
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledBurgerMenu aria-label='Main' aria-hidden={!isHidden} open={open}>
      <MenuList>
        {siteRoutes.map((route) => (
          <MenuItem key={route}>
            <Link href={route} passHref>
              <StyledLink
                isCurrentRoute={route === currentRoute}
                tabIndex={tabIndex}
                onClick={() => setOpen(!open)}
              >
                {route === '/' ? 'home' : route.replace('/', '')}
              </StyledLink>
            </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={() => setOpen(!open)}>
          <QuoteLinkButton />
        </MenuItem>
      </MenuList>
    </StyledBurgerMenu>
  );
}

// styles
const StyledBurgerMenu = styled.nav`
  position: absolute;
  top: 42px;
  right: -1px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 50%;
  min-height: 100vh;
  padding: 1.5rem 1rem;
  background-color: var(--primary);
  text-align: right;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  /* min-widths */
  @media (min-width: ${mediaQueries.mobileS}) {
    font-size: 1em;
  }
  @media (min-width: ${mediaQueries.mobileL}) {
    font-size: 1.25em;
  }
  @media (min-width: ${mediaQueries.tablet}) {
    top: 50px;
    min-width: 33%;
    font-size: 1.25em;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    font-size: 2em;
  }
  /* max-widths */
  /* Landscape on smaller devices up to tablets */
  @media (max-width: ${mediaQueries.tablet}) and (max-height: 400px) {
    font-size: 1em;
  }
`;
const MenuList = styled.ul`
  ${StyledBurgerMenu} & {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
const MenuItem = styled.li`
  ${StyledBurgerMenu} & {
    margin: 1rem 0;

    /* Landscape on devices up to laptops */
    @media (max-width: ${mediaQueries.laptop}) and (max-height: 500px) {
      margin-bottom: 0.55rem 0;
    }
  }
`;
const StyledLink = styled.a`
  ${StyledBurgerMenu} && {
    text-transform: capitalize;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: var(--secondary);
    text-decoration: none;
    transition: 0.2s linear;

    ${({ isCurrentRoute }) =>
      isCurrentRoute
        ? css`
            color: var(--color-grey-50);
            padding-left: 10px;
            border-left: 4px solid var(--primary-light);
            border-bottom: 2px solid var(--primary-light);
          `
        : ''}

    &:hover {
      color: var(--color-grey-50);
    }
  }
`;
