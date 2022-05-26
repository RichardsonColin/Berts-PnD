import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledPortfolioSection as StyledSection } from './Styled/LandingSection';
import PortfolioImages from './PortfolioImages';
import Heading from '@/components/ui/Heading';
import Container from '@/components/ui/Container';
import BackgroundSlant from '@/components/ui/BackgroundSlant';
// constants
import { mediaQueries } from '@/src/constants';

LandingPortfolioSection.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function LandingPortfolioSection({ portfolio, companyData }) {
  const { companyName } = companyData;
  return (
    <StyledPortfolioSection id='portfolio'>
      <BackgroundSlant slant='left' />
      <span>Take A Look At Our Work</span>
      <StyledHeading level='2'>Our Portfolio</StyledHeading>
      <StyledContainer>
        <PortfolioImages
          portfolioImages={portfolio}
          altText={`${companyName} portfolio work`}
        />
      </StyledContainer>
    </StyledPortfolioSection>
  );
}

// styles
const StyledPortfolioSection = styled(StyledSection)`
  && {
    position: relative;
    max-width: 100%;
    height: 700px;
    z-index: 1;

    /* min-widths */
    /* staggered heights as images within adjust based on % and affect Footer logo linear-gradient background */
    @media (min-width: ${mediaQueries.mobileS}) {
      height: 725px;
    }
    @media (min-width: ${mediaQueries.mobileM}) {
      height: 800px;
    }
    @media (min-width: ${mediaQueries.mobileL}) {
      height: 850px;
    }
    @media (min-width: 500px) {
      height: 925px;
    }
    @media (min-width: 550px) {
      height: 975px;
    }
    @media (min-width: 600px) {
      height: 1050px;
    }
    @media (min-width: 650px) {
      height: 1100px;
    }
    @media (min-width: 700px) {
      height: 1150px;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      height: 1350px;
      padding-top: 6.5rem;
    }
    /* custom breakpoints */
    @media (min-width: 850px) {
      height: 1425px;
    }
    @media (min-width: 900px) {
      height: 1475px;
    }
    @media (min-width: 950px) {
      height: 1575px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      height: 1625px;
      padding-top: 9rem;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      height: 1525px;
      padding-top: 16rem;
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
