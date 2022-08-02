import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Heading from '@/components/ui/Heading';
// constants
import { mediaQueries } from '@/utils/constants';
// assets
import heroImage from '@/public/images/hero-alternate.webp';

HeroAlternate.propTypes = {
  heading: PropTypes.string,
};

export default function HeroAlternate({ heading }) {
  return (
    <StyledHero id='hero'>
      <ImageFilter aria-hidden='true' />
      <Image
        priority={true}
        src={heroImage}
        alt='Hero image'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <StyledHeading level='1'>{heading}</StyledHeading>
    </StyledHero>
  );
}

// styles
const StyledHero = styled.section`
  position: relative;
  min-height: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-10);

  @media (min-width: ${mediaQueries.tablet}) {
    height: 600px;
  }
`;
const ImageFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 1;
`;
const StyledHeading = styled(Heading)`
  ${StyledHero} & {
    display: flex;
    justify-content: center;
    width: 200px;
    margin-top: 2rem;
    font-size: 3.75em;
    text-align: center;
    text-shadow: 1px 1px 2px var(--color-grey-800);
    z-index: 2;

    &:before {
      content: '';
      position: absolute;
      top: 51%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 180px;
      height: 200px;
      border: 10px solid var(--secondary-light);
      z-index: -1;
    }

    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 4.5em;
    }
  }
`;
