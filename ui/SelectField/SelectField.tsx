import FieldError from "@ui/FieldError";
import FieldLabel from "@ui/FieldLabel";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./SelectField.module.css";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
});
import { Props as SelectProps } from "react-select";
import { clsx } from "@utils/index";

type Props = {
  label?: string;
  labelClassName?: string;
  touched?: boolean;
  error?: string;
} & SelectProps;

const SelectField = ({
  label,
  labelClassName,
  touched,
  error,
  ...rest
}: Props) => {
  const showError = !!touched && !!error;
  return (
    <div className={styles.container}>
      {!!label && (
        <FieldLabel htmlFor={rest.name} className={labelClassName}>
          {label}
        </FieldLabel>
      )}
      <Select
        {...rest}
        className={clsx("ui-select", showError ? "ui-select--error" : "")}
        classNamePrefix="ui-select"
      />
      {showError && <FieldError error={error} />}
    </div>
  );
};

export default SelectField;
