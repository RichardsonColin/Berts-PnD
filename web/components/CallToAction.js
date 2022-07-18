import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Gutter from '@/components/ui/Gutter';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
import BackgroundSlant from '@/components/ui/BackgroundSlant';
// constants
import { mediaQueries } from '@/src/constants';

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default function CallToAction({ className }) {
  return (
    <StyledSection id='call-to-action' className={className}>
      <Gutter>
        <BackgroundSlant
          heightMultiple={0.6}
          slant='left'
          degree={8}
          backgroundColor='var(--primary)'
        />
        <BackgroundSlant
          heightMultiple={0.6}
          slant='left'
          degree={2}
          backgroundColor='var(--secondary)'
        />
        <BackgroundSlant heightMultiple={0.6} slant='right' degree={5} />
        <Wrapper>
          <StyledContainer position='left'>
            <StyledHeading level='2'>Give Us A Call!</StyledHeading>
            <StyledText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              mattis neque vitae congue rhoncus. Suspendisse feugiat quam
              tellus. Suspendisse bibendum justo non justo cursus sodales.
            </StyledText>
          </StyledContainer>
          <StyledQuoteLinkButton>Schedule Now</StyledQuoteLinkButton>
        </Wrapper>
      </Gutter>
    </StyledSection>
  );
}

// styles
export const StyledSection = styled(Section)`
  position: relative;
  padding-top: 0;
  z-index: 0;

  /* min-widths */
  @media (min-width: ${mediaQueries.mobileL}) {
    padding-top: 1rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    padding-top: 7rem;
  }
`;
const Wrapper = styled.div`
  ${StyledSection} & {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: ${mediaQueries.laptop}) {
      margin-top: 1rem;
      justify-content: space-between;
    }
  }
`;
const StyledContainer = styled(Container)`
  ${StyledSection} & {
    max-width: 750px;
    margin: 0;
    text-align: center;
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledSection} & {
    font-size: 2em;

    @media (min-width: ${mediaQueries.mobileL}) {
      font-size: 2.25em;
    }
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
