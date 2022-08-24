import Image from 'next/image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import { StyledExperienceSection as StyledSection } from './styled/LandingSection';
import ExperienceItems from './ExperienceItems';
import Heading from '@/components/ui/Heading';
// hooks
import useHasMounted from '@/hooks/useHasMounted';
// constants
import { mediaQueries } from '@/utils/constants';
// assets
import backgroundImage from '@/public/images/hero-primary.webp';

LandingExperienceSection.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function LandingExperienceSection({ experience }) {
  const hasMounted = useHasMounted();
  return (
    <StyledExperienceSection id='experience'>
      <ContentWrapper>
        <StyledSpan>We Know Painting</StyledSpan>
        <StyledHeading level='2'>Over 45 Years of Experience</StyledHeading>
        <ExperienceItems items={experience} />
      </ContentWrapper>
      <BackgroundWrapper>
        <StyledSlantLeft aria-hidden='true' />
        <StyledSlantRight aria-hidden='true' />
        <ImageFilter aria-hidden='true' />
        <ImageWrapper>
          {hasMounted ? (
            <Image
              src={backgroundImage}
              alt='Painting image'
              layout='fill'
              objectFit='cover'
              quality={70}
              placeholder='blur'
            />
          ) : null}
        </ImageWrapper>
      </BackgroundWrapper>
    </StyledExperienceSection>
  );
}

// styles
const StyledExperienceSection = styled(StyledSection)`
  position: relative;
  height: 1100px;
  padding-left: 0;
  padding-right: 0;
  /* overflow: hidden; */

  @media (min-width: ${mediaQueries.laptop}) {
    height: 1200px;
  }
`;
const ContentWrapper = styled.div`
  ${StyledExperienceSection} & {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    text-align: center;
    text-shadow: 0px 1px 3px var(--color-grey-800);
    transform: translate(-50%, -50%);
    z-index: 3;

    @media (min-width: ${mediaQueries.laptop}) {
      text-shadow: 0px 1px 1px var(--color-grey-800);
    }
  }
`;
const StyledHeading = styled(Heading)`
  ${StyledExperienceSection} & {
    margin: 0 auto;

    @media (min-width: ${mediaQueries.tablet}) {
      width: 480px;
    }
  }
`;
const StyledSpan = styled.span`
  ${StyledExperienceSection} & {
    margin: auto;
    color: #fff;
  }
`;
const ImageFilter = styled.div`
  ${StyledExperienceSection} & {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    opacity: 0.9;
    z-index: 1;
  }
`;
const BackgroundStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1000px;

  @media (min-width: ${mediaQueries.laptop}) {
    height: 900px;
  }
`;
const BackgroundWrapper = styled.div`
  ${StyledExperienceSection} & {
    ${BackgroundStyles}
  }
`;
const ImageWrapper = styled.div`
  ${StyledExperienceSection} & {
    ${BackgroundStyles}
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 2200px;
  }
`;
const StyledSlantLeft = styled.div`
  ${StyledExperienceSection} & {
    display: none;
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: var(--primary);
    border: 100px solid var(--secondary);
    transform: rotate(45deg);
    z-index: 2;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      display: block;
      top: -200px;
      left: -600px;
      box-shadow: 4px 3px 7px var(--color-grey-950);
    }
    @media (min-width: ${mediaQueries.laptop}) {
      left: -550px;
    }
    /* custom breakpoint */
    @media (min-width: 1300px) {
      border: 125px solid var(--secondary);
      top: -50px;
      left: -500px;
    }
  }
`;
const StyledSlantRight = styled.div`
  ${StyledExperienceSection} & {
    display: none;
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: var(--primary);
    border: 100px solid var(--secondary);
    transform: rotate(45deg);
    z-index: 2;

    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      display: block;
      bottom: -200px;
      right: -600px;
      box-shadow: 3px 4px 7px var(--color-grey-950);
    }
    @media (min-width: ${mediaQueries.laptop}) {
      right: -550px;
    }
    /* custom breakpoint */
    @media (min-width: 1300px) {
      border: 125px solid var(--secondary);
      bottom: -50px;
      right: -500px;
    }
  }
`;
