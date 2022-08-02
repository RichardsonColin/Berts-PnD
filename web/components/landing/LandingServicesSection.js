import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledServicesSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import ServicesCards from './ServicesCards';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';
import AnimatedSquareGroup from '@/components/AnimatedSquareGroup';

LandingServicesSection.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingServicesSection({ services }) {
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
      <AnimatedSquareWrapper>
        <AnimatedSquareGroup
          sizes={[400, 200, 100]}
          angles={[35, 35, 35]}
          colors={[
            'var(--primary-light)',
            'var(--primary)',
            'var(--secondary-light)',
          ]}
        />
      </AnimatedSquareWrapper>
    </StyledServicesSection>
  );
}

// styles
const StyledServicesSection = styled(StyledSection)`
  && {
    position: relative;
  }
`;
const AnimatedSquareWrapper = styled.div`
  ${StyledServicesSection} & {
    position: absolute;
    top: 50px;
    margin: auto;
    margin-left: -250px;
  }
`;
