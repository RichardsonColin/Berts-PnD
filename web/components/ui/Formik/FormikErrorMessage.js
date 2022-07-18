import PropTypes from 'prop-types';
// components
import { ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import FormError from '@/components/ui/FormError';
// style
import styled from 'styled-components';

FormikErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const CustomError = ({ children }) => {
  return (
    <span>
      <FontAwesomeIcon icon={faTriangleExclamation} />
      {children}
    </span>
  );
};

export default function FormikErrorMessage({ name, className }) {
  return (
    <StyledErrorMessage
      className={className}
      name={name}
      component={FormError}
    />
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  text-transform: capitalize;
  color: var(--color-error);
`;
