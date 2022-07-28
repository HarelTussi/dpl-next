import GuestPage from "@components/Page/GuestPage";
import Compare from "@components/Plans/Compare";
import Faqs from "@components/Plans/Faqs";
import Pricing from "@components/Plans/Pricing";
import Recommendations from "@components/Plans/Recommendations";
import Trusted from "@components/Plans/Trusted";
import Head from "next/head";
import React from "react";

type Props = {};

const plans = (props: Props) => {
  return (
    <GuestPage className="plans-page bg-[#E5E5E5] bg-opacity-50 !pt-[86px]">
      <Head>
        <title>Plans and Pricing</title>
      </Head>
      <Pricing />
      <Trusted />
      <Recommendations />
      <Compare />
      <Faqs />
      <style global jsx>{`
        .plans-page {
          background-color: rgba(229, 229, 229, 0.5);
        }

        .plans-page * {
          font-family: var(--poppins) !important;
        }

        @media screen and (min-width: 1024px) {
          .plans-page {
            background-color: rgba(255, 255, 255, 1);
          }

          .swiper-wrapper {
            display: flex;
            justify-content: center;
          }

          .swiper-slide-next {
            margin-right: 0 !important;
          }
        }
      `}</style>
    </GuestPage>
  );
};

export default plans;
