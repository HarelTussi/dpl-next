import YoutubeVideo from "@components/YoutubeVideo";
import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";

const NeverSeenBefore = () => {
  return (
    <Section>
      <YoutubeVideo link="https://www.youtube.com/embed/0Bx20FfFL7M?autpolay=1">
        <div className="h-[250px] w-full bg-black"></div>
      </YoutubeVideo>
      <Heading type="Display 02">
        Never Seen Before Interactive Price List
      </Heading>
      <Paragraph className="mt-4">
        The DPL is the first interactive price list of its kind, offering users
        easy price selection features and time saving calculations.
      </Paragraph>
      <Button className="mt-4 h-[56px] w-full">Get The List</Button>
    </Section>
  );
};

export default NeverSeenBefore;
