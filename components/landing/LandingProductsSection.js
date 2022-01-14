import styled from 'styled-components';
// components
import { StyledProductsSection as StyledSection } from './Styled/LandingSection';
import DetailsList from './DetailsList';
import LandingContent from './LandingContent';
import LandingMosaic from './LandingMosaic';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
// constants
import { productsData } from '@/src/data/products';
// assets
import mosaicImageOne from '@/public/images/hero-primary.webp';
import mosaicImageTwo from '@/public/images/hero-primary.webp';
import mosaicImageThree from '@/public/images/hero-primary.webp';

export default function LandingProductsSection() {
  return (
    <StyledProductsSection id='products'>
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
        <DetailsList details={productsData} />
        <StyledQuoteLinkButton>Get In Touch</StyledQuoteLinkButton>
      </LandingContent>
      <LandingMosaic
        title='Exceptional Quality'
        images={[mosaicImageOne, mosaicImageTwo, mosaicImageThree]}
        split='left'
      />
    </StyledProductsSection>
  );
}

// styles
const StyledProductsSection = styled(StyledSection)`
  && {
    /* custom breakpoint */
    @media (min-width: 1500px) {
      max-width: 1400px;
    }
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  ${StyledProductsSection} & {
    display: block;
    margin: auto;
  }
`;
