import type { GetStaticProps } from "next";
import Header from "@components/Header";
import Container from "@components/Container";
import Image from "next/image";

interface Props {
  availableDiamonds: string;
  suppliers: string;
  totalValue: string;
}

const Home = ({ availableDiamonds, suppliers, totalValue }: Props) => {
  const data = [
    { value: availableDiamonds, label: "Available Diamonds" },
    { value: suppliers, label: "Suppliers" },
    { value: totalValue, label: "Total Value" },
  ];
  return (
    <Container>
      <Header />
      {/* Hero Section */}
      <div className="flex justify-between mt-5">
        <div>
          <p className="font-mullish font-bold text-base mb-4">
            Diamond Price List - DPL™
          </p>
          <h1 className="text-black font-mullish font-bold text-5xl leading-17">
            The world’s most accurate, <br />
            transparent and objective,
            <br /> polished Diamond Price List
          </h1>
          <p className="font-mullish font-normal text-lg mt-4 mb-10">
            An independent reference designed exclusively for the industry based
            on the <br /> largest dataset of actual asking prices.
          </p>
          <div className="flex items-center">
            <button className="flex items-center justify-center bg-black text-white h-14 w-52 rounded-md">
              Get The List
            </button>
            <button className="flex items-center justify-center bg-transparent text-black font-bold h-14 w-52 rounded-md">
              {/* play */}
              <svg
                width="19"
                height="25"
                viewBox="0 0 19 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                style={{ width: 20, height: 20, border: "none" }}
              >
                <path
                  d="M19 12.5L0.250001 24.1913L0.250002 0.808657L19 12.5Z"
                  fill="#0A0A0A"
                />
              </svg>
              Play Video
            </button>
          </div>
          <div className="flex items-center mt-16">
            {data.map((item, index) => {
              return (
                <div key={index} className="block mr-10">
                  <p className="font-bold text-2xl text-black font-mullish leading-4">
                    {item.value}
                  </p>
                  <p className="font-mullish font-normal text-base text-black">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <Image
            src="/assets/images/iphone.svg"
            layout="fill"
            alt="DPL Application"
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      availableDiamonds: "1.7M",
      suppliers: "4,800",
      totalValue: "6.7B",
    },
  };
};

export default Home;
