import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// hooks
import useWindowDimensions from '@/hooks/useWindowDimensions';
// constants
import { mediaQueries } from '@/src/constants';

BorderSpacer.propTypes = {
  size: PropTypes.number,
  position: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default function BorderSpacer({
  size,
  position,
  backgroundColor,
  className,
}) {
  const { width } = useWindowDimensions();
  // size of border spacer in px
  const [spacerSize, setSpacerSize] = useState(size || 2);

  useEffect(() => {
    // resize the spacer to be thinner for smaller viewports
    const breakPointWidth = Number(mediaQueries.laptop.replace('px', ''));
    // decrease to half the size of original for smaller viewports
    const newSpacerSize =
      width > breakPointWidth ? size : size - Math.round(size / 2);
    // defaults to 1 if calc results in 0
    setSpacerSize(newSpacerSize || 1);
  }, [width, size]);
  return (
    <StyledBorderSpacer
      aria-hidden='true'
      className={className}
      spacerSize={spacerSize}
      position={position}
      backgroundColor={backgroundColor || 'var(--primary)'}
    ></StyledBorderSpacer>
  );
}

const StyledBorderSpacer = styled.div`
  :before {
    position: absolute;
    background-color: ${({ backgroundColor }) => backgroundColor};
    content: '';

    ${({ position }) => {
      switch (position) {
        case 'top':
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            top: 0;
          `;
        case 'right':
          return css`
            width: ${({ spacerSize }) => `${spacerSize}px`};
            height: 100%;
            right: 0;
          `;
        case 'bottom':
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            bottom: 0;
          `;
        case 'left':
          return css`
            width: ${({ spacerSize }) => `${spacerSize}px`};
            height: 100%;
            left: 0;
          `;
        default:
          // defaults to bottom
          return css`
            width: 100%;
            height: ${({ spacerSize }) => `${spacerSize}px`};
            bottom: 0;
          `;
      }
    }}
  }
`;
