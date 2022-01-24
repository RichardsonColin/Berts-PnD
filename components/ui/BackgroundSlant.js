import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

BackgroundSlant.propTypes = {
  slant: PropTypes.string,
  degree: PropTypes.number,
  isStandardHeight: PropTypes.bool,
};

// add position: relative and z-index : 1 on container where this is used.
export default function BackgroundSlant({
  slant = 'left',
  degree = 20,
  isStandardHeight = true,
}) {
  const heightMultiple = isStandardHeight ? 1 : 0.8;
  return (
    <StyledBackgroundSlant
      slant={slant}
      degree={`${parseInt(degree)}deg`}
      heightMultiple={heightMultiple}
    />
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
    height: 350px;
    background-color: var(--secondary-light);
    opacity: 1;
    z-index: -1;
    transform: ${({ slant, degree }) => {
      let rotate = slant === 'left' ? `-${degree}` : degree;
      return css`
        translate(-50%, -55%) rotate(${rotate})
      `;
    }};
    transform-origin: center;

    /* min-widths */
    /* custom breakpoint */
    @media (min-width: 600px) {
      width: 3000px;
      height: ${({ heightMultiple }) =>
        `${parseInt(Math.ceil(heightMultiple * 418))}px`};
    }
    @media (min-width: ${mediaQueries.tablet}) {
      height: ${({ heightMultiple }) =>
        `${parseInt(Math.ceil(heightMultiple * 520))}px`};
    }
    @media (min-width: ${mediaQueries.laptop}) {
      height: ${({ heightMultiple }) =>
        `${parseInt(Math.ceil(heightMultiple * 768))}px`};
      transform: ${({ slant, degree }) => {
        let rotate = slant === 'left' ? `-${degree}` : degree;
        return css`
          translate(-50%, -48%) rotate(${rotate});
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
