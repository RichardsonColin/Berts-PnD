import { useEffect } from 'react';

export default function usePreventVerticalScroll(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'unset';
    }
  }, [isLocked]);
}
