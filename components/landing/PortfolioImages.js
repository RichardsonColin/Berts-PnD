import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import LinkButton from '@/components/ui/LinkButton';
// constants
import { mediaQueries } from '@/src/constants';

PortfolioImages.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function PortfolioImages({ portfolio }) {
  return (
    <>
      {portfolio.map((image, index) => {
        return (
          <ImageWrapper key={index}>
            <StyledImage
              src={image.image}
              alt={`Portfolio image ${index + 1}`}
              layout='fill'
              objectFit='cover'
              quality={80}
              placeholder='blur'
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
const StyledImage = styled(Image)`
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
    bottom: -99px;
    left: 50%;
    transform: translateX(-50%);

    /* custom breakpoint */
    @media (min-width: 1500px) {
      bottom: -132px;
    }
  }
`;
