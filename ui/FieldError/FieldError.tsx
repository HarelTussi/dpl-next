import Paragraph from "@ui/Paragraph";
import React from "react";

type Props = {
  error?: string;
};

const FieldError = ({ error }: Props) => {
  return <Paragraph className="text-error-50">{error}</Paragraph>;
};

export default FieldError;
