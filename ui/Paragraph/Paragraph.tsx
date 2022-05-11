import { clsx } from "@utils/index";
import React from "react";
import { TYPES, CLASSES } from "./ParagraphConstants";

type Props = {
  type?: keyof typeof TYPES;
  className?: string;
  children?: React.ReactNode;
};

const Paragraph = ({
  type = "Paragraph 01",
  className = "",
  children = null,
  ...rest
}: Props & React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  const classNames = clsx(CLASSES[type], className);
  const Element = React.createElement(
    TYPES[type],
    { className: classNames, ...rest },
    children
  );
  return Element;
};

export default Paragraph;
