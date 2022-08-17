import { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
import useHasMounted from '@/hooks/useHasMounted';
// components
import NavList from './NavList';
import Burger from '@/components/layout/Burger';
import BurgerMenu from '@/components/layout/BurgerMenu';
// constants
import { mediaQueries } from '@/utils/constants';

export default function Nav() {
  const hasMounted = useHasMounted();
  const node = useRef();
  const [open, setOpen] = useState(false);
  const isLargeViewport = useMediaQuery(`(min-width: ${mediaQueries.laptop})`);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {!isLargeViewport ? (
        <MobileNavWrapper ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
          </FocusLock>
        </MobileNavWrapper>
      ) : (
        <StyledNav role='navigation' aria-label='Main'>
          <NavList />
        </StyledNav>
      )}
    </>
  );
}

// styles
const MobileNavWrapper = styled.div``;
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: inherit;
`;
