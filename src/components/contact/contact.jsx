import React from "react";
import PropTypes from "prop-types";
import { useContextRef } from "react-context-refs";
import emailjs from "emailjs-com";

import { Header } from "../common/headers";

import { useFormFieldsWithErrors } from "../../hooks/useFormFieldsWithErrors";
import { useFormValid } from "../../hooks/useFormValid";
import { MainContainer, MainSegmentGrey } from "../common/styles/index";
import ContactForm from "./form/form";

const initialFields = {
  name: "",
  subject: "",
  email: "",
  message: "",
};
const initialFieldErrors = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export const Contact = ({ mobile }) => {
  const ref = useContextRef("section", { name: "contact" });
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(false);
  const [formError, setFormError] = React.useState(false);
  const [fields, setFields, errors, , handleChange] = useFormFieldsWithErrors(
    initialFields,
    initialFieldErrors,
    formSubmitted,
    setFormSubmitted
  );
  const formValid = useFormValid(fields, errors);

  // Callback on successful contact creation
  const handleEmailSuccess = () => {
    setFields(initialFields);
    setFormSuccess(true);
  };

  // Callback on unsuccessful contact creation
  const handleEmailError = () => {
    setFormError(true);
  };

  const handleSubmit = (event) => {
    setFormSubmitted(true);
    event.preventDefault();
    if (!formValid) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        event.target,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then(
        () => {
          handleEmailSuccess();
        },
        () => {
          handleEmailError();
        }
      );
  };
  return (
    <div id="contact" ref={ref}>
      <MainSegmentGrey vertical id="skills">
        <Header title="GET IN TOUCH" mobile={mobile} color="#bbb" />
        <MainContainer>
          <ContactForm
            mobile={mobile}
            fields={fields}
            errors={errors}
            formSuccess={formSuccess}
            formValid={formValid}
            formError={formError}
            formSubmitted={formSubmitted}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </MainContainer>
      </MainSegmentGrey>
    </div>
  );
};

Contact.propTypes = {
  mobile: PropTypes.bool,
};
