import React from "react";

const useToggle = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const handleToggle = () => setState(!state);

  return [state, handleToggle];
};

export { useToggle };
