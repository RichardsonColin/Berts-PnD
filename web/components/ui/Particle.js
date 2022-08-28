import PropTypes from 'prop-types';
// hooks
import useHasMounted from '@/hooks/useHasMounted';
// helpers
import { getRandomInt } from '@/utils/helpers';
// styled
import styled, { css, keyframes } from 'styled-components';

Particle.propTypes = {
  nthNum: PropTypes.number.isRequired,
  dimension: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
};

export default function Particle({ nthNum, dimension, colors }) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return (
    <StyledParticle
      nthNum={nthNum}
      shiftLeft={String(getRandomInt(0, 50)) + 'px'}
      backgroundColor={`var(${colors[getRandomInt(0, colors.length - 1)]})`}
      dimension={Math.floor(dimension / 15)}
      duration={`${String(getRandomInt(0, nthNum) - 100)}s`}
      aria-hidden='true'
    />
  );
}

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(5px) rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) translateX(5px) rotate(-180deg) scale(0.25);
  }
  100% {
    transform: rotate(360deg) translateX(5px) rotate(-360deg) scale(1);
  }
`;
const animation = (props) =>
  css`
    ${orbit} 6s linear ${props.duration} infinite
  `;

const StyledParticle = styled.div.attrs(
  ({ dimension, backgroundColor, shiftLeft }) => ({
    style: {
      width: `${dimension}px`,
      height: `${dimension}px`,
      backgroundColor: backgroundColor,
      marginLeft: shiftLeft,
    },
  })
)`
  position: relative;
  transition: all 0.5s ease;
  animation: ${animation};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0px;
    width: 120px;
    height: 120px;
    margin-top: -50px;
    margin-left: -50px;
    z-index: 0;
  }
`;
