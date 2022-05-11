import { clsx } from "@utils/index";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: React.ReactNode;
  text: React.ReactNode;
  iconClassName?: string;
  titleClassName?: string;
  textClassName?: string;
};

const InfoBox = ({
  icon,
  title,
  text,
  iconClassName = "",
  titleClassName = "",
  textClassName = "",
}: Props) => {
  return (
    <div
      className="flex flex-col items-center rounded-md border border-primary-30 bg-white py-10
    text-center
    "
    >
      <div className={clsx("mb-2 h-12", iconClassName)}>{icon}</div>
      <h4 className={clsx("text-xl font-bold", titleClassName)}>{title}</h4>
      <p
        className={clsx(
          "mt-4 max-w-[90%] text-base font-normal text-primary-100",
          textClassName
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default InfoBox;
