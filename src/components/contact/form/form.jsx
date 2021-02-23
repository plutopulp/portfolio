import React from "react";
import { Form, Button, Input, TextArea } from "semantic-ui-react";

import { FormContainer, FormTitle, FormSubText } from "./styles";
import { ErrorMessage, InvalidMessage, SuccessMessage } from "./messages";

const ContactForm = ({
  mobile,
  fields,
  errors,
  formSuccess,
  formError,
  formValid,
  formSubmitted,
  handleSubmit,
  handleChange,
}) => {
  return (
    <FormContainer mobile={mobile}>
      <Form
        id="contact-form"
        inverted
        onSubmit={handleSubmit}
        success={formSuccess}
        error={formError}
      >
        {formSubmitted && (
          <React.Fragment>
            <SuccessMessage show={formSuccess} />
            <InvalidMessage show={!formValid} />
            <ErrorMessage show={formError} />
          </React.Fragment>
        )}
        <Form.Field
          control={Input}
          label="Name"
          type="text"
          name="name"
          error={!errors["nameError"] ? false : errors["nameError"]}
          placeholder="Enter your name"
          required
          value={fields.name}
          onChange={(event) =>
            handleChange(event, {
              errorName: "nameError",
              errorType: "textError",
              minChars: 3,
            })
          }
        />
        <Form.Field
          control={Input}
          label="Email"
          type="text"
          name="email"
          error={!errors["emailError"] ? false : errors["emailError"]}
          placeholder="Enter your email address"
          required
          value={fields.email}
          onChange={(event) =>
            handleChange(event, {
              errorName: "emailError",
              errorType: "emailError",
            })
          }
        />
        <Form.Field
          control={Input}
          label="Subject"
          type="text"
          name="subject"
          error={!errors["subjectError"] ? false : errors["subjectError"]}
          placeholder="Enter the subject of your message"
          required
          value={fields.subject}
          onChange={(event) =>
            handleChange(event, {
              errorName: "subjectError",
              errorType: "textError",
              minChars: 5,
            })
          }
        />
        <Form.Field
          control={TextArea}
          label="Message"
          type="text"
          name="message"
          error={!errors["messageError"] ? false : errors["messageError"]}
          placeholder="Enter your message"
          required
          value={fields.message}
          onChange={(event) =>
            handleChange(event, {
              errorName: "messageError",
              errorType: "textError",
              minChars: 30,
            })
          }
        />
        <Button type="submit" primary inverted>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
