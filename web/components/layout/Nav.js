import { useState, useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
import useClickOutside from '@/hooks/useClickOutside';
// components
import NavList from './NavList';
import Burger from '@/components/layout/Burger';
import BurgerMenu from '@/components/layout/BurgerMenu';

export default function Nav() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();
  const isBreakPoint = useMediaQuery('laptop');

  // ensure DOM is ready before setting a nav to display
  useEffect(() => {
    setLoaded(true);
  }, []);

  // close BurgerMenu by clicking outside of node
  useClickOutside(node, () => setOpen(false));
  return (
    <>
      {isBreakPoint ? (
        <MobileNavWrapper ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
          </FocusLock>
        </MobileNavWrapper>
      ) : (
        <StyledNav loaded={loaded} role='navigation' aria-label='Main'>
          <NavList />
        </StyledNav>
      )}
    </>
  );
}

// styles
const MobileNavWrapper = styled.div``;
const StyledNav = styled.nav`
  display: ${({ loaded }) => (loaded ? 'flex' : 'none')};
  justify-content: flex-end;
  align-items: center;
  height: inherit;
`;
