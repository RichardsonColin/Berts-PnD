import PropTypes from 'prop-types';
// components
import FormikForm from '@/components/ui/Formik/FormikForm';
// style
import styled from 'styled-components';

/*
 * All form handling is done by Formik. Docs: https://formik.org/docs
 */

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validations: PropTypes.func.isRequired,
  requestUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function Form({
  initialValues,
  validations,
  requestUrl,
  children,
  className,
}) {
  return (
    <StyledForm
      initialValues={initialValues}
      validations={validations}
      requestUrl={requestUrl}
      className={className}
    >
      {children}
    </StyledForm>
  );
}

// styles
const StyledForm = styled(FormikForm)``;
