import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Logo from '@/components/Logo';
import BorderSpacer from '@/components/ui/BorderSpacer';
// constants
import { mediaQueries } from '@/src/constants';

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Header({ children }) {
  return (
    <StyledHeader id='header' mediaQueries={mediaQueries}>
      <BorderSpacer size={4} position='bottom' />
      <ContentWrapper mediaQueries={mediaQueries}>
        <LogoWrapper mediaQueries={mediaQueries}>
          <Link href='/' passHref>
            <LogoLink>
              <Logo />
            </LogoLink>
          </Link>
        </LogoWrapper>
        {children}
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
  box-shadow: 0px 1px 2px 0px var(--color-grey-700);
  z-index: 10;
  transition: 0.2s ease;

  /* min-widths */
  @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
    height: 50px;
    min-height: 50px;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    height: 90px;
    min-height: 90px;
  }
`;
const ContentWrapper = styled.div`
  ${StyledHeader} & {
    position: relative;
    height: inherit;
    margin: 0 auto;

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
      max-width: 1350px;
    }
    /* custom max-width for edge space */
    @media (max-width: 1400px) {
      padding-right: 1rem;
    }
  }
`;
const LogoWrapper = styled.div`
  ${StyledHeader} & {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 100%;

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      width: 150px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
      width: 200px;
      justify-content: flex-start;
    }
    /* custom max-width for edge space */
    @media (max-width: 1400px) {
      padding-left: 1rem;
    }
  }
`;
const LogoLink = styled.a`
  ${StyledHeader} & {
    line-height: 0;
  }
`;
