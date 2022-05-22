import YoutubeVideo from "@components/YoutubeVideo";
import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";

const Hero = ({
  stats,
}: {
  stats: {
    label: React.ReactNode;
    value: React.ReactNode;
  }[];
}) => {
  return (
    <Section className="lg:flex">
      <div>
        <Heading type="Subhead 03">Diamond Price List - DPL™</Heading>
        <Heading type="Display 02">
          The world’s most accurate, transparent and objective, polished Diamond
          Price List
        </Heading>
        <Paragraph className="mt-4">
          An independent reference designed exclusively for the industry based
          on the largest dataset of actual asking prices.
        </Paragraph>
        <div className="mt-4 grid max-w-[400px] grid-cols-1 items-center lg:grid-cols-2">
          <Button kind="PRIMARY" className="h-[56px] w-full lg:mt-0">
            Get The List
          </Button>
          <YoutubeVideo link="https://www.youtube.com/embed/0Bx20FfFL7M?autpolay=1">
            <Button
              kind="SECONDARY"
              className="flex h-[56px] w-full items-center justify-center"
            >
              <svg
                width="19"
                height="25"
                viewBox="0 0 19 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M19 12.5L0.250001 24.1913L0.250002 0.808657L19 12.5Z"
                  fill="#0A0A0A"
                />
              </svg>
              Play Video
            </Button>
          </YoutubeVideo>
        </div>

        <div className="mt-8 flex">
          {stats.map(({ label, value }, index) => {
            return (
              <div key={index} className="mr-6">
                <Heading type="Subhead 03">{value}</Heading>
                <Paragraph className="max-w-[88px] lg:max-w-[150px]">
                  {label}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative h-[500px] w-full">
        <Image src="/assets/images/iphone.svg" alt="DPL App" layout="fill" />
      </div>
    </Section>
  );
};

export default Hero;
