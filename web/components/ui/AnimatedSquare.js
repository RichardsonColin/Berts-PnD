import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
// constants
import { mediaQueries } from '@/utils/constants';

AnimatedSquare.propTypes = {
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  angle: PropTypes.number,
  shift: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number,
  animationDuration: PropTypes.number,
  className: PropTypes.string,
};

// size is used as a pixel value for width/height
// thickness is a width in % of the linear gradient background (min=1; max=51)
// angle rotates at a fixed point in 2D realm
// shift is the distance in px traveled along the Y-axis
export default function AnimatedSquare({
  size,
  thickness,
  angle = 0,
  shift = 10,
  color = 'var(--primary)',
  opacity = 1,
  animationDuration = 12,
  className,
}) {
  return (
    <AnimatedSquareShift
      aria-hidden='true'
      className={`${className}`}
      size={size}
      thickness={thickness}
      angle={angle}
      shift={shift}
      color={color}
      opacity={opacity}
      animationDuration={animationDuration}
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
  opacity: ${({ opacity }) => opacity};
  z-index: 1;

  /* hide on smaller viewports */
  @media (max-width: ${mediaQueries.laptop}) {
    display: none;
  }
`;
// animations
const shift = ({ angle, shift }) => keyframes`
  0% {
    transform: rotate(${angle}deg) translateY(-${shift}px);
  }

  50% {
    transform: rotate(${angle}deg) translateY(${shift}px);
  }

  100% {
    transform: rotate(${angle}deg) translateY(-${shift}px);
  }
`;
const AnimatedSquareShift = styled(StyledSquare)`
  animation-name: ${shift};
  animation-duration: ${({ animationDuration }) => `${animationDuration}s`};
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;
