import { element } from "prop-types";
import React from "react";

export const useScrollTrigger = (initialState) => {
  const [showElement, setShowElement] = React.useState(initialState);
  const elementRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const divPosition = topPosition(elementRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (divPosition < scrollPosition) setShowElement(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { showElement, elementRef };
};
