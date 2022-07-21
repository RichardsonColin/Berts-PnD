import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

Gutter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function Gutter({ className, children }) {
  return <StyledGutter className={className}>{children}</StyledGutter>;
}

const StyledGutter = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: ${mediaQueries.tablet}) {
    max-width: 900px;
  }
  @media (min-width: ${mediaQueries.laptop}) {
    max-width: 1200px;
  }
  /* custom breakpoint */
  @media (min-width: 1400px) {
    max-width: 1350px;
  }
`;
