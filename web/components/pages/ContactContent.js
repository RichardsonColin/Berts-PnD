import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledContactSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import ContactForm from '@/components/ContactForm';
import ContactDetails from '@/components/ContactDetails';
import Gutter from '@/components/ui/Gutter';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/utils/constants';

ContactContent.propTypes = {
  companyData: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function ContactContent({
  companyData,
  id,
  heading,
  title,
  subtitle,
}) {
  return (
    <PagesContent heading={heading}>
      <StyledContactSection id={id}>
        <Gutter>
          <HeadingWrapper>
            <span>{subtitle}</span>
            <Heading level='2'>{title}</Heading>
          </HeadingWrapper>
          <ContentWrapper>
            <StyledContactForm />
            <StyledContactDetails companyData={companyData} />
          </ContentWrapper>
        </Gutter>
      </StyledContactSection>
    </PagesContent>
  );
}

// styles
const StyledContactSection = styled(StyledSection)``;
const ContentWrapper = styled.div`
  ${StyledContactSection} & {
    @media (min-width: ${mediaQueries.laptop}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;
const StyledContactForm = styled(ContactForm)`
  ${StyledContactSection} & {
    margin: 0 auto 5rem;

    @media (min-width: ${mediaQueries.laptop}) {
      flex-grow: 3;
      margin: 0 5rem 0 0;
    }
  }
`;
const StyledContactDetails = styled(ContactDetails)`
  ${StyledContactSection} & {
    max-width: 500px;

    @media (min-width: ${mediaQueries.laptop}) {
      max-width: 400px;
      flex-grow: 2;
      margin: 0;
    }
  }
`;
