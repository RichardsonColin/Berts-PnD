// styled
import { keyframes } from 'styled-components';

export const fadeIn = ({ opacityFrom = 0, opacityTo = 1 }) => keyframes`
  from {
    opacity: ${opacityFrom};
  }
  to {
    opacity: ${opacityTo};
  }
`;
