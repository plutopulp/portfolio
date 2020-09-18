import React from "react";
import { SnippetCardContainer as SnippetCard } from "../snippetCard";
import { Card } from "semantic-ui-react";

const ValidBracesCard = () => (
  <SnippetCard
    header="Valid Braces?"
    meta="Algorithms, Recursion"
    description="Check whether a string has valid braces"
    modalContent={<ModalContent />}
  />
);

const ModalContent = () => (
  <Card fluid>
    <Card.Content header="Valid Braces?" />
  </Card>
);
export { ValidBracesCard };
