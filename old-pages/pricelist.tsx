import Container from "@ui/Container";
import List from "@components/List/List";
import { roundJson, fancyJson } from "@components/List/ListConstants";
import WhatIsMethodology from "@components/WhatIsMethodology";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import PrivatePage from "@components/Page/PrivatePage";

type Props = {
  updatedAt: string;
  roundJson: typeof roundJson;
  fancyJson: typeof fancyJson;
};

const pricelist = ({ updatedAt }: Props) => {
  return (
    <PrivatePage>
      <Head>
        <title>Price List</title>
      </Head>
      <Container>
        <Section className="lg:flex lg:justify-between">
          <div>
            <Heading type="Subhead 03" className="uppercase">
              price list
            </Heading>
            <Heading type="Heading 02" className="uppercase">
              Welcome To Your Latest Price List{" "}
            </Heading>
            <Paragraph type="Paragraph 01" className="mt-2 text-lg">
              Last Updated {updatedAt}
            </Paragraph>
            <Paragraph className="mt-2 lg:max-w-[530px]">
              This pricelist contains estimated diamond reference prices based
              on our calculations and analysis. Whilst every effort has been
              made to ensure the pricelist accurately reflects diamond prices at
              the time of publication, we accepts no liability for any loss or
              damage caused in relying on the data contained therein. Actual
              transaction prices are subject to traders’ sole discretion. We do
              not guarantee and take no liability for the accuracy or validity
              of the prices presented in this pricelist. Diamond trading is
              subject to the trading parties’ discretion. Buyer and sellers
              shall use this price list at their own risk. Reproduction in any
              form is strictly prohibited. © 2020 by Lucy Platforms Ltd. All
              rights reserved.
            </Paragraph>
          </div>
          <div className="relative mt-16 h-96 w-full scale-125 lg:h-[auto] lg:w-[300px]">
            <Image
              src="/assets/images/iphone.svg"
              alt="DPL app"
              width={358}
              height={618}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Section>
        <Section>
          <List roundJson={roundJson} fancyJson={fancyJson} />
        </Section>
        <WhatIsMethodology />
      </Container>
    </PrivatePage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = {
    updatedAt: "May 1st, 2021",
    roundJson,
    fancyJson,
  };
  return {
    props,
  };
};

export default pricelist;
