import { clsx } from "@utils/index";
import { TYPES, CLASSES } from "./SpacerConstants";

interface Props {
  type?: keyof typeof TYPES;
  className?: string;
}

const Spacer = ({ type = "Between Sections", className = "" }: Props) => {
  const classNames = clsx(CLASSES[type], className);
  return <div className={classNames}></div>;
};

export default Spacer;
