import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

BackgroundSlant.propTypes = {
  slant: PropTypes.string,
  degree: PropTypes.number,
  backgroundColor: PropTypes.string,
  heightMultiple: PropTypes.number,
};

// to use, add 'position: relative' and 'z-index : 1' on container where this is incorporated.
export default function BackgroundSlant({
  slant = 'left',
  degree = 20,
  heightMultiple = 1,
  backgroundColor = 'var(--secondary-light)',
}) {
  return (
    <StyledBackgroundSlant
      slant={slant}
      degree={`${parseInt(degree)}deg`}
      backgroundColor={backgroundColor}
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
    height: 400px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    opacity: 1;
    z-index: -1;
    box-shadow: 0 0 4px var(--color-grey-900);
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
        `${parseInt(Math.ceil(heightMultiple * 500))}px`};
    }
    @media (min-width: ${mediaQueries.tablet}) {
      height: ${({ heightMultiple }) =>
        `${parseInt(Math.ceil(heightMultiple * 650))}px`};
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
