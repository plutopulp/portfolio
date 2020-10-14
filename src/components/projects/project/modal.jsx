import React from "react";
import { Modal } from "semantic-ui-react";
import { Card } from "./card";

const ProjectModal = ({ open, toggle, project }) => {
  return (
    <Modal open={open} closeIcon onClose={toggle}>
      <div>
        <Card project={project} />
      </div>
    </Modal>
  );
};

export { ProjectModal as Modal };
