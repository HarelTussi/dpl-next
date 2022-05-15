import { clsx } from "@utils/index";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FieldLabel = ({
  children,
  className = "",
  ...rest
}: Props & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const classNames = clsx(
    "text-sm font-bold leading-[18px] text-primary-100 uppercase",
    className
  );
  return (
    <label className={classNames} {...rest}>
      {children}
    </label>
  );
};

export default FieldLabel;
