import React from "react";
import { ProjectsHeading } from "./heading";
import { ProjectsBody } from "./body";
import { ResponsiveContainer } from "../layout/containers";

export const Projects = () => (
  <ResponsiveContainer heading={<ProjectsHeading />} body={<ProjectsBody />} />
);
