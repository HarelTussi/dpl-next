import GuestPage from "@components/Page/GuestPage";
import Compare from "@components/Plans/Compare";
import Faqs from "@components/Plans/Faqs";
import Pricing from "@components/Plans/Pricing";
import Recommendations from "@components/Plans/Recommendations";
import Trusted from "@components/Plans/Trusted";
import type { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import React from "react";
import xlsx from "xlsx";

export type PlansContent = {
  firstSectionHeader: string;
  firstSectionTitle: string;
  firstSectionbutton1: string;
  firstSectionbutton2: string;
  firstSectionSubTitle: string;
  secondSectionHeader: string;
  secondSectionDescription: string;
  secondSectionButton: string;
  secondSectionHeader1: string;
  secondSectionFeature1: string;
  secondSectionFeature2: string;
  secondSectionFeature3: string;
  secondSectionFeature4: string;
  thirdSectionHeader: string;
  thirdSectionTitle: string;
  thirdSectionSubTitle: string;
  thirdSectionDescriptionMain1: string;
  thirdSectionDescription1: string;
  thirdSectionDescription2: string;
  thirdSectionDescription3: string;
  thirdSectionDescription4: string;
  thirdSectionDescription5: string;
  thirdSectionDescriptionMain2: string;
  thirdSectionDescriptionA: string;
  thirdSectionDescriptionB: string;
  thirdSectionDescriptionC: string;
  thirdSectionDescriptionD: string;
  thirdSectionDescriptionE: string;
};

export type Props = {
  content: PlansContent;
  faqs: { question: string; answer: string }[];
};

const PlansContentContext = React.createContext<null | {
  content: PlansContent;
  faqs: { question: string; answer: string }[];
}>(null);

export const usePlansContent = () => {
  const context = React.useContext(PlansContentContext);
  if (!context) throw new Error("Must be inside plans provider");
  return context;
};

const plans = ({ content, faqs }: Props) => {
  return (
    <PlansContentContext.Provider value={{ content, faqs }}>
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
    </PlansContentContext.Provider>
  );
};

const getPlansContent = async () => {
  const content: any = {};
  const workbook = xlsx.readFile(
    path.join(process.cwd(), "assets/texts/pricing/pricing.xlsx")
  );
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any = xlsx.utils.sheet_to_json(worksheet, {
    header: 1,
  });
  rows.forEach(([key, value]: any) => {
    content[key] = value;
  });
  return content;
};

const getPlansFaqContent = () => {
  const faqs: any = [];
  const workbook = xlsx.readFile(
    path.join(process.cwd(), "assets/texts/pricing/faq.xlsx")
  );
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any = xlsx.utils.sheet_to_json(worksheet, {
    header: 1,
  });
  rows.forEach(([key, value]: any) => {
    faqs.push({ question: key, answer: value });
  });
  return faqs;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const content = await getPlansContent();
  const faqs = await getPlansFaqContent();
  return {
    props: {
      content,
      faqs,
    },
  };
};

export default plans;
