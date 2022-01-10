// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import Section from '@/components/ui/Section';

// styles
const SectionWrapper = css`
  width: 100%;
  max-width: 450px;
  margin: auto;

  /* min-widths */
  @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
    max-width: 700px;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    max-width: 1200px;
  }
`;
const SectionCentered = css`
  text-align: center;

  h2 {
    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      max-width: 670px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  p {
    @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
      max-width: 625px;
      margin: auto;
    }
  }
`;
const SectionSplit = css`
  position: relative;

  /* custom breakpoints */
  @media (min-width: 1300px) {
    max-width: 1020px;
  }
  @media (min-width: 1500px) {
    max-width: 1350px;
  }
`;
const FontStylings = css`
  h2 {
    font-size: 2em;

    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      margin-bottom: 3.125rem;
      font-size: 2.75em;
    }
  }
  span {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
    color: var(--secondary-light);

    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      font-size: 1.125em;
    }
  }
  p {
    font-size: 1em;
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
