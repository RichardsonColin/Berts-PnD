import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import Container from '@/components/ui/Container';
// constants
import { mediaQueries } from '@/src/constants';

LandingContent.propTypes = {
  position: PropTypes.string,
  split: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function LandingContent({
  position,
  split,
  className = '',
  children,
}) {
  return (
    <Wrapper split={split}>
      <StyledContent className={className} position={position} split={split}>
        {children}
      </StyledContent>
    </Wrapper>
  );
}

// styles
const Wrapper = styled.div`
  ${({ split }) => {
    if (split === 'right') {
      return css`
        @media (min-width: ${mediaQueries.laptop}) {
          margin: auto;
        }
      `;
    }
  }}
`;
const StyledContent = styled(Container)`
  ${Wrapper} && {
    /* min-widths */
    @media (min-width: ${mediaQueries.tablet}) {
      width: 630px;
      margin: auto;
    }
    @media (min-width: ${mediaQueries.laptop}) {
      width: 480px;
    }
    ${({ split }) => {
      if (split === 'left') {
        return css`
          @media (min-width: ${mediaQueries.laptop}) {
            margin: 0;
            margin-left: 3.5rem;
          }
          /* custom breakpoint */
          @media (min-width: 1300px) {
            width: 560px;
            margin-left: 0;
          }
        `;
      }

      if (split === 'right') {
        return css`
          @media (min-width: ${mediaQueries.laptop}) {
            margin-right: 3.5rem;
          }
          /* custom breakpoints */
          @media (min-width: 1300px) {
            width: 560px;
            margin-right: 0;
          }
          @media (min-width: 1500px) {
            margin-right: -2rem;
          }
        `;
      }
    }}
    /* custom breakpoint */
    @media (min-width: 1500px) {
      width: 610px;
      margin-top: 3.8rem;
    }
  }
`;
