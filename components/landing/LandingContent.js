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
    <Wrapper split={split} mediaQueries={mediaQueries}>
      <StyledContent
        className={className}
        position={position}
        split={split}
        mediaQueries={mediaQueries}
      >
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
        @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
          margin: auto;
          margin-right: 3.125rem;
        }
      `;
    }
  }}
`;
const StyledContent = styled(Container)`
  ${Wrapper} & {
    ${({ split }) => {
      if (split === 'left') {
        return css`
          /* min-widths */
          @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
            width: 472px;
            margin: auto;
          }
          @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
            margin: 0;
            margin-left: 3.5rem;
          }
          /* custom breakpoint */
          @media (min-width: 1500px) {
            margin-left: 0;
            width: 612px;
            margin-top: 3.8rem;
          }
        `;
      }

      if (split === 'right') {
        return css`
          /* min-widths */
          @media (min-width: ${({ mediaQueries }) => mediaQueries.tablet}) {
            width: 472px;
            margin: auto;
          }
          @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
            margin-right: 0;
          }
          /* custom breakpoint */
          @media (min-width: 1500px) {
            width: 612px;
            margin-top: 3.8rem;
          }
        `;
      }
    }}
  }
`;
