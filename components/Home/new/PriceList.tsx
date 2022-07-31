import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import { INISGHTS_LIST_URL } from "config";
import Image from "next/image";
const PriceList = () => {
  const onTakeMeThere = () => {
    // window && window.open(INISGHTS_LIST_URL);
    window && window.open(INISGHTS_LIST_URL, "_self");
  };

  return (
    <Section className="flex-col lg:flex ">
      <Heading
        type="Subhead 05"
        className="flex w-full items-center justify-center text-[#c2c2c2]"
      >
        Price list
      </Heading>
      <Heading
        type="Display 03"
        className="flex w-full items-center justify-center text-center text-[34px] font-bold leading-[46px] text-primary-80 md:text-[56px] md:leading-[62px]"
      >
        A transparent and unbiased interactive polished diamond price list
      </Heading>
      <Paragraph className="mx-auto mt-2 flex w-full max-w-[835px] items-center justify-center text-center text-primary-80">
        An interactive price list that brings clarity back to the industry and
        requires no human intervention, offering users easy price selection
        features and time saving calculations.
      </Paragraph>
      <button
        onClick={onTakeMeThere}
        className="pointer mx-auto mt-4 flex h-[52px] w-full items-center justify-center !rounded-[6px]
             bg-primary-70 font-mullish text-white transition-all duration-300 ease-linear hover:shadow-button-hover active:bg-primary-80 disabled:bg-primary-40 disabled:text-primary-60 md:max-w-[190px]"
      >
        Get the list
      </button>
      <div className="relative mx-auto mt-8 block h-fit w-full md:w-[847px]">
        <Image
          src="/assets/images/pricelist-image.png"
          layout="responsive"
          alt="DPL insights"
          className="h-full w-full"
          width={847}
          height={511}
        />
      </div>
    </Section>
  );
};

export default PriceList;
