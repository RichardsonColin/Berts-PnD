import Image from 'next/image';
import styled, { css } from 'styled-components';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
import { default as SquareOne } from '@/components/ui/AnimatedSquare';
import { default as SquareTwo } from '@/components/ui/AnimatedSquare';
// constants
import { mediaQueries } from '@/utils/constants';
// assets
import heroImage from '@/public/images/hero-primary.webp';

export default function HeroPrimary() {
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
      <StyledSquareOne
        size={110}
        thickness={50}
        angle={135}
        color='var(--color-grey-10)'
      />
      <StyledSquareTwo
        size={30}
        thickness={51}
        angle={135}
        color='var(--color-grey-10)'
        animationOffset={5}
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
const StyledSquare = css`
  box-shadow: none;
  z-index: 1;
  animation-direction: reverse;
`;
const StyledSquareOne = styled(SquareOne)`
  ${StyledHero} & {
    ${StyledSquare}

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      display: block;
      bottom: 10px;
      right: -95px;
    }
    @media (min-width: ${mediaQueries.mobileL}) {
      bottom: -85px;
      left: 50%;
      margin-left: 20px;
    }
    /* landscape */
    @media (max-width: 825px) and (max-height: 425px) {
      display: none;
    }
  }
`;
const StyledSquareTwo = styled(SquareTwo)`
  ${StyledHero} & {
    ${StyledSquare}

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileM}) {
      display: block;
      bottom: 40px;
      left: 50%;
      margin-left: 105px;
    }
    @media (min-width: ${mediaQueries.mobileL}) {
      bottom: 75px;
      margin-left: 100px;
    }
    /* landscape */
    @media (max-width: 825px) and (max-height: 425px) {
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
