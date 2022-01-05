import styled from 'styled-components';
// components
import Logo from '@/components/Logo';
import NavList from '@/components/layout/NavList';
import BorderSpacer from '@/components/ui/BorderSpacer';
// constants
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE_MAIN,
  COMPANY_ADDRESS_CITY,
  COMPANY_ADDRESS_PROVINCE,
  mediaQueries,
} from '@/src/constants';

export default function Footer() {
  return (
    <StyledFooter id='footer' mediaQueries={mediaQueries}>
      <BorderSpacer size={8} position='top' />
      <LogoWrapper mediaQueries={mediaQueries}>
        <Logo />
      </LogoWrapper>
      <ContentWrapper>
        <ContactPhone href={`tel:${COMPANY_PHONE_MAIN}`}>
          {COMPANY_PHONE_MAIN}
        </ContactPhone>
        <StyledDot aria-hidden='true' />
        <ContactAddress>{`${COMPANY_ADDRESS_CITY}, ${COMPANY_ADDRESS_PROVINCE}`}</ContactAddress>
        <ContactEmail href={`mailto:${COMPANY_PHONE_MAIN}`}>
          {COMPANY_EMAIL}
        </ContactEmail>
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
const ContentWrapper = styled.div`
  margin-top: 3.5rem;
`;
export const StyledFooter = styled.footer`
  position: relative;
  min-height: 350px;
  padding-top: 3rem;
  color: var(--color-grey-50);
  background-color: var(--secondary-dark);

  /* Company info content */
  ${ContentWrapper}:nth-child(3) {
    width: 275px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  /* Copyright content */
  ${ContentWrapper}:last-child {
    text-align: center;
    padding-bottom: 0.5rem;
    font-size: 0.75em;
  }
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: -46px;
  right: 50%;
  transform: translateX(50%);
  width: 230px;
  padding: 1rem;
  background: linear-gradient(to right, var(--primary) 4px, transparent 4px) 0
      100%,
    linear-gradient(to left, var(--primary) 4px, transparent 4px) 0 100%,
    linear-gradient(to top, var(--primary) 4px, transparent 4px) 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 42.5%;
  background-color: var(--color-grey-10);

  @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
    top: -50px;
    width: 250px;
    background-size: 100% 41.5%;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    top: -55px;
    width: 300px;
    background: linear-gradient(to right, var(--primary) 8px, transparent 8px) 0
        100%,
      linear-gradient(to left, var(--primary) 8px, transparent 8px) 0 100%,
      linear-gradient(to top, var(--primary) 8px, transparent 8px) 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 43%;
    background-color: var(--color-grey-10);
  }
`;
const ContactPhone = styled.a``;
const ContactAddress = styled.address`
  display: inline-block;
`;
const ContactEmail = styled.a`
  text-decoration: underline;
`;
const StyledDot = styled.span`
  :after {
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
`;
