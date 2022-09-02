import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledProductsSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import DetailsList from './DetailsList';
import LandingContent from './LandingContent';
import Mosaic from './Mosaic';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
// hooks
import useHasMounted from '@/hooks/useHasMounted';
// constants
import { mediaQueries } from '@/utils/constants';
// assets
import mosaicImageOne from '@/public/images/mosaic-1-alt.webp';
import mosaicImageTwo from '@/public/images/mosaic-1.webp';
import mosaicImageThree from '@/public/images/mosaic-3.webp';

LandingProductsSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingProductsSection({ products }) {
  const hasMounted = useHasMounted();
  return (
    <StyledProductsSection id='products'>
      <StyledGutter>
        <LandingContent position='center' split='right'>
          <span>Our Products</span>
          <Heading level='2'>
            House Painting Contractors for the Winnipeg Area
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
            Suspendisse bibendum justo non justo cursus sodales. Vivamus
            sagittis quam dolor.
          </p>
          <DetailsList details={products} />
          <StyledQuoteLinkButton>Schedule Now</StyledQuoteLinkButton>
        </LandingContent>
        {hasMounted ? (
          <Mosaic
            title='Exceptional Quality'
            images={[mosaicImageOne, mosaicImageTwo, mosaicImageThree]}
            split='left'
          />
        ) : null}
      </StyledGutter>
    </StyledProductsSection>
  );
}

// styles
const StyledProductsSection = styled(StyledSection)`
  && {
    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      margin-bottom: 2.5rem;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      margin-bottom: 12rem;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      margin-bottom: 15rem;
    }
  }
`;
const StyledGutter = styled(Gutter)`
  ${StyledProductsSection} & {
    position: relative;
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  ${StyledProductsSection} & {
    display: block;
    margin: auto;
    max-width: 150px;
  }
`;
