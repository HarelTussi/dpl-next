import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const logos = [
  {
    name: "wfdb",
    path: "/assets/logos/wfdb.png",
  },
  {
    name: "hennig",
    path: "/assets/logos/hennig.png",
  },
  {
    name: "rosy-blue",
    path: "/assets/logos/rosy-blue.png",
  },
  {
    name: "dharm",
    path: "/assets/logos/dharm.png",
  },
  {
    name: "venus",
    path: "/assets/logos/venus.png",
  },
  {
    name: "get-diamonds",
    path: "/assets/logos/get-diamonds.png",
  },
  {
    name: "gia",
    path: "/assets/logos/gia.png",
  },
  {
    name: "lucy",
    path: "/assets/logos/lucy.png",
  },
  {
    name: "pluczenik",
    path: "/assets/logos/pluczenik.png",
  },
];

const Industry = () => {
  return (
    <>
      <Section
        //   className={`w-[500%] -ml-[200%] bg-primary-60 p-[22px] md:p-[75px] relative lg:flex`}
        //   className={`!w-[${windowWidth}px] bg-primary-60 p-[75px] !-translate-x-[${translate}px] lg:flex`}
        className="flex-col lg:flex"
      >
        <Heading
          type="Display 03"
          className="font-poppins w-full text-center text-[21px] font-bold text-primary-80 md:mx-auto md:text-[27px]"
        >
          Trusted by the Leading Industry Professionals
        </Heading>

        {/* <div className="w-full grid grid-rows-2 grid-cols-5 auto-rows-max mt-[60px]">
        {logos.map(logo => <div className="relative w-full h-full flex items-center justify-center">
        <Image
            src={logo.path}
            layout="fixed"
            alt={logo.name}
            className="h-full w-full"
            key={logo.name}
            width="100%"
            height="100%"
          />
          </div>)}
      </div> */}

        <div className="mt-[40px] flex w-full gap-2 overflow-x-auto md:mt-[60px] md:hidden">
          {logos.map((logo, i) => (
            <div
              className="relative flex h-full w-full items-center justify-center"
              key={i}
            >
              <Image
                src={logo.path}
                layout="fixed"
                alt={logo.name}
                className="h-full w-full"
                key={logo.name}
                width="180px"
                height="100%"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-[60px] hidden w-full max-w-[900px] flex-col md:flex">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <Image
              src="/assets/logos/wfdb.png"
              layout="fixed"
              alt="wfdb"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/hennig.png"
              layout="fixed"
              alt="hennig"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/rosy-blue.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/dharm.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/venus.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
          </div>
          <div className="mx-auto mt-[60px] flex w-[80%] flex-col justify-between md:flex-row">
            <Image
              src="/assets/logos/get-diamonds.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/gia.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/lucy.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
            <Image
              src="/assets/logos/pluczenik.png"
              layout="fixed"
              alt="rosy"
              className="h-full w-full"
              width="180px"
              height="100%"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Industry;
