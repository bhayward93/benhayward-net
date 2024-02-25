"use client"

/**
 * Adapted from QoP's StackOverflow answer @
 * https://stackoverflow.com/a/36862446/7396007
 */
import { useState, useEffect } from 'react';

/** Window dimensions. */
type WindowDimensions = { width: number|null, height: number|null };

/**
 * Gets the window dimensions.
 * @returns { WindowDimensions } - the window dimensions.
 */
const getWindowDimensions = (): WindowDimensions => {
  if (typeof window === "undefined") {
    return { width: null, height: null };
  }

  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

/**
 * Custom hook for getting the window dimensions.
 * @returns { WindowDimensions } - the window dimensions.
 */
export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
