import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";

type Props = {
  stats: {
    label: React.ReactNode;
    value: React.ReactNode;
  }[];
};

const Stats = ({ stats }: Props) => {
  return (
    <Section>
      <div className="flex">
        {stats.map(({ label, value }, index) => {
          return (
            <div key={index} className="mr-6">
              <Heading type="Subhead 03">{value}</Heading>
              <Paragraph className="max-w-[88px]">{label}</Paragraph>
            </div>
          );
        })}
      </div>
      <div className="relative h-[500px] w-full">
        <Image src="/assets/images/iphone.svg" alt="DPL App" layout="fill" />
      </div>
    </Section>
  );
};

export default Stats;
