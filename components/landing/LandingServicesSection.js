import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledServicesSection as StyledSection } from './Styled/LandingSection';
import ServicesCards from './ServicesCards';
import Heading from '@/components/ui/Heading';
import LinkButton from '@/components/ui/LinkButton';
import { default as SquareOne } from '@/components/ui/AnimatedSquare';
import { default as SquareTwo } from '@/components/ui/AnimatedSquare';
import { default as SquareThree } from '@/components/ui/AnimatedSquare';

// TODO: isolate grouping of StyledSquares into own customizable comp.

LandingServicesSection.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingServicesSection({ services }) {
  return (
    <StyledServicesSection id='services'>
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
      <SquaresWrapper>
        <StyledSquareOne
          size={300}
          thickness={51}
          angle={35}
          shift={16}
          color='var(--primary-light)'
          opacity={0.75}
        />
        <StyledSquareTwo
          size={150}
          thickness={51}
          angle={35}
          shift={14}
          color='var(--primary)'
          opacity={0.55}
        />
        <StyledSquareThree
          size={75}
          thickness={51}
          angle={35}
          shift={12}
          color='var(--secondary-light)'
          opacity={0.65}
        />
      </SquaresWrapper>
    </StyledServicesSection>
  );
}

// styles
const StyledServicesSection = styled(StyledSection)`
  && {
    position: relative;

    /* custom breakpoint */
    @media (min-width: 1300px) {
      max-width: 1500px;
    }
  }
`;
const SquaresWrapper = styled.div`
  ${StyledServicesSection} & {
    position: absolute;
    top: 50px;
    width: 400px;
    margin: auto;
    margin-left: -250px;
    z-index: 1;
  }
`;
// TODO: modify box-shadow to remedy darkening tip edges
const StyledSquareOne = styled(SquareOne)`
  ${StyledServicesSection} & {
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 20px 3px hsl(300deg 5% 10% / 20%);
  }
`;
const StyledSquareTwo = styled(SquareTwo)`
  ${StyledServicesSection} & {
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 20px 3px hsl(300deg 5% 10% / 50%);
  }
`;
const StyledSquareThree = styled(SquareThree)`
  ${StyledServicesSection} & {
    z-index: 3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 0px 0px 20px 3px hsl(300deg 5% 10% / 50%);
  }
`;
