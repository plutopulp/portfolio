import React from "react";
import { PDFObject } from "react-pdfobject";
import { Modal } from "semantic-ui-react";

const ResumeBody = () => {
  return <PDFObject url="../media/resume.pdf" height="1200px" />;
};

export { ResumeBody };
