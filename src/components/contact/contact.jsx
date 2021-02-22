import React from "react";
import PropTypes from "prop-types";
import { useContextRef } from "react-context-refs";

import { Header } from "../common/headers";

import { MainContainer, MainSegmentWhite } from "../common/styles/index";
import ContactForm from "./form/form";

export const Contact = ({ mobile }) => {
  const ref = useContextRef("section", { name: "contact" });
  return (
    <div id="contact" ref={ref}>
      <MainSegmentWhite vertical id="skills">
        <Header title="GET IN TOUCH" mobile={mobile} />
        <MainContainer>
          <ContactForm />
        </MainContainer>
      </MainSegmentWhite>
    </div>
  );
};

Contact.propTypes = {
  mobile: PropTypes.bool,
};
