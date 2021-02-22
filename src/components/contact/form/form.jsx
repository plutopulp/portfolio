import React from "react";
import { Form, Button, Input, TextArea } from "semantic-ui-react";

import { FormContainer, FormTitle, FormSubText } from "./styles";

const ContactForm = () => {
  return (
    <FormContainer>
      <Form id="contact-form" inverted size="small">
        <Form.Field
          control={Input}
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <Form.Field
          control={Input}
          label="Email"
          type="text"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <Form.Field
          control={Input}
          label="Subject"
          type="text"
          name="subject"
          placeholder="Enter the subject of your message"
          required
        />
        <Form.Field
          control={TextArea}
          label="Message"
          type="text"
          name="message"
          placeholder="Enter your message"
          required
        />
        <Button type="submit" primary inverted>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
