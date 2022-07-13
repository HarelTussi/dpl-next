import { clsx } from "@utils/index";
import { INISGHTS_CLIENT_URL } from "config";
import React, { HtmlHTMLAttributes } from "react";

const GetTheList = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={clsx(
        "pointer flex items-center justify-center bg-black font-mullish text-white shadow-sm hover:bg-primary-90 active:bg-primary-90 disabled:bg-primary-40 disabled:text-primary-60",
        className
      )}
      href={INISGHTS_CLIENT_URL + "/pricelist"}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      Get The List
    </a>
  );
};

export default GetTheList;
