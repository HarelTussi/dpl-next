import YoutubeVideo from "@components/YoutubeVideo";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <Section
      className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between
      xl:max-w-[1000px]
    
    "
    >
      <YoutubeVideo link="https://www.youtube.com/embed/0Bx20FfFL7M?autpolay=1">
        <div
          className="relative -ml-2 -mt-8 h-[618px] w-full
            md:w-[358px]
        "
        >
          <Image
            layout="fill"
            alt="play video"
            src="/assets/images/dpl-app-with-play.png"
          />
        </div>
      </YoutubeVideo>
      <div className="md:max-w-xl">
        <div className="mb-8">
          <Heading
            type="Subhead 01"
            className="mb-4 max-w-[20ch] lg:max-w-full"
          >
            Calculate the most updated prices
          </Heading>
          <Paragraph>
            Use multiple options for calculation of diamond prices based on
            selected parameters
          </Paragraph>
        </div>
        <div>
          <Heading type="Subhead 01" className="mb-4">
            Access the latest price list (Online & Offline)
          </Heading>
          <Paragraph>
            Get the most extensive, updated and accurate polished price list,
            based on the largest data set of polished diamonds, right at your
            fingertips
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};

export default App;
