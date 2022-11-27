import useMixpanel from "@hooks/useMixpanel";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { INISGHTS_CLIENT_URL } from "config";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { track } = useMixpanel();
  const onTakeMeThere = () => {
    track("InsightsEntranceStrip");
    // window && window.open(INISGHTS_CLIENT_URL);
    window && window.open(INISGHTS_CLIENT_URL, "self");
  };

  return (
    <Section className="flex-col lg:flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5, easings: ["easeInOut"] }}
      >
        <Heading
          type="Subhead 05"
          className="flex w-full items-center justify-center text-[#c2c2c2]"
        >
          DPL presents
        </Heading>
        <Heading
          type="Display 03"
          className="flex w-full items-center justify-center text-center text-[34px] font-bold leading-[46px] text-primary-80 md:text-[56px] md:leading-[62px]"
        >
          Empowering Polished Diamond Traders, <br />
          with Visual Data in REAL-TIME business
        </Heading>
        <Paragraph className="mx-auto mt-2 flex w-full max-w-[835px] items-center justify-center text-center text-primary-80">
          Get a live data analytics view of the industry’s supply, demand, and
          pricing data of polished diamonds, as well as for your own business
          inventory
        </Paragraph>
        <div className="mx-auto mt-6 grid gap-y-2 md:max-w-md md:grid-cols-2 md:gap-x-4">
          <button
            onClick={onTakeMeThere}
            className="pointer flex h-[52px] w-full min-w-[190px] items-center justify-center
             !rounded-[6px] bg-primary-70 font-mullish text-white transition-all duration-300 ease-linear hover:shadow-button-hover active:bg-primary-80 disabled:bg-primary-40 disabled:text-primary-60"
          >
            Take me there
          </button>
          <a
            target="_blank"
            href="https://calendly.com/dpl-insight/dpl-insight-demo"
            rel="noreferrer"
            className="disabled:opacity flex h-[52px] w-full min-w-[190px] items-center justify-center !rounded-[6px] border border-b !border-primary-70 border-b-transparent bg-primary-60 font-bold text-primary-70 transition-all duration-300 ease-linear hover:shadow-button-hover active:bg-primary-70 active:text-primary-60"
          >
            Book a demo
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5, easings: ["easeInOut"], delay: 0.5 }}
        className="relative mx-auto mt-[45px] h-[200px] w-full max-w-[350px] md:h-[500px] md:max-w-[820px]"
      >
        <Image
          src="/assets/images/hero-image.png"
          layout="fill"
          alt="DPL insights"
          className="h-full w-full max-w-[820px]"
        />
      </motion.div>
    </Section>
  );
};

export default Hero;

{
  /* <div>
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
            onClick={onTakeMeThere}
            className="pointer flex h-[56px] w-full items-center justify-center
             !rounded-none bg-black font-mullish text-white hover:bg-primary-90 active:bg-primary-90 disabled:bg-primary-40 disabled:text-primary-60"
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
      </div> */
}
