import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PortfolioImage from '@/components/PortfolioImage';
import CustomModal from '@/components/ui/CustomModal';
// constants
import { mediaQueries } from '@/utils/constants';

PortfolioImages.propTypes = {
  portfolioImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  altText: PropTypes.string.isRequired,
};

export default function PortfolioImages({ portfolioImages, altText }) {
  return (
    <>
      {portfolioImages.map((portfolioImage, index) => {
        const { _id, image, title } = portfolioImage;
        const Image = (
          <PortfolioImage
            image={image}
            layout='fill'
            objectFit='cover'
            quality={100}
            blur={10}
            altText={`${altText}: ${title}`}
          />
        );
        return (
          <StyledCustomModal key={_id} content={Image} tabindex={index}>
            <ImageWrapper>{Image}</ImageWrapper>
          </StyledCustomModal>
        );
      })}
    </>
  );
}

// styles
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 200px;
  margin: 1rem 0;
  box-shadow: 0px 0px 2px var(--color-grey-900);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px var(--color-grey-900);
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.mobileS}) {
    min-height: 275px;
  }
  @media (min-width: ${mediaQueries.mobileL}) {
    width: 350px;
    min-height: 350px;
    margin: 1rem;
  }
  @media (min-width: ${mediaQueries.tablet}) {
    width: 375px;
    min-height: 375px;
  }
`;

const StyledCustomModal = styled(CustomModal)`
  && {
    position: relative;
    width: 95vw;
    max-width: 1400px;
    min-height: 35vh;
    border: 1px solid var(--color-grey-10);
    box-shadow: 0px 0px 10px 1px var(--color-grey-950);

    /* min-widths */
    @media (min-width: 500px) {
      height: 37vh;
    }
    @media (min-width: 600px) {
      height: 45vh;
    }
    @media (min-width: 700px) {
      height: 50vh;
      border: 3px solid var(--color-grey-10);
    }
    @media (min-width: 800px) {
      height: 60vh;
    }
    @media (min-width: 900px) {
      height: 65vh;
    }
    @media (min-width: 1000px) {
      height: 75vh;
    }
    @media (min-width: 1100px) {
      height: 80vh;
    }
    @media (min-width: 1200px) {
      width: 90vw;
      height: 90vh;
    }
    /* landscape */
    @media (min-width: 600px) and (max-height: 600px) {
      height: 85vh;
    }
  }
`;
