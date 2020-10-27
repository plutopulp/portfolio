import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Modal } from "semantic-ui-react";
import { Slider } from "./slider";
import { Card } from "./card/card";

const StyledCaption = styled.div`
  color: #4c4cd590;
  font-weight: 600;
  font-size: 1.25em;
  text-align: center;
`;

const BodyWrapper = styled.div`
  margin: 4em 7.5%;
  color: #333;
`;

// Known issues with the withCaption HOC of the awesome-slider library.
// So implement own caption scheme using an event prop provided by the slider
const ProjectModal = ({ open, toggle, project }) => {
  const { sliderMedia } = project;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleSliderTransition = (sliderRef) =>
    setCurrentSlide(sliderRef.currentIndex);
  return (
    <Modal open={open} closeIcon onClose={toggle}>
      <Slider media={sliderMedia} onTransition={handleSliderTransition} />
      <BodyWrapper>
        <StyledCaption>{sliderMedia[currentSlide].caption}</StyledCaption>
        <Card project={project} />
      </BodyWrapper>
    </Modal>
  );
};

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export { ProjectModal as Modal };
