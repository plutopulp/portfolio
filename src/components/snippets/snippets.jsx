import React from "react";
import { SnippetsHeading } from "./heading";
import { SnippetsBody } from "./body";
import { ResponsiveContainer } from "../layout/containers";

export const Snippets = () => (
  <ResponsiveContainer heading={<SnippetsHeading />} body={<SnippetsBody />} />
);
