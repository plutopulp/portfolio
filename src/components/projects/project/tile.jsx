import React from "react";
import { Image } from "semantic-ui-react";

import { DeviculumChart } from "../deviculumChart/deviculumChart";
import { Modal } from "./modal";
import { useHover } from "../../../hooks/useHover";
import { useToggle } from "../../../hooks/useToggle";
import { StyledButton } from "../../common/styles/index";
import {
  TileWrapper,
  StyledHeader,
  StyledSubHeader,
  StyledSegment,
  ButtonWrapper,
} from "./styles";

export const Tile = ({ project }) => {
  const [hovered, tileRef] = useHover(false);
  const [modal, toggleModal] = useToggle(false);
  return (
    <TileWrapper ref={tileRef} hovered={hovered}>
      <StyledHeader as="h2" hovered={hovered} initialY="0%" finalY="30%">
        {project.title}
      </StyledHeader>
      <StyledSubHeader as="h3" hovered={hovered} initialY="0%" finalY="40%">
        {project.technologies.brief.join(" - ")}
      </StyledSubHeader>
      <StyledSegment hovered={hovered}>
        <TileImage title={project.title} src={project.tileImage} />
      </StyledSegment>
      <ButtonWrapper hovered={hovered} initialy="0%" finalY="-500%">
        <StyledButton onClick={toggleModal}>Learn More</StyledButton>
      </ButtonWrapper>
      <Modal open={modal} toggle={toggleModal} project={project} />
    </TileWrapper>
  );
};

const TileImage = ({ title, src }) =>
  title === "Deviculum" ? <DeviculumChart /> : <Image src={src} />;
