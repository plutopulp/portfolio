import React from "react";
import uuid from "react-uuid";

import { ProjectCard } from "./projectCard";

import { projectsContent } from "./content";

const ProjectsBody = () => <ProjectCardList />;

const ProjectCardList = () => (
  <React.Fragment>
    {projectsContent.map((project, index) => {
      return <ProjectCard key={uuid()} {...project} />;
    })}
  </React.Fragment>
);

export { ProjectsBody };
