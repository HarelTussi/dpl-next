import FieldLabel from "@ui/FieldLabel";
import Paragraph from "@ui/Paragraph";
import { clsx } from "@utils/index";
import React from "react";
import { TYPES } from "./TextFieldConstants";

type Props = {
  kind?: keyof typeof TYPES;
  name: string;
  label?: string;
  fieldClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  error?: string;
  touched?: boolean;
};

const TextField = ({
  kind = "Text",
  name = "",
  label = "",
  fieldClassName = "",
  labelClassName = "",
  inputClassName = "",
  value = "",
  error = "",
  touched = false,
  ...rest
}: Props & React.HTMLAttributes<HTMLInputElement>) => {
  const showError = !!touched && !!error;
  const fieldClassNames = clsx("block relative", fieldClassName);
  const labelClassNames = clsx("block", labelClassName);
  const inputClassNames = clsx(
    `block h-12 bg-primary-30 pl-4
  text-base leading-5
  placeholder:text-primary-90 placeholder:opacity-40 rounded-md`,
    fieldClassName,
    inputClassName,
    showError ? "border border-error-50 placeholder" : ""
  );
  const textareClassNames = clsx(
    `block h-12 bg-primary-30 pl-4
  text-base leading-5
  placeholder:text-primary-90 placeholder:opacity-40 rounded-md pt-4`,
    fieldClassName,
    inputClassName,
    showError ? "border border-error-50" : ""
  );
  return (
    <div className={fieldClassNames}>
      {!!label && (
        <FieldLabel htmlFor={name} className={labelClassNames}>
          {label}
        </FieldLabel>
      )}
      {kind === "Text" && (
        <input value={value} className={inputClassNames} {...rest} />
      )}
      {kind === "Text Area" && (
        <textarea
          value={value}
          className={textareClassNames}
          {...(rest as any)}
        />
      )}
      {showError && <Paragraph className="text-error-50">{error}</Paragraph>}
    </div>
  );
};

export default TextField;
