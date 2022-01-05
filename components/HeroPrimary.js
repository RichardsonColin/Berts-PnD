import Image from 'next/image';
import styled, { css } from 'styled-components';
// components
import QuoteLinkButton from '@/components/QuoteLinkButton';
import BorderSpacer from '@/components/ui/BorderSpacer';
import { default as SquareOne } from '@/components/ui/AnimatedSquare';
import { default as SquareTwo } from '@/components/ui/AnimatedSquare';
// constants
import { mediaQueries } from '@/src/constants';
// assets
import heroImage from '@/public/images/hero-primary.webp';

export default function HeroPrimary() {
  return (
    <StyledHero id='hero' mediaQueries={mediaQueries}>
      <ColorWash aria-hidden='true' mediaQueries={mediaQueries} />
      <StyledHeroAccent aria-hidden='true' mediaQueries={mediaQueries} />
      <HeroContentWrapper mediaQueries={mediaQueries}>
        <HeroContent>
          <HeroHeading>
            Professional Painters For Your Home or Business
          </HeroHeading>
          <QuoteLinkButton text='Schedule Now' />
        </HeroContent>
      </HeroContentWrapper>
      <HeroImageWrapper>
        <Image
          priority
          src={heroImage}
          alt='Hero image'
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
        />
      </HeroImageWrapper>
      <StyledSquareOne
        size={110}
        thickness={50}
        angle={135}
        color='var(--color-grey-10)'
        mediaQueries={mediaQueries}
      />
      <StyledSquareTwo
        size={30}
        thickness={51}
        angle={135}
        color='var(--color-grey-10)'
        animationOffset={5}
        mediaQueries={mediaQueries}
      />
      <StyledBorderSpacer
        size={1}
        backgroundColor='var(--primary-light)'
        position='bottom'
        mediaQueries={mediaQueries}
      />
    </StyledHero>
  );
}

// styles
const HeroImageWrapper = styled.div``;
const StyledHeroAccent = styled.div``;
const StyledBorderSpacer = styled(BorderSpacer)``;
const StyledSquareOne = styled(SquareOne)``;
const StyledSquareTwo = styled(SquareTwo)``;
const StyledSquare = css`
  box-shadow: none;
  z-index: 1;
  animation-direction: reverse;
`;
const StyledHero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  overflow: hidden;

  /* landscape */
  @media (max-width: ${({ mediaQueries }) =>
      mediaQueries.laptop}) and (max-height: 600px) {
    height: 100vh;
  }

  ${HeroImageWrapper} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    filter: brightness(90%);
  }

  ${StyledHeroAccent} {
    background: var(--color-grey-10);
    transition: 0.2s ease;
    opacity: 0;
    z-index: 0;

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
      position: absolute;
      left: 10%;
      width: 900px;
      height: 900px;
      margin-left: -700px;
      transform: rotate(45deg);
      opacity: 1;
      z-index: 1;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      left: 50%;
      width: 1000px;
      height: 1000px;
      margin-left: -1100px;
      transform: rotate(35deg);
    }
  }

  ${StyledSquareOne} {
    ${StyledSquare}

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
      display: block;
      bottom: 10px;
      right: -95px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileL}) {
      bottom: -85px;
      left: 50%;
      margin-left: 20px;
    }
    /* landscape */
    @media (max-width: 825px) and (max-height: 425px) {
      display: none;
    }
  }

  ${StyledSquareTwo} {
    ${StyledSquare}

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
      display: block;
      bottom: 40px;
      left: 50%;
      margin-left: 105px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileL}) {
      bottom: 75px;
      margin-left: 100px;
    }
    /* landscape */
    @media (max-width: 825px) and (max-height: 425px) {
      display: none;
    }
  }

  ${StyledBorderSpacer} {
    opacity: 0.5;
    z-index: 1;

    /* displays only on smaller viewports */
    @media (min-width: 769px) {
      display: none;
    }
  }
`;
const HeroHeading = styled.h1``;
const HeroContent = styled.div``;
const HeroContentWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  font-weight: bold;
  text-align: center;
  z-index: 1;

  ${HeroContent} {
    max-width: 100%;
    margin: 0;
    padding: 0;

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
      max-width: 65%;
      padding-left: 0.5rem;
    }
    /* custom breakpoint to fit BigSquare dimensions */
    @media (min-width: 550px) {
      max-width: 50%;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      max-width: 45%;
      margin-bottom: 5rem;
      padding-left: 2rem;
    }
    /* landscape */
    @media (max-width: 825px) and (max-height: 425px) {
      margin-top: 3.5rem;
    }
    /* custom breakpoint for long and narrow landscape devices */
    @media (max-width: ${({ mediaQueries }) =>
        mediaQueries.laptop}) and (max-height: 600px) {
      margin-top: 5rem;
    }
  }

  ${HeroContent} ${HeroHeading} {
    font-size: 32px;
    color: var(--color-grey-10);
    text-shadow: 1px 1px var(--color-grey-900);

    /* min-widths */
    @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
      color: var(--color-grey-900);
      text-shadow: none;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
      font-size: 38px;
    }
    @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
      font-size: 42px;
    }
    @media (min-width: 1400px) {
      font-size: 52px;
    }
  }
`;
const ColorWash = styled.div`
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
  @media (min-width: ${({ mediaQueries }) => mediaQueries.mobileM}) {
    filter: none;
  }
  @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
    visibility: hidden;
  }
`;
