import PropTypes from 'prop-types';
// constants
import { mediaQueries } from '@/src/constants';
// style
import styled from 'styled-components';

FormTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormTitle({ children, className }) {
  return <StyledFormTitle className={className}>{children}</StyledFormTitle>;
}

// styles
const StyledFormTitle = styled.h3`
  margin-bottom: 0;
  font-size: 1.3em;
  font-weight: 500;
  text-transform: capitalize;

  @media (min-width: ${mediaQueries.tablet}) {
    font-size: 1.5em;
  }
`;
