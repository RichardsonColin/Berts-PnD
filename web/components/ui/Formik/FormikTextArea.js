import { Field } from 'formik';
import PropTypes from 'prop-types';
// components
import FormikErrorMessage from './FormikErrorMessage';

FormikTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const TextArea = (props) => {
  return <textarea {...props}></textarea>;
};

export default function FormikTextArea({ id, name, className }) {
  return (
    <>
      <Field className={className} id={id} name={name} as={TextArea} />
      <FormikErrorMessage name={name} />
    </>
  );
}
