import React from "react";
type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return <div className={"h-full pt-[120px]"}>{children}</div>;
};

export default Page;
