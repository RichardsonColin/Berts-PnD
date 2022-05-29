import styled from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

export const PagesHeadingWrapper = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  text-transform: capitalize;

  h2 {
    font-size: 2em;

    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 2.75em;
    }
  }
`;
