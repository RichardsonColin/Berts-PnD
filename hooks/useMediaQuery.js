import { useState, useCallback, useEffect } from 'react';

export default function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    // minus one to offset for use with min-widths
    const media = window.matchMedia(`(max-width: ${width - 1}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [width, updateTarget]);

  return targetReached;
}
