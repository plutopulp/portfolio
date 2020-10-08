import React from "react";

const getWindowSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  const changeWindowSize = () => setWindowSize(getWindowSize());

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
};
