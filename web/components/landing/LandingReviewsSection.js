import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledReviewsSection as StyledSection } from './Styled/LandingSection';
import Reviews from '@/components/Reviews';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/Logo';
// constants
import { mediaQueries } from '@/src/constants';

LandingReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingReviewsSection({ reviews }) {
  return (
    <StyledReviewsSection id='reviews'>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <span>What People Say</span>
      <Heading level='2'>Testimonials</Heading>
      <Reviews reviews={reviews} />
      <LinkButton href='/testimonials'>Testimonials</LinkButton>
    </StyledReviewsSection>
  );
}

// styles
const StyledReviewsSection = styled(StyledSection)`
  position: relative;
  margin-bottom: 5rem;
`;
const LogoWrapper = styled.div`
  position: absolute;
  opacity: 0;
  transform: rotate(-20deg);

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    top: -50px;
    left: -50px;
    width: 350px;
    opacity: 0.1;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    left: 50px;
    width: 400px;
  }
  /* custom breakpoint */
  @media (min-width: 1300px) {
    left: -80px;
    width: 500px;
  }
  /* custom breakpoint */
  @media (min-width: 1500px) {
    left: -200px;
  }
`;
