import styled from 'styled-components';
// constants
import { mediaQueries } from '@/utils/constants';

export const PagesHeadingWrapper = styled.div`
  && {
    margin-bottom: 5rem;
    text-align: center;
    text-transform: capitalize;

    span {
      margin: 0;
      font-size: 1em;
      font-weight: 700;
      color: var(--secondary-light);

      @media (min-width: ${mediaQueries.tablet}) {
        font-size: 1.125em;
      }
    }
    h2 {
      font-size: 2em;

      @media (min-width: ${mediaQueries.tablet}) {
        font-size: 2.5em;
      }
    }
  }
`;
