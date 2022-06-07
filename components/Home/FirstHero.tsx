import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
import React from "react";

const FirstHero = () => {
  return (
    <Section className="lg:flex">
      <div>
        <Heading type="Subhead 04" className="uppercase">
          market insight
        </Heading>
        <Heading type="Display 02">
          THE FIRST REAL-TIME MARKET INSIGHTS PLATFORM
        </Heading>
        <Heading type="Subhead 01">
          Keeping the finger on the market’s pulse
        </Heading>
        <Paragraph className="mt-2">
          Get a live data analytics view of the industry&apos;s supply, demand,
          and pricing data of polished diamonds, as well as for your own
          business inventory.
        </Paragraph>
        <div className="my-4 grid gap-y-4 md:max-w-md md:grid-cols-2 md:gap-x-4">
          <a
            target="_blank"
            href="https://app.thediamondpricelist.com/"
            rel="noreferrer"
            className="pointer flex h-[56px] w-full items-center justify-center !rounded-none bg-black font-mullish text-white shadow-sm active:bg-primary-90 disabled:bg-primary-40 disabled:text-primary-60"
          >
            Take me there
          </a>
          <a
            target="_blank"
            href="https://calendly.com/dpl-insight/dpl-insight-demo"
            rel="noreferrer"
            className="disabled:opacity flex h-[56px] w-full items-center justify-center border border-b !border-primary-100 border-b-transparent bg-transparent font-bold text-primary-100 hover:border-b-primary-100"
          >
            Book a demo
          </a>
        </div>
      </div>
      <div className="relative mt-16 h-[200px] w-full md:w-96 lg:hidden">
        <Image
          src="/assets/images/hero-big-mobile.png"
          layout="fill"
          alt="DPL insights"
        />
      </div>
      <div className="relative hidden lg:block lg:w-[650px] lg:min-w-[650px]">
        <Image
          src="/assets/images/hero-big.png"
          layout="fill"
          alt="DPL insights"
        />
      </div>
    </Section>
  );
};

export default FirstHero;
