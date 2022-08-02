import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMobile,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
// constants
import { COMPANY_EMAIL } from '@/utils/constants';
import { mediaQueries } from '@/utils/constants';

ContactDetails.propTypes = {
  companyData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default function ContactDetails({ companyData, className }) {
  const {
    companyPhoneMain,
    companyPhoneCell,
    companyAddressStreet,
    companyAddressCity,
    companyAddressProvince,
    companyAddressPostal,
  } = companyData;
  return (
    <StyledContainer className={className}>
      <StyledHeading level='2'>Connect With Us</StyledHeading>
      <StyledDetails>
        <StyledLink href={`tel:+1${companyPhoneMain?.replaceAll('-', '')}`}>
          <FontAwesomeWrapper aria-hidden='true'>
            <StyledFontAwesomeIcon icon={faPhone} />
          </FontAwesomeWrapper>
          {companyPhoneMain}
        </StyledLink>
      </StyledDetails>
      <StyledDetails>
        <StyledLink href={`tel:+1${companyPhoneCell?.replaceAll('-', '')}`}>
          <FontAwesomeWrapper aria-hidden='true'>
            <StyledFontAwesomeIcon icon={faMobile} />
          </FontAwesomeWrapper>
          {companyPhoneCell}
        </StyledLink>
      </StyledDetails>
      <StyledDetails>
        <StyledLink href={`mailto:${COMPANY_EMAIL}`}>
          <FontAwesomeWrapper aria-hidden='true'>
            <StyledFontAwesomeIcon icon={faEnvelope} />
          </FontAwesomeWrapper>
          {COMPANY_EMAIL}
        </StyledLink>
      </StyledDetails>
      <StyledDetails>
        <StyledText>
          <FontAwesomeWrapper aria-hidden='true'>
            <StyledFontAwesomeIcon icon={faLocationDot} />
          </FontAwesomeWrapper>
          {companyAddressStreet}
        </StyledText>
        <br />
        <StyledText>
          <FontAwesomeWrapper aria-hidden='true'></FontAwesomeWrapper>
          {companyAddressCity}, {companyAddressProvince}
        </StyledText>
        <br />
        <StyledText>
          <FontAwesomeWrapper aria-hidden='true'></FontAwesomeWrapper>
          {companyAddressPostal}
        </StyledText>
      </StyledDetails>
    </StyledContainer>
  );
}

// styles
const StyledContainer = styled(Container)`
  position: relative;
  max-width: 250px;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
  color: var(--color-grey-10);

  @media (min-width: ${mediaQueries.laptop}) {
    padding-top: 1.5rem;
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledContainer} & {
    text-align: center;
  }
`;
const StyledDetails = styled.p`
  ${StyledContainer} & {
    position: relative;
    margin: 0.3rem 0 1rem 0;
    padding-left: 0.9rem;
    font-size: 0.9em;
    font-weight: 400;

    &:last-of-type {
      margin-bottom: 0;
    }

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 1em;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      margin-bottom: 2rem;
    }
  }
`;
const FontAwesomeWrapper = styled.span`
  ${StyledContainer} & {
    display: inline-block;
    position: relative;
    width: 30px;
    margin: 0 0.5rem 0 -0.15rem;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${StyledContainer} & {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary);
    font-size: 1.3em;
  }
`;
const StyledLink = styled.a`
  ${StyledContainer} & {
    position: relative;
  }
`;
const StyledText = styled.span`
  ${StyledContainer} & {
    position: relative;
  }
`;
