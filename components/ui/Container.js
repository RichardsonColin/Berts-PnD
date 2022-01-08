import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

Container.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// sm, md, lg, xl
export default function Container({
  position = 'center',
  className,
  children,
}) {
  return (
    <StyledContainer
      position={position}
      className={className}
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
