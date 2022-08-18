import React from "react";
import { Button } from "react-daisyui";
import { useFormikContext } from "formik";

export default function AppSubmitButton({ title, ...rest }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} {...rest}>
      {title}
    </Button>
  );
}
