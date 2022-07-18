import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledContactSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import ContactForm from '@/components/ContactForm';
import Gutter from '@/components/ui/Gutter';
import Heading from '@/components/ui/Heading';

ContactContent.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function ContactContent({ id, heading, title, subtitle }) {
  return (
    <PagesContent heading={heading}>
      <StyledContactSection id={id}>
        <Gutter>
          <HeadingWrapper>
            <span>{subtitle}</span>
            <Heading level='2'>{title}</Heading>
          </HeadingWrapper>
          <ContactForm />
        </Gutter>
      </StyledContactSection>
    </PagesContent>
  );
}

// styles
const StyledContactSection = styled(StyledSection)`
  text-align: center;
  margin: auto;
`;
