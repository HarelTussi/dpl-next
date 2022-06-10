import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { clsx } from "@utils/index";
import Link from "next/link";

type Props = {
  className?: string;
};

const WhatIsMethodology = ({ className = "" }: Props) => {
  const classNames = clsx(
    "lg:flex lg:flex-col lg:items-center lg:justify-center",
    className
  );
  return (
    <Section className={classNames}>
      <div>
        <Heading type="Subhead 03" className="uppercase">
          Additional Information
        </Heading>
        <Heading className="mt-2" type="Heading 02">
          What Is The Methodology Of DPL™?
        </Heading>
        <Paragraph className="mt-2 md:max-w-[750px]">
          The Diamond Price List - DPL™, created for the diamond industry, is
          the result of extensive research, involving a unique and vast set of
          data available only to the DPL. The methodology is based on advanced
          Machine Learning, Artificial Intelligence (AI) and data science
          algorithms, creating an optimized price list to reflect the market in
          the most accurate and objective manner.
        </Paragraph>
        <Link href="/methodology">
          <a className="pointer mt-4 flex h-[56px] w-full items-center justify-center rounded-md bg-black font-mullish text-white shadow-sm active:bg-primary-90 disabled:bg-primary-40 disabled:text-primary-60 sm:max-w-[200px]">
            Learn More
          </a>
        </Link>
      </div>
    </Section>
  );
};

export default WhatIsMethodology;
