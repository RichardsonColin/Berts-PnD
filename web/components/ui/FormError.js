import PropTypes from 'prop-types';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
// style
import styled from 'styled-components';

FormError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function FormError({ className, children }) {
  return (
    <StyledErrorMessage className={className}>
      <StyledFontAwesomeIcon icon={faTriangleExclamation} />
      {children}
    </StyledErrorMessage>
  );
}

const StyledErrorMessage = styled.div`
  display: flex;
  text-transform: capitalize;
  color: var(--color-error);
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 18px;
  height: 18px;
  margin-right: 0.2rem;
`;
