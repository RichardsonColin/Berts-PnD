import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledProcessSection as StyledSection } from './Styled/LandingSection';
import ProcessCards from './ProcessCards';
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/src/constants';

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
    </StyledProcessSection>
  );
}

// styles
const StyledProcessSection = styled(StyledSection)`
  && {
    position: relative;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      padding-top: 6.5rem;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      padding-top: 9rem;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      padding-top: 16rem;
    }
  }
`;
