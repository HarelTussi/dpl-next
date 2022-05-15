import React from "react";
import { clsx } from "@utils/index";
import { CLASSES, TYPES } from "./ButtonConstants";

type Props = {
  children: React.ReactNode;
  kind?: keyof typeof TYPES;
};

const Button = ({
  children,
  kind = "PRIMARY",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) => {
  return (
    <button className={clsx(CLASSES[kind], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
