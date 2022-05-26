import InfoBox from "@components/InfoBox";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";

const benefits = [
  {
    icon: "/assets/images/search.svg",
    title: "Find relevant diamonds quickly",
    subtitle:
      "Search the most extensive online database of polished diamonds, garner pertinent details about each stone and filter results to achieve a more accurate and organized listing- all in a matter of minutes.",
  },
  {
    icon: "/assets/images/activity.svg",
    title: "Real-time insights",
    subtitle:
      "Receive updates on the current market prices for each diamond in order to conduct sales transactions with the most accurate, timely figures",
  },
  {
    icon: "/assets/images/award.svg",
    title: "Search for GIA certifiactes",
    subtitle:
      "Search and share GIA diamond certificates quickly straight from the app",
  },
  {
    icon: "/assets/images/external-link.svg",
    title: "Save, Share and Export",
    subtitle:
      "Send messages via text or email with details of your recent searches to colleagues and customers. Export data. Attach photos and certificates. All without leaving the app.",
  },
];

const Benefits = () => {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map(({ icon, title, subtitle }, index) => {
          return (
            <InfoBox key={index} icon={icon} title={title} text={subtitle} />
          );
        })}
      </div>
      <Paragraph className="mt-8 md:max-w-[80%] lg:max-w-[770px]">
        Additional features include diamond comparing to evaluate profit, saving
        diamond groups, and exporting all information to your colleagues and
        customers. The next phase features will consist of unique Artificial
        Intelligence Insights regarding diamond calculations and interactive
        price list (both online and offline).
      </Paragraph>
    </Section>
  );
};

export default Benefits;
