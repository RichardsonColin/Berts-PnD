import { useState } from 'react';
import PropTypes from 'prop-types';
// components
import { Formik, Form } from 'formik';
import FormStatusMessage from '@/components/ui/FormStatusMessage';
import FormSubmitButton from '@/components/ui/FormSubmitButton';
import FormGroup from '@/components/ui/FormGroup';
import ReCaptcha from '@/components/ReCaptcha';
// hooks
import useReCaptcha from '@/hooks/useReCaptcha';
// constants
import { mediaQueries } from '@/src/constants';
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
  const [isStatusDisplayed, setIsStatusDisplayed] = useState(false);
  const { reCaptchaRef, reCaptchaError, setToken, verifyReCaptcha } =
    useReCaptcha();

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, setErrors, resetForm }
  ) => {
    try {
      // ensure that the form is able to send using a verification on the user
      // currently using reCAPTCHAv2
      const isVerified = await handleVerification();
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

  // authorizes form submission
  const handleVerification = async () => {
    return await verifyReCaptcha();
  };

  return (
    <FormWrapper className={className}>
      <Formik
        initialValues={initialValues}
        validate={validations}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <StyledForm>
            {children}
            <StyledFormGroup>
              <ReCaptcha
                reCaptchaRef={reCaptchaRef}
                setToken={setToken}
                reCaptchaError={reCaptchaError}
                tabIndex={100}
              />
              <StyledFormSubmitButton
                text='Submit'
                isSubmitting={isSubmitting}
                disabled={isSubmitting}
              />
            </StyledFormGroup>
            <StyledFormStatusMessage
              msg={status?.msg || ''}
              isDisplayed={isStatusDisplayed}
            />
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
}

// styles
const FormWrapper = styled.div``;
const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 3px var(--color-grey-500);

  @media (min-width: ${mediaQueries.tablet}) {
    padding: 1.5rem;
  }
`;
const StyledFormSubmitButton = styled(FormSubmitButton)`
  ${StyledForm} & {
    margin-top: 1rem;

    @media (min-width: ${mediaQueries.tablet}) {
      margin-top: 0;
    }
  }
`;
const StyledFormGroup = styled(FormGroup)`
  ${StyledForm} & {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
    min-height: 144px;

    /* min-widths */
    @media (min-width: ${mediaQueries.mobileL}) {
      min-height: 78px;
    }
    @media (min-width: ${mediaQueries.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const StyledFormStatusMessage = styled(FormStatusMessage)`
  ${StyledForm} & {
    text-align: center;
  }
`;
