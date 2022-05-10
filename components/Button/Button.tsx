import React from "react";
import { clsx } from "@utils/index";

type Props = {
  children: React.ReactNode;
  kind?: keyof typeof styles;
};

const styles = {
  primary:
    "flex items-center justify-center pointer bg-black text-white font-mullish rounded-md disabled:bg-primary-40 disabled:text-primary-60 active:bg-primary-90 shadow-sm",
  secondary:
    "flex items-center justify-center bg-transparent text-primary-100 font-bold hover:border-b-primary-100 border-b-transparent border-b-2 disabled:opacity",
};

const Button = ({
  children,
  kind = "primary",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) => {
  return (
    <button className={clsx(styles[kind], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
