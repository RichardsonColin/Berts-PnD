import styled, { css } from 'styled-components';
// components
import Section from '@/components/ui/Section';
import CallToAction from '@/components/CallToAction';
import { mediaQueries } from '@/src/constants';

const FontStylings = css`
  h2 {
    font-size: 1.625em;
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
const ContainerStylings = css`
  max-width: 1200px;
  margin: 0 auto;

  /* custom breakpoints */
  @media (min-width: 1400px) {
    max-width: 1350px;
  }
`;
export const StyledCallToActionSection = styled(CallToAction)`
  ${ContainerStylings}
  ${FontStylings}
`;
export const StyledAboutSection = styled(Section)`
  ${ContainerStylings}
  ${FontStylings}
`;
export const StyledServicesSection = styled(Section)`
  ${ContainerStylings}
  ${FontStylings}
`;
export const StyledReviewsSection = styled(Section)`
  ${ContainerStylings}
  ${FontStylings}
`;
export const StyledPortfolioSection = styled(Section)`
  ${ContainerStylings}
  ${FontStylings}
`;
