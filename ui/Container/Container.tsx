import { clsx } from "@utils/index";

type Props = {
  children?: React.ReactNode;
  withLines?: boolean;
  className?: string;
};

const Container = ({ children, withLines = true, className = "" }: Props) => {
  return (
    <div
      className={clsx(
        "relative mx-auto px-4 md:px-8 lg:px-10 xl:px-14 2xl:max-w-7xl 2xl:px-0",
        className
      )}
    >
      <div className="relative z-20 w-full">{children}</div>
      {/* {withLines && (
        <div className="h-full w-full overflow-hidden">
          <div className="absolute top-0 left-0 z-0 grid h-full w-full grid-cols-6">
            {new Array(6).fill(0).map((_, index) => {
              return (
                <div
                  key={index}
                  className={[
                    "h-full border-l-0.5 border-l-gray opacity-50",
                    index === 5 ? "border-r-0.5 border-r-gray" : "",
                  ].join(" ")}
                ></div>
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Container;
