import React from "react";

const GoBack = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} type="button">
      {"<"} Back
    </button>
  );
};

export default GoBack;
