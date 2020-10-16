import React from "react";
import PropTypes from "prop-types";
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
      <StyledHeader as="h1" hovered={hovered} initialY="0%" finalY="25%">
        {project.title}
      </StyledHeader>
      <StyledSubHeader as="h3" hovered={hovered} initialY="0%" finalY="40%">
        {project.technologies.brief.join(" - ")}
      </StyledSubHeader>
      <StyledSegment hovered={hovered}>
        <TileImage title={project.title} src={project.tileImage} />
      </StyledSegment>
      <ButtonWrapper hovered={hovered} initialy="0%" finalY="-400%">
        <StyledButton onClick={toggleModal}>Learn More</StyledButton>
      </ButtonWrapper>
      <Modal open={modal} toggle={toggleModal} project={project} />
    </TileWrapper>
  );
};

Tile.propTypes = {
  project: PropTypes.object.isRequired,
};

const TileImage = ({ title, src }) =>
  title === "Deviculum" ? <DeviculumChart /> : <Image src={src} />;

TileImage.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
