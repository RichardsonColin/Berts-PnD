import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PagesContent from './PagesContent';
import { StyledQuoteSection as StyledSection } from './styled/PagesSection';
import { PagesHeadingWrapper as HeadingWrapper } from './styled/PagesHeading';
import QuoteRequestForm from '@/components/QuoteRequestForm';
import Gutter from '@/components/ui/Gutter';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/utils/constants';

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
          <ContentWrapper>
            <StyledQuoteRequestForm />
          </ContentWrapper>
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
const ContentWrapper = styled.div`
  ${StyledQuoteSection} & {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    background-color: var(--secondary);
    z-index: 0;

    &:before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: -10px;
      width: 150px;
      height: 150px;
      background-color: var(--primary);
      box-shadow: 0 0 2px #000;
      z-index: -1;
    }
    &:after {
      content: '';
      position: absolute;
      top: -10px;
      right: -10px;
      width: 150px;
      height: 150px;
      background-color: var(--primary);
      box-shadow: 0 0 2px #000;
      z-index: -1;
    }

    @media (min-width: ${mediaQueries.laptop}) {
      &:before {
        bottom: -20px;
        left: -20px;
      }
      &:after {
        top: -20px;
        right: -20px;
      }
    }
  }
`;
const StyledQuoteRequestForm = styled(QuoteRequestForm)`
  ${StyledQuoteSection} & {
    z-index: 1;
  }
`;
