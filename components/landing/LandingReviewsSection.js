import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledReviewsSection as StyledSection } from './Styled/LandingSection';
import Reviews from './reviews';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';

LandingReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingReviewsSection({ reviews }) {
  return (
    <StyledReviewsSection id='reviews'>
      <span>What People Say</span>
      <Heading level='2'>Testimonials</Heading>
      <Reviews reviews={reviews} />
      <LinkButton href='/testimonials'>Testimonials</LinkButton>
    </StyledReviewsSection>
  );
}

// styles
const StyledReviewsSection = styled(StyledSection)`
  margin-bottom: 5rem;
`;
