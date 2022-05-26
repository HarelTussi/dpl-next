import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: React.ReactNode;
  text: React.ReactNode;
};

const InfoBox = ({ icon, title, text }: Props) => {
  return (
    <div
      className="flex flex-col items-center  
                 border border-[#EDEDED] bg-white py-8 text-center"
    >
      <Image width={32} height={32} src={icon} alt="icon" />
      <Heading type="Subhead 02" className="mt-6 !leading-7">
        {title}
      </Heading>
      <Paragraph className="mt-4 w-[90%]">{text}</Paragraph>
    </div>
  );
};

export default InfoBox;
