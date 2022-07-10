import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
// components
import FormikStatusMessage from '@/components/ui/Formik/FormikStatusMessage';
import Button from '@/components/ui/Button';
// style
import styled from 'styled-components';

FormikForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validations: PropTypes.func.isRequired,
  requestUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormikForm({
  initialValues,
  validations,
  requestUrl,
  children,
  className,
}) {
  const [shouldShowStatus, setShouldShowStatus] = useState(false);

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, setErrors, resetForm }
  ) => {
    try {
      const response = await handleRequest(values);

      if ('errors' in response) {
        setErrors(response.errors);
      }

      resetForm();

      if ('message' in response) {
        handleStatus(setStatus, response?.message || '', 7500);
      }

      setSubmitting(false);
    } catch (error) {
      resetForm();
      handleStatus(
        setStatus,
        'Sorry, service is temporarily unavailable.',
        7500
      );
      setSubmitting(false);
    }
  };

  const handleRequest = async (data) => {
    const response = await fetch(requestUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    return await response.json();
  };

  const handleStatus = (setStatus, message, timeToDisplayInMs) => {
    setStatus({ msg: message });
    setShouldShowStatus(true);
    setTimeout(() => {
      setShouldShowStatus(false);
    }, timeToDisplayInMs);
  };

  // TODO: Add captcha
  return (
    <FormWrapper className={className}>
      <Formik
        initialValues={initialValues}
        validate={validations}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            {children}
            <StyledSubmit type='submit' disabled={isSubmitting}>
              Submit
            </StyledSubmit>
            <FormikStatusMessage
              msg={status?.msg || ''}
              isDisplayed={shouldShowStatus}
            />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}

// styles
const FormWrapper = styled.div``;
const StyledSubmit = styled(Button)`
  && {
    padding: 0.75rem 5rem;
    color: var(--color-grey-50);
    background-color: var(--secondary);

    &:hover {
      background-color: var(--secondary-dark);
    }
  }
`;
