import PropTypes from 'prop-types';
// constants
import { mediaQueries } from '@/utils/constants';
// style
import styled from 'styled-components';

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormGroup({ children, className }) {
  return <StyledFormGroup className={className}>{children}</StyledFormGroup>;
}

// styles
const StyledFormGroup = styled.div`
  padding: 0.5rem 1rem;
  text-align: left;

  @media (min-width: ${mediaQueries.tablet}) {
    padding: 1rem;
  }
`;
