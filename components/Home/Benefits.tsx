import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
type Props = {
  benefits: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
};

const Benefits = ({ benefits }: Props) => {
  return (
    <Section className="grid gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-4">
      {benefits.map((benefit, index) => {
        return (
          <div
            key={index}
            className="mb-4 flex h-[320px] flex-col items-center justify-center border border-[#EDEDED] bg-white text-center"
          >
            <Image width={32} height={32} src={benefit.icon} alt="icon" />
            <Heading type="Subhead 02" className="mt-4">
              {benefit.title}
            </Heading>
            <Paragraph className="mt-4 w-[90%]">{benefit.subtitle}</Paragraph>
          </div>
        );
      })}
    </Section>
  );
};

export default Benefits;
