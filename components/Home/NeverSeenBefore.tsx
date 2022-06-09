import GetTheList from "@components/GetTheList";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Image from "next/image";

const NeverSeenBefore = () => {
  return (
    <Section className="items-center md:flex md:flex-row-reverse">
      <div
        className="relative h-[250px] min-h-[250px]
      w-full md:ml-4 md:flex md:flex-1 md:items-center 
      lg:ml-8 lg:min-h-[350px]
      "
      >
        <Image
          src="/assets/images/price-list-table.png"
          layout="fill"
          alt="Price List Video"
          objectFit="contain"
          height="100%"
        />
      </div>
      <div className="md:flex-1">
        <Heading type="Display 02">
          Never Seen Before Interactive Price List
        </Heading>
        <Paragraph className="mt-4">
          The DPL is the first interactive price list of its kind, offering
          users easy price selection features and time saving calculations.
        </Paragraph>
        <GetTheList
          className="mt-4 h-[56px] w-full
        md:max-w-[200px]"
        />
      </div>
    </Section>
  );
};

export default NeverSeenBefore;
