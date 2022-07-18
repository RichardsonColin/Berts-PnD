import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledQuoteSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import Gutter from '@/components/ui/Gutter';
import Heading from '@/components/ui/Heading';

QuoteContent.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default function QuoteContent({ id, heading, title, subtitle }) {
  return (
    <PagesContent heading={heading}>
      <StyledQuoteSection id={id}>
        <Gutter>
          <HeadingWrapper>
            <span>{subtitle}</span>
            <Heading level='2'>{title}</Heading>
          </HeadingWrapper>
          <QuoteRequestForm />
        </Gutter>
      </StyledQuoteSection>
    </PagesContent>
  );
}

// styles
const StyledQuoteSection = styled(StyledSection)`
  text-align: center;
  margin: auto;
`;
