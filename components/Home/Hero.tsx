import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";

const Hero = () => {
  return (
    <Section>
      <Heading type="Subhead 03">Diamond Price List - DPL™</Heading>
      <Heading type="Display 02">
        The world’s most accurate, transparent and objective, polished Diamond
        Price List
      </Heading>
      <Paragraph className="mt-4">
        An independent reference designed exclusively for the industry based on
        the largest dataset of actual asking prices.
      </Paragraph>
      <Button kind="PRIMARY" className="mt-4 h-[56px] w-full">
        Get The List
      </Button>
    </Section>
  );
};

export default Hero;
