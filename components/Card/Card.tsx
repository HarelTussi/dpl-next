import Container from "@ui/Container";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
import React from "react";

type CardProps = {
  imageName: string;
  header: string;
  content: string;
  mb: number;
};

const Card = ({ imageName, header, content, mb }: CardProps) => {
  return (
    <div className={`max-w-[340px] md:w-[310px] md:h-[360px] flex-col rounded-[30px] bg-white shadow-card lg:flex p-8 mx-auto mb-${mb}`}>
      <div className="relative h-[42px] w-[42px] mx-auto">
        <Image
          src={`/assets/images/${imageName}`}
          layout="fill"
          alt="DPL insights"
          className="h-full w-full"
        />
      </div>
      <Heading
        type="Card Header 01"
        className="flex w-full items-center justify-center text-[#c2c2c2]"
      >
        {header}
      </Heading>
      <Paragraph className="mx-auto mt-3 w-full !text-sm !leading-[25px] text-center text-primary-80">
        {content}
      </Paragraph>
    </div>
  );
};

export default Card;
