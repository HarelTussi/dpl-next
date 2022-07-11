import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";

const Quote = () => {
  return <Section className="flex-col lg:flex">
      <Heading
          type="Display 03"
          className="font-poppins flex text-center text-[21px] md:text-[27px] font-bold text-primary-80 max-w-[800px] mx-auto "
        >
          “DPL is pretty incredible and much needed in the diamond industry. The technology driving it is phenomenal and I really believe they have something here.” 
        </Heading>
        <Paragraph className="mx-auto mt-[22px] flex w-full items-center justify-center !md:text-[21px] !text-[14px] text-center text-primary-80">
        -Haygo Demir, DGI Group
      </Paragraph>
  </Section>;
};

export default Quote;
