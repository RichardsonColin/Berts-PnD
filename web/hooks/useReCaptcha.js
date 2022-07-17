import { useState, useRef } from 'react';
// constants
import { RECAPTCHA_VERIFY_PATH } from '@/src/constants';

export default function useReCaptcha() {
  const reCaptchaRef = useRef(null);
  const [token, setToken] = useState('');
  const [reCaptchaError, setReCaptchaError] = useState('');

  const verifyReCaptcha = async () => {
    if (!token) {
      setReCaptchaError('Please check, "I\'m not a robot."');
      return false;
    }
    const { success } = await handleRequest();
    reset();
    return success;
  };

  const handleRequest = async () => {
    const response = await fetch(RECAPTCHA_VERIFY_PATH, {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.json();
  };

  const reset = () => {
    // clear error
    setReCaptchaError('');
    // reset ReCAPTCHA
    reCaptchaRef.current.reset();
    // set token state to default state => ''
    setToken(reCaptchaRef.current.getValue());
  };

  return {
    reCaptchaRef,
    token,
    setToken,
    reCaptchaError,
    setReCaptchaError,
    verifyReCaptcha,
  };
}
