import { clsx } from "@utils/index";
import React from "react";
import styles from "./Section.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: Props) => {
  const classNames = clsx("ui-section", styles.container, className);
  return <div className={classNames}>{children}</div>;
};

export default Section;
