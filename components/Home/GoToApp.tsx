import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";
import AppStore from "../../assets/apple-store.svg";
import GoogleStore from "../../assets/google-play.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import Image from "next/image";

const steps = [
  { step: "24 hour access to the most up to date price list" },
  { step: "Explore powerful, unique, trade support functionalities" },
  { step: "Search and share GIA certificates directly within the app" },
];

const GoToApp = () => {
  return (
    <Section className="lg:flex lg:justify-between lg:px-40">
      <div>
        <Heading type="Heading 01">Go Straight To App</Heading>
        <Heading type="Subhead 03" className="mt-4">
          The most advanced, easy to use, diamond-price calculator:
        </Heading>
        <div className="mt-4">
          {steps.map(({ step }, index) => {
            return (
              <div
                key={index}
                className={[
                  "relative flex  pl-4",
                  index !== steps.length - 1 ? "h-[80px]" : "",
                ].join(" ")}
              >
                <span className="absolute -left-[10px] top-[2px] h-[20px] w-[20px] rounded-full bg-black"></span>
                <Paragraph className="-mt-[8 px] relative -top-[1px] max-w-[290px]">
                  {step}
                </Paragraph>
              </div>
            );
          })}
        </div>

        <Heading type="Subhead 03" className="mt-4 flex items-center">
          Learn More <ChevronRight />
        </Heading>
      </div>

      <div>
        <div className="relative mt-10 h-[500px] md:max-w-[300px] lg:mt-0">
          <Image src="/assets/images/iphone.svg" layout="fill" alt="DPL App" />
        </div>
        <div
          className="-mt-4 flex items-center justify-between md:max-w-[400px] 
        lg:max-w-[330px]  
        "
        >
          <a
            href="https://apps.apple.com/il/app/lucy-calculator/id1522203901"
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <AppStore />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.DiamondPrice.DiamondPrice"
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <GoogleStore />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default GoToApp;
