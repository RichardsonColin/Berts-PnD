import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// components
import ReCAPTCHA from 'react-google-recaptcha';
import FormError from '@/components/ui/FormError';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// style
import styled from 'styled-components';

ReCaptcha.propTypes = {
  reCaptchaRef: PropTypes.any,
  reCaptchaError: PropTypes.string,
  setToken: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

export default function ReCaptcha({
  reCaptchaRef,
  reCaptchaError,
  setToken,
  tabIndex,
}) {
  const [message, setMessage] = useState('');
  const isBreakPoint = useMediaQuery('mobileL');

  useEffect(() => {
    setMessage(reCaptchaError);
  }, [reCaptchaError]);

  const onChange = (value) => {
    setToken(value);
  };

  const onErrored = () => {
    setMessage(
      'A reCAPTCHA issue occured, please refresh the page and try again.'
    );
  };

  return (
    <>
      <ReCAPTCHA
        ref={reCaptchaRef}
        sitekey={process.env['RECAPTCHA_SITE_KEY']}
        onChange={onChange}
        onErrored={onErrored}
        size={isBreakPoint ? 'compact' : 'normal'}
        tabindex={tabIndex}
      />
      {message && (
        <FormError>
          <ReCaptchaMessage>{message}</ReCaptchaMessage>
        </FormError>
      )}
    </>
  );
}

const ReCaptchaMessage = styled.span`
  text-transform: none;
`;
