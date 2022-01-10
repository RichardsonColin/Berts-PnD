import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

Container.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// position: aligns the container to either center, left or right
export default function Container({
  position = 'center',
  className = '',
  children,
}) {
  return (
    <StyledContainer
      className={className}
      position={position}
      mediaQueries={mediaQueries}
    >
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: inherit;
  margin: auto;

  ${({ position }) => {
    switch (position) {
      case 'left':
        return css`
          margin-left: 0;
        `;
      case 'right':
        return css`
          margin-right: 0;
        `;
      default:
        return css`
          margin: auto;
        `;
    }
  }}
`;
