import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { clsx } from "@utils/index";

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
        <Button className="mt-4 h-[56px] w-full sm:max-w-[200px]">
          Get The List
        </Button>
      </div>
    </Section>
  );
};

export default WhatIsMethodology;
