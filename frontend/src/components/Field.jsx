import React from 'react';
import {FloatingLabel, Form} from "react-bootstrap";

const Field = ({ value, label, ...props }) => {
  return (
    <FloatingLabel
      label={label}
      {...props}
    >
      <Form.Control
        value={value}
        placeholder={label}
        disabled
      />
    </FloatingLabel>
  );
};

export default Field;