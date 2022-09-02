import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledReviewsSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import Reviews from '@/components/Reviews';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/Logo';
// hooks
import useHasMounted from '@/hooks/useHasMounted';
// constants
import { mediaQueries } from '@/utils/constants';

LandingReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingReviewsSection({ reviews }) {
  const hasMounted = useHasMounted();
  return (
    <StyledReviewsSection id='reviews'>
      <LogoWrapper>{hasMounted ? <Logo /> : null}</LogoWrapper>
      <Gutter>
        <span>What People Say</span>
        <Heading level='2'>Testimonials</Heading>
        <Reviews reviews={reviews} />
        <LinkButton href='/testimonials'>Testimonials</LinkButton>
      </Gutter>
    </StyledReviewsSection>
  );
}

// styles
const StyledReviewsSection = styled(StyledSection)`
  position: relative;
  margin-bottom: 5rem;
  text-align: center;
`;
const LogoWrapper = styled.div`
  ${StyledReviewsSection} & {
    position: absolute;
    opacity: 0;
    transform: rotate(-20deg);

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      top: -50px;
      left: 10px;
      width: 350px;
      opacity: 0.1;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      left: 50px;
      width: 400px;
    }
    /* custom breakpoint */
    @media (min-width: 1300px) {
      width: 500px;
    }
  }
`;
