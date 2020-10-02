import React from "react";
import styled from "styled-components";
import { useToggle } from "../../hooks/useToggle";

const Wrapper = styled.div`
  display: inline-block;
`;

export const WithHover = (props) => {
  const [hovered, handleToggle] = useToggle(false);
  return (
    <Wrapper onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
      {React.cloneElement(props.children, { hovered })}
    </Wrapper>
  );
};
