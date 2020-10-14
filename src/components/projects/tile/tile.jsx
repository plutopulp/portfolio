import React from "react";

import { DeviculumChart } from "../deviculumChart/deviculumChart";
import { useHover } from "../../../hooks/useHover";
import { StyledButton } from "../../common/styles/index";
import {
  TileWrapper,
  StyledHeader,
  StyledSubHeader,
  StyledSegment,
  ButtonWrapper,
} from "./styles";

export const Tile = ({ image }) => {
  const [hovered, tileRef] = useHover(false);
  return (
    <TileWrapper ref={tileRef} hovered={hovered}>
      <StyledHeader as="h2" hovered={hovered} initialY="0%" finalY="30%">
        Deviculum
      </StyledHeader>
      <StyledSubHeader as="h3" hovered={hovered} initialY="0%" finalY="40%">
        Django - JavaScript
      </StyledSubHeader>
      <StyledSegment hovered={hovered}>
        <DeviculumChart />
      </StyledSegment>
      <ButtonWrapper hovered={hovered} initialy="0%" finalY="-500%">
        <StyledButton onClick={() => console.log("hi")}>
          Learn More
        </StyledButton>
      </ButtonWrapper>
    </TileWrapper>
  );
};
