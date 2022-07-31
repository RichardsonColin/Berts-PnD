import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  return (
    <StyledHeader id='header'>
      <BorderSpacer size={4} position='bottom' />
      <ContentWrapper>
        <StyledGutter>
          <LogoWrapper>
            <Link href='/' passHref>
              <LogoLink>
                <Logo />
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
  box-shadow: 0px 1px 2px 0px var(--color-grey-700);
  z-index: 10;
  transition: 0.2s ease;

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    height: 50px;
    min-height: 50px;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    height: 90px;
    min-height: 90px;
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
