import AppStoreLink from "@components/AppStoreLink";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";

const Hero = () => {
  return (
    <Section>
      <Heading type="Subhead 03">DPL Mobile Application</Heading>
      <Heading type="Heading 02" className="mt-2">
        Introduction
      </Heading>
      <Paragraph className="mt-2 mb-4">
        The DPL™ Diamond Calculator, available in the app stores for all Apple
        and Android devices, is the most transparent, objective and
        technologically advanced polished diamond price guide the diamond
        community has ever seen. Built in consultation with stakeholders
        throughout all levels of the supply chain, the app will help to simplify
        and condense the steps a diamantaire must take to achieve a final price.
      </Paragraph>
      <Paragraph>
        Data used to populate the DPL™ Diamond Calculator comes from the world’s
        largest database of polished diamonds – it pulls from 1.3 million
        diamonds, from over 4,300 sources suppliers – making it highly accurate.
        The app features the ability to calculate diamond prices by selecting
        from a multitudeof different parameters, allows the user to decide what
        discount percentage to add, and makes it especially easy to share the
        most up to date results with colleagues and customers.
      </Paragraph>
      <div className="mt-4 grid gap-y-4 md:max-w-[400px] md:grid-cols-[repeat(2,160px)] md:gap-x-4">
        <AppStoreLink type="apple" className="h-[56px]" />
        <AppStoreLink type="google" className="h-[56px] " />
      </div>
    </Section>
  );
};

export default Hero;
