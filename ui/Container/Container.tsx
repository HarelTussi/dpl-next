import { clsx } from "@utils/index";

type Props = {
  children?: React.ReactNode;
  withLines?: boolean;
  className?: string;
  innerClassName?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={clsx(
        "relative mx-auto px-4 md:px-8 lg:px-10 xl:px-14 2xl:max-w-7xl 2xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
