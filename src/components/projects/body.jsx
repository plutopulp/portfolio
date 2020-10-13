import React from "react";
import uuid from "react-uuid";
import { Card } from "semantic-ui-react";

import { ProjectCard } from "./projectCard";

import { projectsContent } from "./content";
import { Grid } from "./grid";

const ProjectsBody = () => <Grid />;

const ProjectCardGroup = () => (
  <Card.Group stackable itemsPerRow={2} centered>
    {projectsContent.map((project) => {
      return <ProjectCard key={uuid()} {...project} />;
    })}
  </Card.Group>
);

export { ProjectsBody };
