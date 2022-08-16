import { useState, useCallback, useEffect } from 'react';

export default function useMediaQuery(query) {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [query, updateTarget]);

  return targetReached;
}
