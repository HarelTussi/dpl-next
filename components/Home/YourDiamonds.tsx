import YoutubeVideo from "@components/YoutubeVideo";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";

const YourDiamonds = () => {
  return (
    <Section>
      <div
        className=" items-center border border-primary-30
        p-8 md:flex
      "
      >
        <div className="md:mr-8 md:flex-1">
          <Heading type="Heading 02" className="mb-4">
            Your Diamonds, <br />
            Your Prices
          </Heading>
          <Paragraph className="mb-5">
            The DPL is based on a clear, objective and transparent methodology,
            and is uninfluenced by interested parties. It uses the largest data
            set of asking prices in the world and delivers a price list that is
            both accurate and reliable. Your diamonds, your prices reflect our
            promise to remain completely objective and openly transparent.
          </Paragraph>
        </div>
        <div className="md:flex-1 md:justify-end">
          <YoutubeVideo link="https://www.youtube.com/embed/0Bx20FfFL7M?autpolay=1">
            <div
              className="relative h-[200px] w-full
            md:h-[300px] lg:ml-auto lg:h-[300px] lg:w-[450px]
            "
            >
              <Image
                src="/assets/images/your-diamonds-video.png"
                layout="fill"
                alt="dpl short video"
              />
              <YoutubeVideo.Play className="z-50" />
            </div>
          </YoutubeVideo>
        </div>
      </div>
    </Section>
  );
};

export default YourDiamonds;
