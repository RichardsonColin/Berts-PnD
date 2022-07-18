import Image from 'next/image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

Mosaic.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  split: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function Mosaic({ title, images, split, className }) {
  const [boxTwoImage, boxThreeImage, boxFourImage] = images;
  return (
    <StyledMosaic className={className} split={split}>
      <StyledBoxOne split={split}>
        <StyledTitle>{title}</StyledTitle>
      </StyledBoxOne>
      <StyledBoxTwo aria-hidden='true' split={split}>
        <Image
          src={boxTwoImage}
          alt='Painting renovation image'
          layout='fill'
          objectFit='cover'
          quality={90}
          placeholder='blur'
        />
      </StyledBoxTwo>
      <StyledBoxThree aria-hidden='true' split={split}>
        <Image
          src={boxThreeImage}
          alt='Painting renovation image'
          layout='fill'
          objectFit='cover'
          quality={90}
          placeholder='blur'
        />
      </StyledBoxThree>
      <StyledBoxFour aria-hidden='true' split={split}>
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
  /* viewport-wide bannner lines */
  &:after {
    content: '';
    position: absolute;
    width: 1050px;
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
    display: inline-block;
    width: 40%;
    height: 100%;
    margin-top: 0;
    vertical-align: top;
    transform: translateX(22px);
    background: 0 0;

    /* position mosaic on right/left side of viewport */
    ${({ split }) => {
      if (split === 'left') {
        return css`
          left: -25px;
        `;
      }
      if (split === 'right') {
        return css`
          right: 30px;
        `;
      }
    }}

    /* clear banner used on smaller viewports */
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

    /* minor position adjustment for left-side mosiac */
    ${({ split }) => {
      if (split === 'left') {
        return css`
          left: 32px;
        `;
      }
    }}
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

    /* position mosaic on right/left side of viewport */
    ${({ split }) => {
      if (split === 'left') {
        return css`
          left: -90px;
        `;
      }
      if (split === 'right') {
        return css`
          right: -90px;
        `;
      }
    }}
  }
`;
const StyledTitle = styled.span`
  ${StyledMosaic} & {
    width: 350px;
    margin: auto;
    color: var(--color-grey-10);
    font-size: 3em;
    font-weight: 700;
    line-height: 64px;
    opacity: 0.95;

    @media (min-width: ${mediaQueries.tablet}) {
      width: 325px;
      font-size: 3.5em;
    }
  }
`;
// corner stylings used on individual mosaic boxes
const CutCorner = css`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: var(--color-grey-10);
  transform: rotateZ(135deg);
  z-index: 10;
  overflow: hidden;
`;
const CutCornerTopLeft = css`
  &:before {
    ${CutCorner}
    content: '';
    top: -50px;
    left: -50px;
  }
`;
const CutCornerTopRight = css`
  &:after {
    content: '';
    ${CutCorner}
    top: -50px;
    right: -50px;
  }
`;
const CutCornerBottomLeft = css`
  &:before {
    content: '';
    ${CutCorner}
    bottom: -50px;
    left: -50px;
  }
`;
const CutCornerBottomRight = css`
  &:after {
    content: '';
    ${CutCorner}
    bottom: -50px;
    right: -50px;
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
  ${StyledMosaic} && {
    position: relative;
    text-align: center;
    overflow: hidden;

    /* min-widths */
    @media (min-width: ${mediaQueries.laptop}) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 350px;
      border-bottom: 13px solid var(--color-grey-10);
      background-color: var(--secondary);
      ${({ split }) => {
        if (split === 'left') {
          return css`
            ${CutCornerBottomRight}
          `;
        }
        if (split === 'right') {
          return css`
            ${CutCornerBottomLeft}
          `;
        }
      }}
    }
    /* custom breakpoints */
    @media (min-width: 1200px) {
      ${CutCornerReset}
      ${CutCornerBottomLeft}
      ${CutCornerBottomRight}
    }
    @media (min-width: 1500px) {
      -ms-grid-row: 1;
      grid-row: 1;
      border: none;

      ${({ split }) => {
        if (split === 'left') {
          return css`
            -ms-grid-column: 2;
            grid-column: 2;
            ${CutCornerTopLeft}
            ${CutCornerBottomRight}
          `;
        }
        if (split === 'right') {
          return css`
            -ms-grid-column: 1;
            grid-column: 1;
            ${CutCornerBottomLeft}
            ${CutCornerTopRight}
          `;
        }
      }}
    }
  }
`;
const StyledBoxTwo = styled.div`
  ${StyledMosaic} && {
    position: relative;
    display: none;
    overflow: hidden;

    /* min-widths */
    @media (min-width: ${mediaQueries.laptop}) {
      display: block;
      width: 100%;
      height: 635px;

      ${({ split }) => {
        if (split === 'left') {
          return css`
            ${CutCornerTopRight}
          `;
        }
        if (split === 'right') {
          return css`
            ${CutCornerTopLeft}
          `;
        }
      }}
    }
    /* custom breakpoints */
    @media (min-width: 1200px) {
      ${CutCornerReset}
      ${CutCornerTopLeft}
      ${CutCornerTopRight}
    }
    @media (min-width: 1500px) {
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
      grid-row: 1/3;
      width: auto;
      height: 100%;
      ${CutCornerReset}

      ${({ split }) => {
        if (split === 'left') {
          return css`
            -ms-grid-column: 1;
            grid-column: 1;
            ${CutCornerTopRight}
            ${CutCornerBottomLeft}
          `;
        }
        if (split === 'right') {
          return css`
            -ms-grid-column: 2;
            grid-column: 2;
            ${CutCornerTopLeft}
            ${CutCornerBottomRight}
            &:after {
              top: unset;
            }
          `;
        }
      }}
    }
  }
`;
const StyledBoxThree = styled.div`
  ${StyledMosaic} && {
    position: relative;
    display: none;
    overflow: hidden;

    /* custom breakpoint */
    @media (min-width: 1500px) {
      display: block;
      -ms-grid-row: 2;
      -ms-grid-row-span: 2;
      grid-row: 2/4;
      width: auto;
      height: 100%;

      ${({ split }) => {
        if (split === 'left') {
          return css`
            -ms-grid-column: 2;
            grid-column: 2;
            ${CutCornerBottomLeft}
            ${CutCornerTopRight}
          `;
        }
        if (split === 'right') {
          return css`
            -ms-grid-column: 1;
            grid-column: 1;
            ${CutCornerTopLeft}
            ${CutCornerBottomRight}
          `;
        }
      }}
    }
  }
`;
const StyledBoxFour = styled.div`
  ${StyledMosaic} && {
    position: relative;
    display: none;
    overflow: hidden;

    /* custom breakpoint */
    @media (min-width: 1500px) {
      display: block;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3/4;
      width: auto;
      height: 100%;

      ${({ split }) => {
        if (split === 'left') {
          return css`
            -ms-grid-column: 1;
            grid-column: 1;
            ${CutCornerBottomRight}
            ${CutCornerTopLeft}
          `;
        }
        if (split === 'right') {
          return css`
            -ms-grid-column: 2;
            grid-column: 2;
            ${CutCornerBottomLeft}
            ${CutCornerTopRight}
          `;
        }
      }}
    }
  }
`;
