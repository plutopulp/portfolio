import React from "react";
import { PDFObject } from "react-pdfobject";

const ResumeBody = () => {
  return (
    <React.Fragment>
      <PDFObject url="../media/resume.pdf" height="1200px" />
    </React.Fragment>
  );
};

export { ResumeBody };
