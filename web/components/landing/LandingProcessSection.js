import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledProcessSection as StyledSection } from './Styled/LandingSection';
import ProcessCards from './ProcessCards';
import Heading from '@/components/ui/Heading';
import AnimatedSquareGroup from '@/components/AnimatedSquareGroup';

LandingProcessSection.propTypes = {
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingProcessSection({ process }) {
  return (
    <StyledProcessSection id='process'>
      <span>Our Process</span>
      <Heading level='2'>Our Simple 4 Step Process</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
        Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
        quam dolor.
      </p>
      <ProcessCards process={process} />
      <AnimatedSquareWrapper>
        <AnimatedSquareGroup
          sizes={[400, 200, 100]}
          angles={[35, 35, 35]}
          colors={[
            'var(--secondary)',
            'var(--primary)',
            'var(--secondary-accent)',
          ]}
        />
      </AnimatedSquareWrapper>
    </StyledProcessSection>
  );
}

// styles
const StyledProcessSection = styled(StyledSection)`
  && {
    position: relative;
  }
`;
const AnimatedSquareWrapper = styled.div`
  ${StyledProcessSection} & {
    position: absolute;
    top: 100px;
    right: -50px;
    margin: auto;
    margin-right: -300px;
  }
`;
