import React from "react";
import { SnippetCardContainer as SnippetCard } from "../snippetCard";
import { Container, Form, Message } from "semantic-ui-react";
import { hasValidBraces } from "./algorithm";

const ValidBracesCard = () => (
  <SnippetCard
    header="Valid Braces?"
    meta="Algorithms, Recursion"
    description="Check whether a string has valid braces"
    modalContent={<ModalContent />}
  />
);

const ModalContent = () => <UserInputContainer />;

const UserInputContainer = () => {
  const [input, setInput] = React.useState("");
  const [testPassed, setTestPassed] = React.useState(false);

  React.useEffect(() => {
    setTestPassed(hasValidBraces(input));
  }, [input]);

  const handleChange = (event) => setInput(event.target.value);

  return (
    <UserInput input={input} onChange={handleChange} testPassed={testPassed} />
  );
};

const UserInput = ({ input, onChange, testPassed }) => (
  <Container>
    <Form
      style={{ padding: "4em" }}
      success={testPassed && input}
      error={!testPassed}
    >
      <Message
        error
        header="Braces are invalid!"
        content="Try another combination"
      />
      <Message success header="Braces are valid!" />
      <Form.Input
        label="Check for valid braces"
        type="text"
        placeholder="Enter a string"
        value={input}
        name="input"
        onChange={onChange}
      />
    </Form>
  </Container>
);
export { ValidBracesCard };
