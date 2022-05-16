import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Accuracy from "../../assets/accuracy.svg";
import AI from "../../assets/ai.svg";
import Pragmatic from "../../assets/pragmatic.svg";
import LGAccuracy from "../../assets/accuracy-lg.svg";
import LGAI from "../../assets/ai-lg.svg";
import LGPragmatic from "../../assets/pragmatic-lg.svg";
const data = [
  {
    title: "Accuracy",
    text: `The DPL™ continually collects and monitors vast volumes of relevant
  data points to accurately reflect real-time polished market pricing.`,
    image: <Accuracy />,
    imageLg: <LGAccuracy />,
  },
  {
    title: "Artificial Intelligence",
    text: `The DPL™ team develops and optimizes advanced AI models to
    mathematically calculate the price list by translating real world data
    changes.`,
    image: <AI />,
    imageLg: <LGAI />,
    className: "sm:flex-row-reverse",
  },
  {
    title: "Pragmatic",
    text: `Whilst data capture and analysis are continually performed, DPL™
    follows the Industry’s custom for only periodic updates of price
    cchanges.`,
    image: <Pragmatic />,
    imageLg: <LGPragmatic />,
  },
];

const DataScience = () => {
  return (
    <Section>
      {data.map(({ title, text, image, imageLg, className }, index) => {
        return (
          <div key={index} className={["mb-6 "].join()}>
            <div className="">
              <Heading type="Heading 02">{title}</Heading>
              <Paragraph className="mt-2 mb-4">{text}</Paragraph>
            </div>
            <div className="relative ">{image}</div>
            <div className="relative hidden">{imageLg}</div>
          </div>
        );
      })}
    </Section>
  );
};

export default DataScience;
