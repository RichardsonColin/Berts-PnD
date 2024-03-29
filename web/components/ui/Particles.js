import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Particle from '@/components/ui/Particle';
// hooks
import useHasMounted from '@/hooks/useHasMounted';
// animations
import { fadeIn } from '@/components/ui/styled/Animations';

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
  const hasMounted = useHasMounted();
  const dimension = Math.floor((numOfParticles * 10) / 2.5);

  const particles = useMemo(() => {
    const colors =
      colorsType in colorTemplates
        ? colorTemplates[colorsType]
        : colorTemplates.main;
    return [...Array(numOfParticles)].map((e, index) => (
      <Particle
        key={index}
        nthNum={index}
        dimension={dimension}
        colors={colors}
        numOfColors={colors?.length}
      />
    ));
  }, [colorsType, numOfParticles]);

  if (!hasMounted) {
    return null;
  }

  return (
    <StyledParticles
      className={className}
      dimension={dimension}
      aria-hidden='true'
      opacityFrom={0}
      opacityTo={0.9}
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
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
`;
