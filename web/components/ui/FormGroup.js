import PropTypes from 'prop-types';
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
  margin: 1rem;
  text-align: left;
`;
