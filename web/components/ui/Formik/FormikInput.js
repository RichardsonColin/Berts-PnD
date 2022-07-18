import PropTypes from 'prop-types';
// components
import { Field } from 'formik';
import FormikErrorMessage from './FormikErrorMessage';

FormikInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default function FormikInput({
  id,
  name,
  type,
  placeholder,
  className,
}) {
  return (
    <>
      <Field
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <FormikErrorMessage name={name} />
    </>
  );
}
