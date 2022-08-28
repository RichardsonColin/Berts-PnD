import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// hooks
import useScrollPosition from '@/hooks/useScrollPosition';
// components
import Section from '@/components/ui/Section';
import Gutter from '@/components/ui/Gutter';
import Logo from '@/components/Logo';
import BorderSpacer from '@/components/ui/BorderSpacer';
// constants
import { mediaQueries } from '@/utils/constants';

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Header({ children }) {
  const [sticky, setSticky] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky],
    null,
    false,
    sticky ? 500 : 200
  );

  return (
    <StyledHeader id='header' sticky={sticky}>
      <BorderSpacer size={2} position='bottom' />
      <ContentWrapper>
        <StyledGutter>
          <LogoWrapper>
            <Link href='/' passHref prefetch={false}>
              <LogoLink>
                <Logo priority={true} />
              </LogoLink>
            </Link>
          </LogoWrapper>
          {children}
        </StyledGutter>
      </ContentWrapper>
    </StyledHeader>
  );
}

// styles
export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 42px;
  min-height: 42px;
  background-color: #fff;
  color: var(--color-grey-800);
  z-index: 100;
  transition: 0.2s ease;
  ${({ sticky }) => {
    return sticky
      ? css`
          transform: translateY(0px);
        `
      : css`
          transform: translateY(-80px);
        `;
  }};

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    height: 50px;
    min-height: 50px;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    height: 70px;
    min-height: 70px;
  }
`;
const StyledGutter = styled(Gutter)`
  ${StyledHeader} & {
    display: flex;
    justify-content: space-between;
    height: inherit;
  }
`;
const ContentWrapper = styled(Section)`
  ${StyledHeader} & {
    height: inherit;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const LogoWrapper = styled.div`
  ${StyledHeader} & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 100%;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      width: 150px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      width: 200px;
      justify-content: flex-start;
    }
  }
`;
const LogoLink = styled.a`
  ${StyledHeader} & {
    line-height: 0;
  }
`;
