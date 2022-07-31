import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// components
import ReCAPTCHA from 'react-google-recaptcha';
import FormError from '@/components/ui/FormError';
// hooks
import useMediaQuery from '@/hooks/useMediaQuery';
// constants
import { mediaQueries } from '@/utils/constants';
// style
import styled from 'styled-components';

ReCaptcha.propTypes = {
  reCaptchaRef: PropTypes.any,
  reCaptchaError: PropTypes.string,
  setToken: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
};

export default function ReCaptcha({
  reCaptchaRef,
  reCaptchaError,
  setToken,
  tabIndex,
  className,
}) {
  const [message, setMessage] = useState('');
  const [loaded, setLoaded] = useState(false);
  const isBreakPoint = useMediaQuery('mobileL');

  useEffect(() => {
    setMessage(reCaptchaError);
    setLoaded(true);
  }, [reCaptchaRef, reCaptchaError]);

  const onChange = (value) => {
    setToken(value);
    setMessage('');
  };

  const onErrored = () => {
    setMessage(
      'A reCAPTCHA issue occured, please refresh the page and try again.'
    );
  };

  return (
    <ContentWrapper className={className}>
      {loaded && (
        <StyledReCAPTCHA
          ref={reCaptchaRef}
          sitekey={process.env['RECAPTCHA_SITE_KEY']}
          onChange={onChange}
          onErrored={onErrored}
          size={isBreakPoint ? 'compact' : 'normal'}
          tabindex={tabIndex}
        />
      )}
      {message && (
        <FormError>
          <ReCaptchaMessage>{message}</ReCaptchaMessage>
        </FormError>
      )}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div``;
const StyledReCAPTCHA = styled(ReCAPTCHA)`
  width: 164px;
  margin: 0 auto;

  @media (min-width: ${mediaQueries.mobileL}) {
    width: 304px;
  }
`;
const ReCaptchaMessage = styled.span`
  ${ContentWrapper} & {
    text-transform: none;
  }
`;
