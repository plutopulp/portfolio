import React from "react";
import { ResumeHeading } from "./heading";
import { ResumeBody } from "./body";
import { ResponsiveContainer } from "../layout/containers";

export const Resume = () => (
  <ResponsiveContainer heading={<ResumeHeading />} body={<ResumeBody />} />
);
