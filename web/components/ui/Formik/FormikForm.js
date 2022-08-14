import { useState } from 'react';
import PropTypes from 'prop-types';
// components
import { Formik, Form } from 'formik';
import FormStatusMessage from '@/components/ui/FormStatusMessage';
import FormSubmitButton from '@/components/ui/FormSubmitButton';
import FormGroup from '@/components/ui/FormGroup';
import ReCaptchaPolicy from '@/components/ReCaptchaPolicy';
// hooks
import useReCaptcha from '@/hooks/useReCaptcha';
// constants
import { mediaQueries } from '@/utils/constants';
// style
import styled from 'styled-components';

FormikForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validations: PropTypes.func.isRequired,
  requestUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function FormikForm({
  initialValues,
  validations,
  requestUrl,
  children,
}) {
  const [isStatusDisplayed, setIsStatusDisplayed] = useState(false);
  const { verifyReCaptcha } = useReCaptcha();

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, setErrors, resetForm }
  ) => {
    try {
      // ensure that the form is able to send using a verification on the user
      // via reCaptcha v3
      const isVerified = await verifyReCaptcha();
      if (!isVerified) {
        handleStatus(
          setStatus,
          'Google ReCaptcha verification was unsuccsessful. Please refresh the page and try again.'
        );
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
      handleStatus(setStatus, response.message);
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
    <Formik
      initialValues={initialValues}
      validate={validations}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <StyledForm>
          {children}
          <StyledButtonFormGroup>
            <StyledFormSubmitButton
              text='Send'
              isSubmitting={isSubmitting}
              disabled={isSubmitting}
            />
          </StyledButtonFormGroup>
          <StyledTextFormGroup>
            <ReCaptchaPolicy />
          </StyledTextFormGroup>
          <StyledTextFormGroup>
            <StyledFormStatusMessage
              msg={status?.msg || ''}
              isDisplayed={isStatusDisplayed}
            />
          </StyledTextFormGroup>
        </StyledForm>
      )}
    </Formik>
  );
}

// styles
const StyledForm = styled(Form)`
  padding: 1rem 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 2px var(--color-grey-800);

  @media (min-width: ${mediaQueries.tablet}) {
    padding: 1.5rem;
  }
`;
const StyledFormSubmitButton = styled(FormSubmitButton)`
  ${StyledForm} & {
    padding: 0.75rem 4rem;

    @media (min-width: ${mediaQueries.tablet}) {
      margin-top: 0;
    }
  }
`;
const StyledButtonFormGroup = styled(FormGroup)`
  ${StyledForm} & {
    text-align: center;

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileL}) {
      text-align: left;
    }
  }
`;
const StyledTextFormGroup = styled(FormGroup)`
  ${StyledForm} & {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const StyledFormStatusMessage = styled(FormStatusMessage)`
  ${StyledForm} & {
    text-align: center;
  }
`;
