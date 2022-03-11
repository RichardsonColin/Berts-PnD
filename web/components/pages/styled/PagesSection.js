import styled, { css } from 'styled-components';
// components
import Section from '@/components/ui/Section';
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
export const StyledAboutSection = styled(Section)`
  ${FontStylings}
`;
export const StyledServicesSection = styled(Section)`
  ${FontStylings}
`;
export const StyledReviewsSection = styled(Section)`
  ${FontStylings}
`;
