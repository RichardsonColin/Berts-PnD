import Image from 'next/image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

LandingMosaic.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default function LandingMosaic({ title, images, className = '' }) {
  const [boxTwoImage, boxThreeImage, boxFourImage] = images;
  return (
    <StyledMosaic className={className}>
      <StyledBoxOne>
        <StyledTitle>{title}</StyledTitle>
      </StyledBoxOne>
      <StyledBoxTwo aria-hidden='true'>
        <Image
          src={boxTwoImage}
          alt='Painting renovation image'
          layout='fill'
          objectFit='cover'
          quality={90}
          placeholder='blur'
        />
      </StyledBoxTwo>
      <StyledBoxThree aria-hidden='true'>
        <Image
          src={boxThreeImage}
          alt='Painting renovation image'
          layout='fill'
          objectFit='cover'
          quality={90}
          placeholder='blur'
        />
      </StyledBoxThree>
      <StyledBoxFour aria-hidden='true'>
        <Image
          src={boxFourImage}
          alt='Painting renovation image'
          layout='fill'
          objectFit='cover'
          quality={90}
          placeholder='blur'
        />
      </StyledBoxFour>
    </StyledMosaic>
  );
}

// styles
const StyledMosaic = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 3.125rem;
  background: var(--primary-accent);
  z-index: 1;

  /* viewport-wide banner */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: -2000px;
    left: -200px;
    display: block;
    height: 100%;
    background: var(--secondary-accent);
    opacity: 1;
    z-index: -1;
  }
  /* viewport-wide lines */
  &:after {
    content: '';
    position: absolute;
    width: 150%;
    height: 200px;
    border-top: 4px solid var(--color-grey-10);
    border-bottom: 4px solid var(--color-grey-10);
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.tablet}) {
    margin-top: 6.25rem;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    position: absolute;
    top: 40px;
    right: 0;
    display: inline-block;
    width: 40%;
    height: 100%;
    margin-top: 0;
    vertical-align: top;
    transform: translateX(22px);
    background: 0 0;

    &:before {
      content: none;
    }
    &:after {
      content: none;
    }
  }
  /* custom breakpoints */
  @media (min-width: 1200px) {
    transform: none;
  }
  @media (min-width: 1500px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 8px 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: 350px 8px 350px 8px 350px;
    grid-template-rows: 350px 350px 350px;
    grid-gap: 8px;
    width: 720px;
    right: -105px;
  }
`;
const StyledTitle = styled.span`
  ${StyledMosaic} & {
    color: var(--color-grey-10);
    font-size: 3em;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
    opacity: 0.95;

    /* mid-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      font-size: 3.5em;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      line-height: 90px;
    }
  }
`;
const CutCornerTopLeft = css`
  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    background-color: var(--color-grey-10);
    transform: rotateZ(135deg);
    z-index: 1;
    overflow: hidden;
  }
`;
const CutCornerTopRight = css`
  &:after {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    background-color: var(--color-grey-10);
    transform: rotateZ(135deg);
    z-index: 1;
    overflow: hidden;
  }
`;
const CutCornerBottomLeft = css`
  &:before {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    background-color: var(--color-grey-10);
    transform: rotateZ(135deg);
    z-index: 1;
  }
`;
const CutCornerBottomRight = css`
  &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    background-color: var(--color-grey-10);
    transform: rotateZ(135deg);
    z-index: 1;
  }
`;
const CutCornerReset = css`
  &:before {
    top: unset;
    right: unset;
    bottom: unset;
    left: unset;
  }
  &:after {
    top: unset;
    right: unset;
    bottom: unset;
    left: unset;
  }
`;
const StyledBoxOne = styled.div`
  ${StyledMosaic} & {
    position: relative;
    overflow: hidden;

    /* min-widths */
    @media (min-width: ${mediaQueries.laptop}) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 350px;
      border-bottom: 13px solid #fff;
      background-color: var(--primary-accent);

      ${CutCornerBottomLeft}
    }
    /* custom breakpoints */
    @media (min-width: 1200px) {
      ${CutCornerReset}
      ${CutCornerBottomLeft}
      ${CutCornerBottomRight}
    }
    @media (min-width: 1500px) {
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-row: 1;
      grid-row: 1;
      border: none;

      ${CutCornerReset}
      ${CutCornerBottomLeft}
      ${CutCornerTopRight}
    }
  }
`;
const StyledBoxTwo = styled.div`
  ${StyledMosaic} & {
    position: relative;
    display: none;
    overflow: hidden;

    /* min-widths */
    @media (min-width: ${mediaQueries.laptop}) {
      display: block;
      width: 100%;
      height: 635px;

      ${CutCornerTopLeft}
    }
    /* custom breakpoints */
    @media (min-width: 1200px) {
      ${CutCornerReset}
      ${CutCornerTopLeft}
      ${CutCornerTopRight}
    }
    @media (min-width: 1500px) {
      -ms-grid-column: 2;
      grid-column: 2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
      grid-row: 1/3;
      width: auto;
      height: 100%;

      &:after {
        top: unset;
      }

      ${CutCornerReset}
      ${CutCornerTopLeft}
      ${CutCornerBottomRight}
    }
  }
`;
const StyledBoxThree = styled.div`
  ${StyledMosaic} & {
    position: relative;
    display: none;
    overflow: hidden;

    /* custom breakpoint */
    @media (min-width: 1500px) {
      display: block;
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-row: 2;
      -ms-grid-row-span: 2;
      grid-row: 2/4;
      width: auto;
      height: 100%;

      ${CutCornerTopLeft}
      ${CutCornerBottomRight}
    }
  }
`;
const StyledBoxFour = styled.div`
  ${StyledMosaic} & {
    position: relative;
    display: none;
    overflow: hidden;

    /* custom breakpoint */
    @media (min-width: 1500px) {
      display: block;
      -ms-grid-column: 2;
      grid-column: 2;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3/4;
      width: auto;
      height: 100%;

      ${CutCornerBottomLeft}
      ${CutCornerTopRight}
    }
  }
`;
