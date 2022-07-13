import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
import React from "react";
import CountUp from 'react-countup';

const data = [
  {
    content: 1.7,
    label: "Available Diamonds",
    prefix: "+",
    suffix: "M"
  },
  {
    content: 6.9,
    label: "Total Value",
    prefix: "$",
    suffix: "B"
  },
  {
    content: 4,
    label: "Suppliers",
    prefix: "+",
    suffix: "K"
  },
];

const Federation = () => {
  return (
    <Section className="flex-col lg:flex">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <div className="relative h-[80px] w-[140px]">
          <Image
            src="/assets/images/federation.svg"
            layout="fill"
            alt="DPL insights"
            className="h-full w-full"
          />
        </div>
        <Heading
          type="Display 03"
          className="font-poppins flex text-center text-[21px] font-bold text-primary-80 md:text-[34px]"
        >
          Trusted By The World Federation Of Diamond Bourses
        </Heading>
      </div>
      <div className="flex flex-col justify-center gap-8 md:flex-row md:gap-[70px]">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h1 className="text-[72px] font-bold text-primary-80">
              {/* {item.content} */}
              <CountUp decimals={1} delay={2} end={item.content} prefix={item.prefix} suffix={item.suffix} />
            </h1>
            <p className="text-primary-80 ">{item.label}</p>
          </div>
        ))}
      </div>
      <Paragraph className="mx-auto mt-6 max-w-[650px] w-full !text-sm !leading-[30px] text-center text-primary-80">
      DPL Insights is connected to multiple data sources as well as the world's largest data set of polished diamonds - GET-Diamonds
      </Paragraph>
      
    </Section>
  );
};

export default Federation;
