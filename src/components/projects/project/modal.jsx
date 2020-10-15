import React from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import { Slider } from "./slider";
import { Card } from "./card";

const ProjectModal = ({ open, toggle, project }) => {
  return (
    <Modal open={open} closeIcon onClose={toggle}>
      <Slider media={project.sliderMedia} />
      <Card project={project} />
    </Modal>
  );
};

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export { ProjectModal as Modal };
