import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';

NavList.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default function NavList({ routes, currentRoute }) {
  return (
    <List>
      {routes.map((route) => (
        <ListItem key={route}>
          <Link href={route} passHref>
            <StyledLink isCurrentRoute={route === currentRoute}>
              {route === '/' ? 'home' : route.replace('/', '')}
            </StyledLink>
          </Link>
        </ListItem>
      ))}
      <ListItem>
        <QuoteLinkButton />
      </ListItem>
    </List>
  );
}

// styles
const List = styled.ul`
  display: flex;
  align-items: baseline;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-left: 3rem;
`;
const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 300;
  text-transform: capitalize;

  &:hover,
  &:active {
    color: var(--primary-dark);
    cursor: pointer;
  }

  &::before {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary);
    opacity: 0;
    content: '';
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  ${({ isCurrentRoute }) =>
    isCurrentRoute
      ? css`
          color: var(--primary-dark);
          &::before {
            opacity: 1;
          }
        `
      : ''}

  &:hover::before {
    opacity: 1;
  }
`;
