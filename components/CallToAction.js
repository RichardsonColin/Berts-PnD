import styled from 'styled-components';
// components
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
// constants
import { mediaQueries } from '@/src/constants';

export default function CallToAction() {
  return (
    <StyledSection id='call-to-action'>
      <Wrapper>
        <StyledContainer position='left'>
          <StyledHeading level='2'>Give Us A Call!</StyledHeading>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
            Suspendisse bibendum justo non justo cursus sodales.
          </StyledText>
        </StyledContainer>
        <QuoteLinkButton isPrimary={true}>Schedule Now</QuoteLinkButton>
      </Wrapper>
    </StyledSection>
  );
}

// styles
export const StyledSection = styled(Section)`
  padding-bottom: 5rem;
  color: #fff;
  background-color: var(--secondary-accent);
`;
const Wrapper = styled.div`
  ${StyledSection} & {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 auto;

    @media (min-width: ${mediaQueries.laptop}) {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;
    }
  }
`;
const StyledContainer = styled(Container)`
  ${StyledSection} & {
    max-width: 500px;
    margin: 0;
    text-align: center;

    @media (min-width: ${mediaQueries.laptop}) {
      text-align: left;
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledSection} & {
    font-size: 2em;
  }
`;
const StyledText = styled.p`
  ${StyledSection} & {
    margin-bottom: 2rem;
  }
`;
