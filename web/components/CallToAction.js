import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
import BackgroundSlant from '@/components/ui/BackgroundSlant';
// constants
import { mediaQueries } from '@/src/constants';

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default function CallToAction({ className = '' }) {
  return (
    <StyledSection id='call-to-action' className={className}>
      <BackgroundSlant
        heightMultiple={0.8}
        slant='left'
        degree={5}
        backgroundColor='var(--secondary)'
      />
      <BackgroundSlant heightMultiple={0.8} slant='right' degree={5} />
      <Wrapper>
        <StyledContainer position='left'>
          <StyledHeading level='2'>Give Us A Call!</StyledHeading>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
            Suspendisse bibendum justo non justo cursus sodales.
          </StyledText>
        </StyledContainer>
        <StyledQuoteLinkButton>Schedule Now</StyledQuoteLinkButton>
      </Wrapper>
    </StyledSection>
  );
}

// styles
export const StyledSection = styled(Section)`
  position: relative;
  padding-bottom: 10rem;
  color: var(--color-grey-900);
  z-index: 0;
`;
const Wrapper = styled.div`
  ${StyledSection} & {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: ${mediaQueries.laptop}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
const StyledContainer = styled(Container)`
  ${StyledSection} & {
    max-width: 550px;
    margin: 0;
    text-align: center;

    @media (min-width: ${mediaQueries.laptop}) {
      text-align: left;
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledSection} & {
    font-size: 2.25em;
  }
`;
const StyledText = styled.p`
  ${StyledSection} & {
    margin-bottom: 2rem;
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  z-index: 1;
`;
