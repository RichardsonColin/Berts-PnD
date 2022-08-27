import { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// components
import NavList from './NavList';
import Burger from '@/components/layout/Burger';
import BurgerMenu from '@/components/layout/BurgerMenu';
// constants
import { mediaQueries } from '@/utils/constants';

export default function Nav() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const isLargeViewport = useMediaQuery(`(min-width: ${mediaQueries.laptop})`);

  if (isLargeViewport && open) {
    setOpen(false);
  }

  return (
    <>
      <MobileNavWrapper ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} />
          <BurgerMenu open={open} setOpen={setOpen} />
        </FocusLock>
      </MobileNavWrapper>
      <StyledNav role='navigation' aria-label='Main'>
        <NavList />
      </StyledNav>
    </>
  );
}

// styles
const MobileNavWrapper = styled.div`
  @media (min-width: ${mediaQueries.laptop}) {
    display: none;
  }
`;
const StyledNav = styled.nav`
  display: none;
  height: inherit;

  @media (min-width: ${mediaQueries.laptop}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: -0.5rem;
  }
`;
