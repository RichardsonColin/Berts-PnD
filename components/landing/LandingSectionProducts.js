import styled from 'styled-components';
// components
import Heading from '@/components/ui/Heading';
import { StyledProductsSection as StyledSection } from './Styled/LandingSection';
import LandingContent from './LandingContent';
// constants
import { mediaQueries } from '@/src/constants';

export default function ProductsLanding() {
  return (
    <StyledProductsSection id='products' mediaQueries={mediaQueries}>
      <LandingContent position='center' split='right'>
        <span>Our Products</span>
        <Heading level='2'>
          House Painting Contractors for the Winnipeg Area
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
          Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
          quam dolor.
        </p>
      </LandingContent>
    </StyledProductsSection>
  );
}

const StyledProductsSection = styled(StyledSection)``;
