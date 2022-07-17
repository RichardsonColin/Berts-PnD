import PropTypes from 'prop-types';
// components
import FormikForm from '@/components/ui/Formik/FormikForm';
import FormGroup from '@/components/ui/FormGroup';
import ReCaptcha from '@/components/ReCaptcha';
// hooks
import useReCaptcha from '@/hooks/useReCaptcha';
// constants
import { mediaQueries } from '@/src/constants';
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
  const { reCaptchaRef, reCaptchaError, setToken, verifyReCaptcha } =
    useReCaptcha();

  const verificationHandler = async () => {
    return await verifyReCaptcha();
  };
  return (
    <StyledForm
      verificationHandler={verificationHandler}
      initialValues={initialValues}
      validations={validations}
      requestUrl={requestUrl}
      className={className}
    >
      {children}
      <StyledFormGroup>
        <ReCaptcha
          reCaptchaRef={reCaptchaRef}
          setToken={setToken}
          reCaptchaError={reCaptchaError}
          tabIndex={100}
        />
      </StyledFormGroup>
    </StyledForm>
  );
}

// styles
const StyledForm = styled(FormikForm)`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 2px var(--color-grey-300);

  @media (min-width: ${mediaQueries.tablet}) {
    padding: 1.5rem;
  }
`;
// ensures reCAPTCHA doesn't cause shift
const StyledFormGroup = styled(FormGroup)`
  ${StyledForm} & {
    min-height: 144px;

    @media (min-width: ${mediaQueries.mobileL}) {
      min-height: 78px;
    }
  }
`;
