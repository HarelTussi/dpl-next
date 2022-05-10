import { clsx } from "@utils/index";
import styles from "./SectionSeperator.module.css";
type Props = {};

const SectionSeperator = (props: Props) => {
  return (
    <div className={clsx(styles.container, "py-8 sm:py-8 md:py-14")}></div>
  );
};

export default SectionSeperator;
