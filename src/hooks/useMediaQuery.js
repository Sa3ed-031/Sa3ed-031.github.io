import { useCallback, useSyncExternalStore } from "react";

// True while the media query matches; re-renders when it starts or stops matching
const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
  );
};

export default useMediaQuery;
