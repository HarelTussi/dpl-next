import GuestPage from "@components/Page/GuestPage";
import Compare from "@components/Plans/Compare";
import Faqs from "@components/Plans/Faqs";
import Pricing from "@components/Plans/Pricing";
import Recommendations from "@components/Plans/Recommendations";
import Trusted from "@components/Plans/Trusted";
import React from "react";

type Props = {};

const plans = (props: Props) => {
  return (
    <GuestPage className="plans-page bg-[#E5E5E5] bg-opacity-50">
      <Pricing />
      <Trusted />
      <Recommendations />
      <Compare />
      <Faqs />
      <style global jsx>{`
        .plans-page * {
          font-family: var(--poppins) !important;
        }
      `}</style>
    </GuestPage>
  );
};

export default plans;
