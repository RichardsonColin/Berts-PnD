import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledProcessSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import ProcessCards from './ProcessCards';
import Heading from '@/components/ui/Heading';
import Particles from '@/components/ui/Particles';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// constants
import { mediaQueries } from '@/utils/constants';

LandingProcessSection.propTypes = {
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingProcessSection({ process }) {
  const isTabletViewport = useMediaQuery(`(max-width: ${mediaQueries.tablet})`);
  return (
    <StyledProcessSection id='process'>
      <Gutter>
        <span>Our Process</span>
        <Heading level='2'>Our Simple 4 Step Process</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
          Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
          quam dolor.
        </p>
        <ProcessCards process={process} />
      </Gutter>
      <StyledParticles
        colorsType={'alt'}
        numOfParticles={isTabletViewport ? 50 : 100}
      />
    </StyledProcessSection>
  );
}

// styles
const StyledProcessSection = styled(StyledSection)`
  && {
    position: relative;
  }
`;
const StyledParticles = styled(Particles)`
  ${StyledProcessSection} & {
    position: absolute;
    top: -120px;
    left: 75%;
    transform: rotate(45deg);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileL}) {
      top: -150px;
      left: 80%;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      top: -270px;
      left: 85%;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      top: -180px;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      top: -100px;
    }
  }
`;
