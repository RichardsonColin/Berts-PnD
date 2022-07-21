import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledRenovationsSection as StyledSection } from './styled/LandingSection';
import Gutter from '@/components/ui/Gutter';
import DetailsList from './DetailsList';
import LandingContent from './LandingContent';
import Mosaic from './Mosaic';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
// constants
import { mediaQueries } from '@/src/constants';
// assets
import mosaicImageOne from '@/public/images/hero-primary.webp';
import mosaicImageTwo from '@/public/images/hero-primary.webp';
import mosaicImageThree from '@/public/images/hero-primary.webp';

LandingRenovationsSection.propTypes = {
  renovations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingRenovationsSection({ renovations }) {
  return (
    <StyledRenovationsSection id='renovations'>
      <StyledGutter>
        <LandingContent position='center' split='left'>
          <span>Renovations</span>
          <Heading level='2'>
            House Painting Contractors for the Winnipeg Area
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
            Suspendisse bibendum justo non justo cursus sodales. Vivamus
            sagittis quam dolor.
          </p>
          <DetailsList details={renovations} />
          <StyledQuoteLinkButton>Schedule Now</StyledQuoteLinkButton>
        </LandingContent>
        <Mosaic
          title='Free Estimates'
          images={[mosaicImageOne, mosaicImageTwo, mosaicImageThree]}
          split='right'
        />
      </StyledGutter>
    </StyledRenovationsSection>
  );
}

// styles
const StyledRenovationsSection = styled(StyledSection)`
  && {
    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      margin-bottom: 2.5rem;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      margin-bottom: 10rem;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      margin-bottom: 15rem;
    }
  }
`;
const StyledGutter = styled(Gutter)`
  ${StyledRenovationsSection} & {
    position: relative;
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  ${StyledRenovationsSection} & {
    display: block;
    margin: auto;
    max-width: 150px;
  }
`;
