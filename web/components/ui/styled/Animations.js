// style
import { keyframes } from 'styled-components';

export const fadeIn = (begin = '0', end = '1') => keyframes`
  from {
    opacity: ${begin};
  }
  to {
    opacity: ${end};
  }
`;
