import React from "react";
import { clsx } from "@utils/index";

type Props = {
  type?: "horizontal" | "vertical";
};

const Divider = ({
  type = "horizontal",
  className = "",
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  if (type === "horizontal")
    return (
      <div
        className={clsx("my-10 h-[0.5px] w-full bg-primary-40", className)}
        {...rest}
      />
    );
  return (
    <div
      className={clsx("h-full w-[0.5px] bg-primary-40", className)}
      {...rest}
    />
  );
};

export default Divider;
