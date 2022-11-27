import Card from "@components/Card";
import Section from "@ui/Section";
import Image from "next/image";
import React from "react";

const cards = [
  {
    imageName: "data-icon.svg",
    header: "Data is your superpower",
    content:
      "Experience user-friendly, powerful real-time analysis features that enable better, faster transactional decisions and boost pricing strategy, all in one place.",
  },
  {
    imageName: "business-icon.svg",
    header: "Master your business data",
    content:
      "Match your own inventory prices against the market's average prices and find how your business is positioned in the industry.",
  },
  {
    imageName: "expertise-icon.svg",
    header: "Maximize your expertise",
    content:
      "Get comprehensive information and historical trends on any type of diamond with a click of a button.",
  },
  {
    imageName: "bell-icon.svg",
    header: "Be the first to know",
    content:
      "Set an instant alert to be notified once a specific stone in specific categories is available in the market.",
  },
];

const Cards = () => {
  return (
    <Section className="gap-[15px] md:grid md:grid-cols-2 lg:flex ">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          imageName={card.imageName}
          header={card.header}
          content={card.content}
          mb={idx !== 3 ? 6 : 0}
        />
      ))}
    </Section>
  );
};

export default Cards;
