import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

AnimatedSquare.propTypes = {
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  angle: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number,
  animationOffset: PropTypes.number,
  className: PropTypes.string,
};

// size is used as a pixel value for width/height
// thickness is a width in % of the linear gradient background (min=1; max=51)
// animationOffset is a positive number representing the amount of ms in hundreds to offset the animation-duration (min=1; max=9)
export default function AnimatedSquare({
  size,
  thickness,
  angle,
  color,
  opacity,
  animationOffset,
  className,
}) {
  return (
    <AnimatedSquareShift
      aria-hidden='true'
      className={`${className} animated-square`}
      mediaQueries={mediaQueries}
      size={size}
      thickness={thickness}
      angle={angle || 0}
      color={color || 'var(--primary)'}
      opacity={opacity || 1}
      animationOffset={animationOffset || 0}
    />
  );
}

// styles
const StyledSquare = styled.div`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ thickness, color }) => {
    return css`
    linear-gradient(to top, ${color} ${thickness}%, transparent ${thickness}%) 0 100%,
    linear-gradient(to right, ${color} ${thickness}%, transparent ${thickness}%) 0
      100%,
    linear-gradient(to bottom, ${color} ${thickness}%, transparent ${thickness}%) 0 100%,
    linear-gradient(to left, ${color} ${thickness}%, transparent ${thickness}%) 0 100%
  `;
  }};
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: -1px -1px 8px hsl(300deg 8% 3% / 15%);
  opacity: ${({ opacity }) => opacity};
  z-index: 1;

  /* hide on smaller viewports */
  @media (max-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    display: none;
  }
`;
// animations
const shift = ({ angle }) => keyframes`
  0% {
    transform: rotate(${angle}deg) translateY(0);
  }

  50% {
    transform: rotate(${angle}deg) translateY(25px);
  }

  100% {
    transform: rotate(${angle}deg) translateY(0);
  }
`;
const AnimatedSquareShift = styled(StyledSquare)`
  animation-name: ${shift};
  animation-duration: ${({ animationOffset }) => `${7}.${animationOffset}s`};
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;
