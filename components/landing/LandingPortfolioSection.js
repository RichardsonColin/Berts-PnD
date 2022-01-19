import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledPortfolioSection as StyledSection } from './Styled/LandingSection';
import PortfolioImages from './PortfolioImages';
import Heading from '@/components/ui/Heading';
import Container from '@/components/ui/Container';
// constants
import { mediaQueries } from '@/src/constants';

LandingPortfolioSection.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingPortfolioSection({ portfolio }) {
  return (
    <StyledPortfolioSection id='process'>
      <span>Take A Look At Our Work</span>
      <StyledHeading level='2'>Our Portfolio</StyledHeading>
      <StyledContainer>
        <PortfolioImages portfolio={portfolio} />
      </StyledContainer>
    </StyledPortfolioSection>
  );
}

// styles
const StyledPortfolioSection = styled(StyledSection)`
  && {
    position: relative;
    max-width: 100%;
    z-index: 1;
  }

  /* slanted background */
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 1000px;
    height: 240px;
    background-color: var(--secondary-light);
    opacity: 1;
    z-index: -1;
    transform: translate(-50%, -65%) rotate(-20deg);
    transform-origin: center;

    /* min-widths */
    /* custom breakpoint */
    @media (min-width: 600px) {
      width: 3000px;
      height: 418px;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      height: 520px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      height: 785px;
      transform: translate(-50%, -55%) rotate(-20deg);
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      transform: translate(-50%, -43%) rotate(-20deg);
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledPortfolioSection} & {
    margin-bottom: 7.75rem;
  }
`;
const StyledContainer = styled(Container)`
  ${StyledPortfolioSection} & {
    width: 100%;
    padding: 0;
    text-align: center;
    transform: translateY(-82px);

    /* min-widths */
    @media (min-width: ${mediaQueries.laptop}) {
      max-width: 1100px;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      max-width: 1480px;
      margin: 22.5rem auto 7rem;
    }
  }
`;
