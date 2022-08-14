import { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// constants
import { RECAPTCHA_VERIFY_PATH } from '@/utils/constants';

export default function useReCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const verifyReCaptcha = async () => {
    const token = await handleReCaptchaVerify();
    const { success } = await handleRequest(token);
    return success;
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.warn('reCAPTCHA not yet available.');
      return;
    }

    return await executeRecaptcha();
  }, [executeRecaptcha]);

  const handleRequest = async (token) => {
    const response = await fetch(RECAPTCHA_VERIFY_PATH, {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'content-type': 'application/json',
      },
    });
    return response.json();
  };

  return {
    verifyReCaptcha,
  };
}
