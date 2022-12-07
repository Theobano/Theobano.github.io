import { useState, useEffect } from "react";

// Get dimensions of window
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

// Custom hook for using window's dimensions that handles resize
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // Function to update dimensions on resize
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  // Attach resize to useEffect
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions;
