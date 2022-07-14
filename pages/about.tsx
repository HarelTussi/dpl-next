import Container from "@ui/Container";
import InfoBox from "@components/InfoBox";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { api } from "api";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import GuestPage from "@components/Page/GuestPage";
import CountUp from "react-countup";
import { numberWithCommas } from "@utils/index";

interface Props {
  availableDiamonds: number;
  suppliers: number;
  totalValue: number;
}

const about = ({ availableDiamonds, suppliers, totalValue }: Props) => {
  return (
    <GuestPage classNames="bg-[url('/assets/images/guest-bg.png')] lg:bg-cover">
      <Head>
        <title>About Us</title>
      </Head>
      <Container>
        {/* first section */}
        <Section className="hero block">
          <Heading type="Subhead 04" className="uppercase">
            Who We Are
          </Heading>
          <Heading type="Heading 02" className="mb-2">
            About DPL
          </Heading>
          <Paragraph type="Paragraph 01" className="max-w-[750px]">
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
          </Paragraph>
        </Section>
        {/* stats */}
        <Section className="stats block lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="mb-10 lg:mb-0 lg:flex lg:flex-col lg:items-center">
            <Heading type="Display 01">
              <CountUp
                end={availableDiamonds}
                duration={1}
                formattingFn={(n) => "+" + (n / 1000000).toFixed(1) + "M"}
              />
            </Heading>
            <Heading type="Subhead 01" className="font-normal">
              Available Diamonds
            </Heading>
          </div>
          <div className="mb-10 lg:mb-0 lg:flex lg:flex-col lg:items-center">
            <Heading type="Display 01">
              <CountUp
                end={suppliers}
                duration={1}
                formattingFn={(n) => "+" + (n / 1000).toFixed(1) + "K"}
              />
            </Heading>
            <Heading type="Subhead 01" className="font-normal">
              Supplier
            </Heading>
          </div>
          <div className="mb-10 lg:mb-0 lg:flex lg:flex-col lg:items-center">
            <Heading type="Display 01">
              <CountUp prefix="$" suffix="B" end={totalValue} duration={1} />
            </Heading>

            <Heading type="Subhead 01" className="font-normal">
              Total Value
            </Heading>
          </div>
        </Section>
        <Section
          className="boxes grid max-w-lg gap-y-4
                  lg:max-w-none lg:grid-cols-3  lg:gap-x-6 lg:px-16
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
              <InfoBox key={index} icon={icon} title={title} text={text} />
            );
          })}
        </Section>
      </Container>
    </GuestPage>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stats = await api.GD.getDiamondsStats();
  return {
    props: stats,
  };
};

export default about;
