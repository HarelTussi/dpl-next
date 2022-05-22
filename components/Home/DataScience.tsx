import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { clsx } from "@utils/index";
import Image from "next/image";
const data = [
  {
    title: "Accuracy",
    text: `The DPL™ continually collects and monitors vast volumes of relevant
  data points to accurately reflect real-time polished market pricing.`,
    image: "/assets/images/accuracy-dots.svg",
  },
  {
    title: "Artificial Intelligence",
    text: `The DPL™ team develops and optimizes advanced AI models to
    mathematically calculate the price list by translating real world data
    changes.`,
    image: "/assets/images/ai-dots.svg",
  },
  {
    title: "Pragmatic",
    text: `Whilst data capture and analysis are continually performed, DPL™
    follows the Industry’s custom for only periodic updates of price
    cchanges.`,
    image: "/assets/images/pragmatic-dots.svg",
  },
];

const DataScience = () => {
  return (
    <Section className="xl:px-40">
      {data.map(({ title, text, image }, index) => {
        return (
          <div
            key={index}
            className={[
              `mb-6`,
              "md:max-w-[400px]",
              "lg:flex lg:max-w-full lg:items-center lg:gap-x-8 xl:gap-x-32",
              index === 1 ? "lg:flex-row-reverse" : "",
            ].join(" ")}
          >
            <div className="lg:flex-1">
              <Heading type="Heading 02">{title}</Heading>
              <Paragraph className="mt-2 mb-4">{text}</Paragraph>
            </div>
            <div
              className={clsx(
                `relative flex h-[170px] items-center justify-center bg-primary-20
                lg:h-[220px] lg:flex-1
              `
              )}
            >
              <div className="relative h-full max-h-[90%] w-[80%]">
                <Image
                  src={image}
                  alt="section image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export default DataScience;
