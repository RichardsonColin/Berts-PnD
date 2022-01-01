import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// hooks
import useWindowDimensions from '@/hooks/useWindowDimensions';
// constants
import { mediaQueries } from '@/src/constants';

Header.propTypes = {
  children: PropTypes.node.isRequired,
  spacer: PropTypes.number,
};

export default function Header(props) {
  const { width } = useWindowDimensions();
  const defaultSpacerHeight = 3;
  const [spacerHeight, setSpacerHeight] = useState(defaultSpacerHeight);

  useEffect(() => {
    // resize the header's bottom spacer for smaller viewports
    const breakPointWidth = Number(mediaQueries.laptop.replace('px', ''));
    const newSpacerHeight =
      width > breakPointWidth ? defaultSpacerHeight : defaultSpacerHeight - 1;
    return () => {
      setSpacerHeight(newSpacerHeight);
    };
  });

  return (
    <StyledHeader spacerHeight={spacerHeight} mediaQueries={mediaQueries}>
      {props.children}
    </StyledHeader>
  );
}

// styles
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ spacerHeight }) => `${spacerHeight + 50}px`};
  min-height: ${({ spacerHeight }) => `${spacerHeight + 50}px`};
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px var(--color-grey-100);

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${({ spacerHeight }) => `${spacerHeight}px`};
    background: var(--primary);
    content: '';
  }

  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    height: ${({ spacerHeight }) => `${spacerHeight + 90}px`};
    min-height: ${({ spacerHeight }) => `${spacerHeight + 90}px`};
  }
`;
