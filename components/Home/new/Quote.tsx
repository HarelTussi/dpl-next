import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";

const Quote = () => {
  return <Section className="flex-col lg:flex">
      <Heading
          type="Display 03"
          className="font-poppins flex text-center text-[21px] md:text-[27px] font-bold text-primary-80 max-w-[800px] mx-auto "
        >
          “Our industry needs greater, faster data analysis.
Adding visual results makes it so much easier and intuitive to understand and take action. I like the solution created by DPL Insights and can definitely see how it can impact the industry for the better.”

        </Heading>
        <Paragraph className="mx-auto mt-[22px] flex w-full items-center justify-center !md:text-[21px] !text-[14px] text-center text-primary-80">
        Howard Hauben, President & CEO Centurion Jewelry
      </Paragraph>
  </Section>;
};

export default Quote;
