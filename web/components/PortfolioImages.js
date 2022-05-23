import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import SanityImage from '@/components/SanityImage';
// constants
import { mediaQueries } from '@/src/constants';

PortfolioImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  altText: PropTypes.string.isRequired,
};

export default function PortfolioImages({ images, altText }) {
  return (
    <>
      {images.map(({ _id, image, title }) => {
        return (
          <ImageWrapper key={_id}>
            <SanityImage
              image={image}
              layout='fill'
              objectFit='cover'
              quality={100}
              blur={10}
              altText={title || altText}
            />
          </ImageWrapper>
        );
      })}
    </>
  );
}

// styles
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 225px;
  min-height: 200px;
  margin: 0.25rem;
  box-shadow: 0px 0px 2px var(--color-grey-900);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px var(--color-grey-900);
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.mobileS}) {
    width: 300px;
    min-height: 275px;
    margin: 0.5rem;
  }
  @media (min-width: ${mediaQueries.mobileL}) {
    width: 400px;
    min-height: 350px;
  }
`;
