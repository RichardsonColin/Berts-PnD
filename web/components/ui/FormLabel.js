import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormLabel({ children, className }) {
  return <StyledLabel className={className}>{children}</StyledLabel>;
}

// styles
const StyledLabel = styled.label`
  display: block;
  color: var(--color-grey-700);
  font-size: 0.95em;
  font-weight: 500;
`;
