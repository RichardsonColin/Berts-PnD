import Image from 'next/image';
import styled from 'styled-components';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
import Particles from '@/components/ui/Particles';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// constants
import { mediaQueries } from '@/utils/constants';
// assets
import heroImage from '@/public/images/hero-primary.webp';
// animations
import { fadeIn } from '@/components/ui/styled/Animations';

export default function HeroPrimary() {
  const isLargerViewport = useMediaQuery(
    `(min-width: ${mediaQueries.mobileM})`
  );
  return (
    <StyledHero id='hero'>
      <ColorWash aria-hidden='true' />
      <StyledHeroAccent aria-hidden='true' />
      <HeroContentWrapper>
        <HeroContent>
          <HeroHeading>
            Professional Painters For Your Home or Business
          </HeroHeading>
          <QuoteLinkButton>Schedule Now</QuoteLinkButton>
        </HeroContent>
      </HeroContentWrapper>
      <HeroImageWrapper>
        <Image
          priority={true}
          src={heroImage}
          alt='Hero image'
          layout='fill'
          objectFit='cover'
          quality={80}
        />
      </HeroImageWrapper>
      <StyledParticles
        colorsType={isLargerViewport ? 'mono' : 'main'}
        numOfParticles={25}
      />
    </StyledHero>
  );
}

// styles
const StyledHero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  padding: 3.125rem 0.625rem;
  overflow: hidden;

  /* landscape */
  @media (max-width: ${mediaQueries.laptop}) and (max-height: 600px) {
    height: 100vh;
  }
`;
const HeroImageWrapper = styled.div`
  ${StyledHero} & {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 1000px;
    margin-left: auto;
    filter: brightness(90%);
    transition: 0.2s ease;
    opacity: 0;
    animation: ${fadeIn} 1.5s forwards;

    @media (min-width: ${mediaQueries.laptop}) {
      max-width: 80%;
    }
  }
`;
const HeroContentWrapper = styled.div`
  ${StyledHero} & {
    position: relative;
    width: 100%;
    margin: auto;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    opacity: 0;
    animation: ${fadeIn} 1.5s forwards;
  }
`;
const HeroContent = styled.div`
  ${StyledHero} & {
    max-width: 100%;
    margin: 0;
    padding: 0;

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      max-width: 65%;
    }
    /* custom breakpoint to fit BigSquare dimensions */
    @media (min-width: 550px) {
      max-width: 50%;
      padding-top: 2rem;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      max-width: 45%;
      padding-bottom: 5rem;
    }
    /* landscape */
    @media (max-width: ${mediaQueries.laptop}) and (max-height: 600px) {
      margin-top: 2.5rem;
    }
  }
`;
const HeroHeading = styled.h1`
  ${StyledHero} & {
    font-size: 32px;
    color: var(--color-grey-10);
    text-shadow: 1px 1px var(--color-grey-900);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      color: var(--color-grey-900);
      text-shadow: none;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 38px;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      font-size: 42px;
    }
    @media (min-width: 1400px) {
      font-size: 52px;
    }
  }
`;
const StyledHeroAccent = styled.div`
  ${StyledHero} & {
    background: var(--color-grey-10);
    transition: 0.2s ease;
    opacity: 0;
    z-index: 0;

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      position: absolute;
      left: 10%;
      width: 900px;
      height: 900px;
      margin-left: -700px;
      transform: rotate(45deg);
      opacity: 1;
      z-index: 1;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      left: 50%;
      width: 1000px;
      height: 1000px;
      margin-left: -1100px;
      transform: rotate(35deg);
    }
  }
`;
const StyledParticles = styled(Particles)`
  ${StyledHero} & {
    position: absolute;
    top: 70px;
    left: 72%;
    transform: rotate(45deg);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      left: unset;
      right: 20px;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      display: none;
    }
  }
`;
const ColorWash = styled.div`
  ${StyledHero} & {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    opacity: 0.8;
    z-index: 1;
    filter: brightness(0.5);

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      filter: none;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      visibility: hidden;
    }
  }
`;
