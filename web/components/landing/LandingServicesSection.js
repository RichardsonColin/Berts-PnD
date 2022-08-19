import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledServicesSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import ServicesCards from './ServicesCards';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';
import Particles from '@/components/ui/Particles';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// constants
import { mediaQueries } from '@/utils/constants';

LandingServicesSection.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingServicesSection({ services }) {
  const isTabletViewport = useMediaQuery(`(max-width: ${mediaQueries.tablet})`);
  return (
    <StyledServicesSection id='services'>
      <Gutter>
        <span>Our Services</span>
        <Heading level='2'>
          House Painting Contractors for the Winnipeg Area
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
          Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
          quam dolor.
        </p>
        <ServicesCards services={services} />
        <LinkButton href='/services'>View Services</LinkButton>
      </Gutter>
      <StyledParticles numOfParticles={isTabletViewport ? 50 : 100} />
    </StyledServicesSection>
  );
}

// styles
const StyledServicesSection = styled(StyledSection)`
  && {
    position: relative;
  }
`;
const StyledParticles = styled(Particles)`
  ${StyledServicesSection} & {
    position: absolute;
    top: -200px;
    right: 65%;
    transform: rotate(45deg);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      top: -150px;
      right: 75%;
    }
    @media (min-width: ${mediaQueries.mobileL}) {
      top: -200px;
      right: 80%;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      right: 90%;
      top: -300px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      top: -240px;
      right: 85%;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      top: -150px;
    }
  }
`;
