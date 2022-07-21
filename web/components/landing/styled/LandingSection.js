import styled, { css } from 'styled-components';
// components
import Section from '@/components/ui/Section';
import { mediaQueries } from '@/src/constants';

// styles
const SectionWrapper = css`
  width: 100%;
`;
const SectionCentered = css`
  margin: auto;
  text-align: center;

  h2 {
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${mediaQueries.laptop}) {
      max-width: 700px;
    }
  }
  p {
    @media (min-width: ${mediaQueries.laptop}) {
      max-width: 625px;
      margin: auto;
    }
  }
`;
const SectionSplit = css`
  position: relative;
`;
const FontStylings = css`
  h2 {
    font-size: 2em;

    @media (min-width: ${mediaQueries.tablet}) {
      margin-bottom: 3.125rem;
      font-size: 2.75em;
    }
  }
  h3 {
    color: var(--secondary);
  }
  p {
    font-size: 1em;
  }
  span {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
    color: var(--secondary-light);

    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 1.125em;
    }
  }
`;
export const StyledServicesSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}

  ${SectionCentered}
`;
export const StyledProductsSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}

  ${SectionSplit}
`;
export const StyledExperienceSection = styled(Section)`
  ${FontStylings}
`;
export const StyledRenovationsSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}

  ${SectionSplit}
`;
export const StyledProcessSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}

  ${SectionCentered}
`;
export const StyledPortfolioSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}

  ${SectionCentered}
`;
export const StyledReviewsSection = styled(Section)`
  ${SectionWrapper}

  ${FontStylings}
`;
