import Container from "@components/Container";
import InfoBox from "@components/InfoBox";
import SectionSeperator from "@components/SectionSeperator";
import { BASE_URL } from "config";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface Props {
  availableDiamonds: string;
  suppliers: string;
  totalValue: string;
}

const about = ({ availableDiamonds, suppliers, totalValue }: Props) => {
  return (
    <div className="h-full">
      <Head>
        <title>About Us</title>
      </Head>
      <Container>
        {/* first section */}
        <div className="hero block pt-28 md:pt-48">
          <p className="mb-2 text-base font-bold text-primary-100">
            Who We Are
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary-100">
            About DPL
          </h2>
          <p className="max-w-[750px] text-base font-normal leading-6 text-primary-100">
            The DPL was designed and built by a separate, dedicated team within
            Lucy Platforms, a leading developer of e-commerce platforms for the
            diamond industry and is accessible to all members of the diamond
            trade at the Methodology Page.
            <br /> Lucy has created sophisticated online sales and management
            solutions, including unique B2B e-commerce platforms, that assist
            diamond traders in creating and managing their online presence.
            DPL’s team consists of experienced software developers and product
            managers as well as expert mathematicians and statisticians with
            vast experience in building complex systems for commercial and
            military use as well as for unique technology units.
            <br /> Lucy Platforms is a proud member of the Amazon AWS start-up
            program.
          </p>
        </div>
        <SectionSeperator />
        {/* stats */}
        <div className="stats block lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="mb-10 lg:mb-0">
            <h1 className="text-6xl font-bold md:text-8xl">
              {availableDiamonds}
            </h1>
            <h4 className="mt-2 text-xl font-normal">Available Diamonds</h4>
          </div>
          <div className="mb-10 lg:mb-0">
            <h1 className="text-6xl font-bold md:text-8xl">{suppliers}</h1>
            <h4 className="mt-2 text-xl font-normal">Registered Suppliers</h4>
          </div>
          <div className="mb-10 lg:mb-0">
            <h1 className="text-6xl font-bold md:text-8xl">{totalValue}</h1>
            <h4 className="mt-2 text-xl font-normal">Total Value</h4>
          </div>
        </div>
        <SectionSeperator />
        <div
          className="boxes grid max-w-lg grid-rows-[repeat(3,300px)] gap-y-4
                  lg:max-w-none lg:grid-cols-3 lg:grid-rows-[repeat(1,320px)] lg:gap-x-6 lg:px-16
                  xl:px-20"
        >
          {[
            {
              icon: "/assets/images/check.svg",
              title: "Objective + Reliable",
              text: "DPL’s A.I algorithms are programmed to follow strict, clear and transparent methodologies to ensure data integrity. This will be third-party verified by an independent expert institution.",
            },
            {
              icon: "/assets/images/plus-box.svg",
              title: "Smart + Accurate",
              text: "The DPL is based on advanced Machine Learning, Artificial Intelligence (AI) and Data Science, optimized to mathematically calculate and reflect current market pricing in the most accurate and objective manner.",
            },
            {
              icon: "/assets/images/trapeze.svg",
              title: "Accessible + Transparent",
              text: "The DPL and its methodology are transparent and accessible to all members of the diamond trade.",
            },
          ].map(({ title, text, icon }, index) => {
            return (
              <InfoBox
                key={index}
                icon={<Image alt="check" src={icon} width={32} height={32} />}
                title={title}
                text={text}
                textClassName="max-w-[90%]"
              />
            );
          })}
        </div>
        <SectionSeperator />
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/get-diamonds/stats`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const stats = await res.json();
  return {
    props: stats,
  };
};

export default about;
