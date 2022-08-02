import PropTypes from 'prop-types';
// components
import { Field } from 'formik';
import FormikErrorMessage from './FormikErrorMessage';

FormikTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

// Formik requires you pass in as component
const TextArea = (props) => {
  return <textarea {...props}></textarea>;
};

export default function FormikTextArea({ id, name, placeholder, className }) {
  return (
    <>
      <Field
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        as={TextArea}
      />
      <FormikErrorMessage name={name} />
    </>
  );
}
