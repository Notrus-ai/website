import { useState, useEffect } from 'react';

export type ScreenType = 'mobile' | 'tablet' | 'desktop';

const REM = 16;

const BREAKPOINTS = {
  sm: 40 * REM,
  md: 48 * REM,
  lg: 64 * REM,
} as const;

function getScreenType(width: number): ScreenType {
  if (width < BREAKPOINTS.md) return 'mobile';
  if (width < BREAKPOINTS.lg) return 'tablet';
  return 'desktop';
}

export function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>(() => {
    if (typeof window === 'undefined') {
      return 'desktop'; // SSR fallback
    }
    return getScreenType(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenType;
}

// Utility function for non-React contexts
export function getScreenTypeFromWidth(width: number): ScreenType {
  return getScreenType(width);
}
