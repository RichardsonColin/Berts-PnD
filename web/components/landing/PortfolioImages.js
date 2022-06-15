import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import PortfolioImage from '@/components/PortfolioImage';
import LinkButton from '@/components/ui/LinkButton';
// constants
import { mediaQueries } from '@/src/constants';

PortfolioImages.propTypes = {
  portfolioImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  altText: PropTypes.string.isRequired,
};

export default function PortfolioImages({ portfolioImages, altText }) {
  return (
    <>
      {portfolioImages.map((portfolioImage, index) => {
        const { _id, title, image } = portfolioImage;
        return (
          <ImageWrapper key={_id}>
            <StyledPortfolioImage
              image={image}
              layout='fill'
              objectFit='cover'
              quality={100}
              blur={10}
              altText={`${altText}: ${title}`}
            />
            {index === 2 && (
              <StyledLinkButton href='/portfolio'>View More</StyledLinkButton>
            )}
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
  width: 40%;
  height: 52vw;
  margin: 0.315rem;
  border-radius: 2px;

  &:nth-of-type(even) {
    transform: translateY(25px);
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    margin: 1.25rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    width: 340px;
    height: 550px;
  }

  /* custom breakpoints */
  &:nth-of-type(odd) {
    @media (min-width: 1500px) {
      transform: translateY(-176px);
    }
  }
  @media (min-width: 1500px) {
    width: 300px;
    height: 634px;
    margin: 0;
    border-radius: 3px;
  }
`;
const StyledPortfolioImage = styled(PortfolioImage)`
  ${ImageWrapper} & {
    border-radius: 2px;

    /* custom breakpoint */
    @media (min-width: 1500px) {
      border-radius: 3px;
    }
  }
`;
const StyledLinkButton = styled(LinkButton)`
  ${ImageWrapper} & {
    position: absolute;
    bottom: -120px;
    left: 105%;
    min-width: 115px;
    transform: translateX(-50%);

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      bottom: -99px;
      left: 50%;
    }
    /* custom breakpoint */
    @media (min-width: 1500px) {
      bottom: -132px;
    }
  }
`;
