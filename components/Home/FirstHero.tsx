import useMixpanel from "@hooks/useMixpanel";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { INISGHTS_CLIENT_URL } from "config";
import Image from "next/image";
import React from "react";

const FirstHero = () => {
  const { track } = useMixpanel();
  const onTakeMeThere = () => {
    track("InsightsEntranceStrip");
    window && window.open(INISGHTS_CLIENT_URL);
  };

  return (
    <Section className="lg:flex">
      <div>
        <Heading type="Subhead 04" className="uppercase">
          market insight
        </Heading>
        <Heading type="Display 02" className="mb-2">
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
        <div className="my-6 grid gap-y-4 md:max-w-md md:grid-cols-2 md:gap-x-4">
          <button
            disabled
            onClick={onTakeMeThere}
            className="pointer flex !hidden h-[56px] w-full items-center
             justify-center !rounded-none bg-black font-mullish text-white hover:bg-primary-90 active:bg-primary-90 disabled:bg-primary-40 disabled:text-primary-60"
          >
            Take me there
          </button>
          <a
            target="_blank"
            href="https://calendly.com/dpl-insight/dpl-insight-demo"
            rel="noreferrer"
            className="disabled:opacity flex h-[56px] w-full items-center justify-center border border-b !border-primary-100 border-b-transparent bg-white font-bold text-primary-100 hover:border-b-primary-100"
          >
            Book a demo
          </a>
        </div>
      </div>
      <div className="relative mt-8 h-[252px] w-full md:mt-16 md:h-[290px] md:w-96 lg:hidden">
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
