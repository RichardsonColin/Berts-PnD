import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
// components
import FormStatusMessage from '@/components/ui/FormStatusMessage';
import FormSubmitButton from '@/components/ui/FormSubmitButton';
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
  verificationHandler,
  initialValues,
  validations,
  requestUrl,
  children,
  className,
}) {
  const [isStatusDisplayed, setIsStatusDisplayed] = useState(false);

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, setErrors, resetForm }
  ) => {
    try {
      // ensure that the form is able to send using a verification on the user
      // currently using reCAPTCHAv2
      const isVerified = await verificationHandler();
      if (!isVerified) {
        handleStatus(setStatus, "reCAPTCHA verification wasn't successful.");
        return;
      }
      // send form data
      const response = await handleRequest(values);

      // display errors for improperly filled form fields
      if ('errors' in response) {
        setErrors(response.errors);
        setSubmitting(false);
        return;
      }

      // clear all fields
      resetForm();
      // remove disable on submit button
      setSubmitting(false);
      // disaply form msg for submitter
      handleStatus(setStatus, "We'll be in touch!");
    } catch (error) {
      handleStatus(setStatus, 'Sorry, service is temporarily unavailable.');
      setSubmitting(false);
    }
  };

  // send form data
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

  // display form message for a set amout of time
  const handleStatus = (setStatus, message, timeToDisplayInMs = 5000) => {
    setStatus({ msg: message });
    setIsStatusDisplayed(true);
    setTimeout(() => {
      setIsStatusDisplayed(false);
    }, timeToDisplayInMs);
  };

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
            <FormSubmitButton
              text='Submit'
              isSubmitting={isSubmitting}
              disabled={isSubmitting}
            />
            <FormStatusMessage
              msg={status?.msg || ''}
              isDisplayed={isStatusDisplayed}
            />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}

// styles
const FormWrapper = styled.div``;
