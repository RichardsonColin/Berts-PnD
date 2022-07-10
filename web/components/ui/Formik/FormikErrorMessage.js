import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
// style
import styled from 'styled-components';

FormikErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function FormikErrorMessage({ name, className = '' }) {
  return (
    <StyledErrorMessage className={className} name={name} component='div' />
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  text-transform: capitalize;
  color: #b63636;
`;
