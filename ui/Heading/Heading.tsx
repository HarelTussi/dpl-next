import { clsx } from "@utils/index";
import React from "react";
import { TYPES, CLASSES } from "./HeadingConstants";

type Props = {
  type: keyof typeof TYPES; // test
  className?: string;
  children?: React.ReactNode;
};

const Heading = ({
  type,
  className = "",
  children = null,
  ...rest
}: Props & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  const classNames = clsx(
    CLASSES[type],
    className,
    `ui-heading-${TYPES[type]}`
  );
  const Element = React.createElement(
    TYPES[type],
    { className: classNames, ...rest },
    children
  );
  return Element;
};

export default Heading;
