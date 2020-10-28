import React from "react";
import { PDFObject } from "react-pdfobject";
import { Modal } from "semantic-ui-react";

export const Resume = ({ open, handleClose }) => {
  return (
    <Modal open={open} closeIcon onClose={handleClose}>
      <PDFObject url="../media/resume.pdf" height="1200px" />
    </Modal>
  );
};
