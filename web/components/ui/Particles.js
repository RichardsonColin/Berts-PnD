import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Particle from '@/components/ui/Particle';
// helpers
import { getRandomInt } from '@/utils/helpers';

Particles.propTypes = {
  colorsType: PropTypes.string,
  numOfParticles: PropTypes.number,
  className: PropTypes.string,
};

const colorTemplates = {
  main: ['--primary', '--secondary', '--secondary-light'],
  alt: ['--primary-light', '--secondary-accent', '--primary-accent'],
  mono: ['--color-grey-10'],
};

export default function Particles({
  colorsType = 'main',
  numOfParticles = 10,
  className,
}) {
  const [particles, setParticles] = useState([]);
  const colors =
    colorsType in colorTemplates
      ? colorTemplates[colorsType]
      : colorTemplates.main;
  const dimension = Math.floor((numOfParticles * 10) / 2.5);

  useEffect(() => {
    setParticles(
      [...Array(numOfParticles)].map((e, index) => (
        <Particle
          key={index}
          nthNum={index}
          dimension={dimension}
          backgroundColor={`var(${colors[getRandomInt(0, colors.length - 1)]})`}
          shiftLeft={String(getRandomInt(0, 50)) + 'px'}
          duration={`${String(getRandomInt(0, index) - 100)}s`}
        />
      ))
    );
  }, [colorsType, numOfParticles, colors, dimension]);

  return (
    <StyledParticles
      className={className}
      dimension={dimension}
      aria-hidden='true'
    >
      {particles}
    </StyledParticles>
  );
}

// styles
const StyledParticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ dimension }) => `${dimension}px`};
  height: ${({ dimension }) => `${dimension}px`};
  z-index: 10;
  opacity: 0.9;
`;
