import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import { StyledRenovationsSection as StyledSection } from './Styled/LandingSection';
import DetailsList from './DetailsList';
import LandingContent from './LandingContent';
import LandingMosaic from './LandingMosaic';
import Heading from '@/components/ui/Heading';
import QuoteLinkButton from '@/components/QuoteLinkButton';
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
      <LandingContent position='center' split='left'>
        <span>Renovations</span>
        <Heading level='2'>
          House Painting Contractors for the Winnipeg Area
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis neque vitae congue rhoncus. Suspendisse feugiat quam tellus.
          Suspendisse bibendum justo non justo cursus sodales. Vivamus sagittis
          quam dolor.
        </p>
        <DetailsList details={renovations} />
        <StyledQuoteLinkButton>Get In Touch</StyledQuoteLinkButton>
      </LandingContent>
      <LandingMosaic
        title='Free Estimates'
        images={[mosaicImageOne, mosaicImageTwo, mosaicImageThree]}
        split='right'
      />
    </StyledRenovationsSection>
  );
}

// styles
const StyledRenovationsSection = styled(StyledSection)`
  && {
    /* custom breakpoint */
    @media (min-width: 1500px) {
      max-width: 1400px;
    }
  }
`;
const StyledQuoteLinkButton = styled(QuoteLinkButton)`
  ${StyledRenovationsSection} & {
    display: block;
    margin: auto;
  }
`;