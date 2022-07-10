import { Field } from 'formik';
import PropTypes from 'prop-types';
// components
import FormikErrorMessage from './FormikErrorMessage';

FormikInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function FormikInput({ id, name, type, className }) {
  return (
    <>
      <Field className={className} id={id} type={type} name={name} />
      <FormikErrorMessage name={name} />
    </>
  );
}
