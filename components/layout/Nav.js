import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import FocusLock from 'react-focus-lock';
import styled, { css } from 'styled-components';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
import useClickOutside from '@/hooks/useClickOutside';
// components
import Logo from '@/components/Logo';
import NavList from './NavList';
import Burger from '@/components/ui/Burger';
import BurgerMenu from '@/components/ui/BurgerMenu';
// constants
import { siteRoutes, mediaQueries } from '@/src/constants';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const router = useRouter();
  const currentRoute = router.route;
  const breakPointWidth = Number(mediaQueries.laptop.replace('px', ''));
  const isBreakPoint = useMediaQuery(breakPointWidth);

  // close BurgerMenu by clicking outside of node
  useClickOutside(node, () => setOpen(false));
  return (
    <>
      <LogoWrapper mediaQueries={mediaQueries}>
        <Logo />
      </LogoWrapper>
      {isBreakPoint ? (
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} />
            <BurgerMenu
              routes={siteRoutes}
              currentRoute={currentRoute}
              open={open}
              setOpen={setOpen}
            />
          </FocusLock>
        </div>
      ) : (
        <StyledNav>
          <NavList routes={siteRoutes} currentRoute={currentRoute} />
        </StyledNav>
      )}
    </>
  );
}

// styles
// TODO: modify image to have border
const StyledBorder = css`
  padding: 8px 8px 5px 7px;
  background: linear-gradient(to right, var(--primary) 0.2em, transparent 0.2em)
      0 100%,
    linear-gradient(to left, var(--primary) 0.2em, transparent 0.2em) 100% 0,
    100%,
    linear-gradient(to bottom, var(--primary) 0.2em, transparent 0.2em) 100% 0,
    linear-gradient(to top, var(--primary) 0.2em, transparent 0.2em) 0 100%,
    100%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  overflow: hidden;

  @media (min-width: 1024px) {
    background: linear-gradient(
          to right,
          var(--primary) 0.15em,
          transparent 0.15em
        )
        0 100%,
      linear-gradient(to left, var(--primary) 0.2em, transparent 0.2em) 100% 0,
      100%,
      linear-gradient(to bottom, var(--primary) 0.15em, transparent 0.15em) 100%
        0,
      linear-gradient(to top, var(--primary) 0.15em, transparent 0.15em) 0 100%,
      100%;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    overflow: hidden;
  }
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  /* ${StyledBorder} */

  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    justify-content: flex-start;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: inherit;
`;
