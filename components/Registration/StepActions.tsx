import Button from "@ui/Button";
import Paragraph from "@ui/Paragraph";
import React from "react";

type Props = {
  withBack?: boolean;
  onBack?: () => void;
  nextChildren?: React.ReactNode;
};

const StepActions = ({
  withBack = true,
  onBack = () => {},
  nextChildren,
}: Props) => {
  return (
    <div
      className="mt-4 flex w-full
      flex-col-reverse md:flex md:flex-row md:items-center
      md:justify-between
      "
    >
      <Paragraph
        onClick={onBack}
        className={
          !withBack
            ? "pointer-events-none h-0 opacity-0"
            : "mt-4 flex w-full items-center justify-center md:w-fit"
        }
      >
        {"<"} Back
      </Paragraph>
      <Button type="submit" className="h-[56px] w-full md:max-w-[200px]">
        {nextChildren ?? <>Next Step {">"}</>}
      </Button>
    </div>
  );
};

export default StepActions;
