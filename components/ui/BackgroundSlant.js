import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

BackgroundSlant.propTypes = {
  slant: PropTypes.string,
  degree: PropTypes.number,
};

// add position: relative and z-index : 1 on container where this is used.
export default function BackgroundSlant({ slant = 'left', degree = 20 }) {
  return (
    <StyledBackgroundSlant slant={slant} degree={`${parseInt(degree)}deg`} />
  );
}

// styles
const StyledBackgroundSlant = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

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
    transform: ${({ slant, degree }) => {
      let rotate = slant === 'left' ? `-${degree}` : degree;
      return css`
        translate(-50%, -65%) rotate(${rotate})
      `;
    }};
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
      transform: ${({ slant, degree }) => {
        let rotate = slant === 'left' ? `-${degree}` : degree;
        return css`
          translate(-50%, -55%) rotate(${rotate});
        `;
      }};
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      transform: ${({ slant, degree }) => {
        let rotate = slant === 'left' ? `-${degree}` : degree;
        return css`
          translate(-50%, -43%) rotate(${rotate});
        `;
      }};
    }
  }
`;
