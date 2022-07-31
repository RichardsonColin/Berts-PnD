import PropTypes from 'prop-types';
// constants
import { mediaQueries } from '@/utils/constants';
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
  margin: 0 0 1rem 1rem;
  font-size: 1.3em;
  font-weight: 500;
  text-transform: capitalize;
  text-align: left;

  @media (min-width: ${mediaQueries.tablet}) {
    font-size: 1.5em;
  }
`;
