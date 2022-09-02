import styled from 'styled-components';
// hooks
import useCurrentRoute from '@/hooks/useCurrentRoute';
// components
import LogoCenter from '@/components/LogoCenter';
import NavList from '@/components/layout/NavList';
import BorderSpacer from '@/components/ui/BorderSpacer';
// constants
import {
  COMPANY_NAME,
  COMPANY_PHONE_MAIN,
  COMPANY_ADDRESS_CITY,
  COMPANY_ADDRESS_PROVINCE,
  mediaQueries,
} from '@/utils/constants';

export default function Footer() {
  const route = useCurrentRoute();
  const isLanding = route === '/';
  return (
    <StyledFooter id='footer'>
      <BorderSpacer size={8} position='top' />
      <BorderCutout aria-hidden='true' />
      <LogoWrapper isLanding={isLanding}>
        <LogoCenter />
      </LogoWrapper>
      <ContentWrapper>
        <ContactPhone href={`tel:${COMPANY_PHONE_MAIN}`}>
          {COMPANY_PHONE_MAIN}
        </ContactPhone>
        <StyledDot aria-hidden='true' />
        <ContactAddress>{`${COMPANY_ADDRESS_CITY}, ${COMPANY_ADDRESS_PROVINCE}`}</ContactAddress>
      </ContentWrapper>
      <ContentWrapper>
        <nav aria-label='Main'>
          <NavList showCallToAction={false} />
        </nav>
      </ContentWrapper>
      <ContentWrapper>
        &copy; {new Date().getFullYear()} - {COMPANY_NAME}
      </ContentWrapper>
    </StyledFooter>
  );
}

// styles
export const StyledFooter = styled.footer`
  position: relative;
  min-height: 300px;
  padding-top: 3rem;
  color: var(--color-grey-50);
  background-color: var(--secondary-dark);
`;
const ContentWrapper = styled.div`
  ${StyledFooter} & {
    margin-top: 3.5rem;

    /* Company info content */
    :nth-child(4) {
      width: 275px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    /* Copyright content */
    :last-child {
      text-align: center;
      padding-bottom: 0.5rem;
      font-size: 0.75em;
    }
  }
`;
const ContactPhone = styled.a``;
const ContactAddress = styled.address`
  ${StyledFooter} & {
    display: inline-block;
  }
`;
const BorderCutout = styled.div`
  ${StyledFooter} & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 230px;
    margin: auto;
    padding: 1rem;
    background: linear-gradient(to right, var(--primary) 4px, transparent 4px) 0
        100%,
      linear-gradient(to left, var(--primary) 4px, transparent 4px) 0 100%,
      linear-gradient(to top, var(--primary) 4px, transparent 4px) 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 34px;
    background-color: var(--color-grey-10);

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      width: 250px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      width: 300px;
      background: linear-gradient(to right, var(--primary) 8px, transparent 8px)
          0 100%,
        linear-gradient(to left, var(--primary) 8px, transparent 8px) 0 100%,
        linear-gradient(to top, var(--primary) 8px, transparent 8px) 0 100%;
      background-size: 100% 41px;
      background-color: var(--color-grey-10);
    }
  }
`;
const LogoWrapper = styled.div`
  ${StyledFooter} & {
    position: absolute;
    top: -26px;
    right: 50%;
    transform: translateX(50%);
    width: 210px;
    background-color: var(--color-grey-10);

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      top: -31px;
      width: 230px;
      background-size: 100% 41px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      top: -45px;
      width: 272px;
    }
  }
`;
const StyledDot = styled.span`
  ${StyledFooter} & {
    &:after {
      content: '';
      position: relative;
      display: inline-block;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background: var(--primary);
      vertical-align: middle;
      margin: 0 8px;
    }
  }
`;
