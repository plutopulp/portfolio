import React from "react";
import { PDFObject } from "react-pdfobject";
import { Modal } from "semantic-ui-react";

const ResumeBody = () => {
  return (
    <Modal open closeIcon>
      <PDFObject url="../media/resume.pdf" height="1200px" />
    </Modal>
  );
};

export { ResumeBody };
