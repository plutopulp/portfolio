import React from "react";

const useFormField = (initialState) => {
  const [field, setField] = React.useState(initialState);

  const handleChange = (event) => setField(event.target.value);
  return [field, setField, handleChange];
};

const useFormFields = (initialState) => {
  const [fields, setFields] = React.useState(initialState);

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return [fields, setFields, handleChange];
};

export { useFormField, useFormFields };
