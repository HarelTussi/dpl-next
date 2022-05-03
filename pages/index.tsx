import type { GetStaticProps } from "next";
import Header from "@components/Header";
import Container from "@components/Container";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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

  const boxes = [
    {
      icon: "/assets/images/check.svg",
      title: "Objective + Reliable",
      subtitle:
        "DPL’s A.I algorithms are programmed to follow strict, clear and transparent methodologies to ensure data integrity. This will be third-party verified by an independent expert institution.",
    },
    {
      icon: "/assets/images/plus-box.svg",
      title: "Smart + Accurate",
      subtitle:
        "The DPL is based on advanced Machine Learning, Artificial Intelligence (AI) and Data Science, optimized to mathematically calculate and reflect current market pricing in the most accurate and objective manner.",
    },
    {
      icon: "/assets/images/trapeze.svg",
      title: "Accessible + Transparent",
      subtitle:
        "The DPL and its methodology are transparent and accessible to all members of the diamond trade.",
    },
  ];

  return (
    <Container>
      <Head>
        <title>The Diamond Price List - DPL</title>
      </Head>
      <Header />
      {/* Hero Section */}
      <div className="flex justify-between pt-32 relative -right-1px">
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
            <button className="flex items-center justify-center bg-black text-white h-14 w-52 rounded-md hover:animate-pulse">
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
                  <p className="font-bold text-2xl text-black font-mullish">
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
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/assets/images/iphone.svg"
            alt="DPL Application"
            width={900}
            height={900}
          />
        </div>
      </div>
      {/* Benefits */}
      <div className="grid grid-cols-3 px-16 py-52 gap-x-6 text-center z-20">
        {boxes.map(({ title, subtitle, icon }, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col border border-gray px-4 h-80 bg-white"
            >
              <Image alt="icon" src={icon} width={32} height={32} />
              <h3 className="font-mullish font-bold text-lg text-black mt-4 leading-3">
                {title}
              </h3>
              <p className="font-normal font-mullish text-sm text-black mt-4 leading-6">
                {subtitle}
              </p>
            </div>
          );
        })}
      </div>
      {/* Never seen */}
      <div className="flex items-center pb-52">
        <div className="block">
          <h1 className="font-mullish font-bold text-black text-5xl leading-17">
            Never Seen <br /> Before Interactive
            <br /> Price List
          </h1>
          <p className="max-w-sm mt-4">
            The DPL is the first interactive price list of its kind, offering
            users easy price selection features and time saving calculations.
          </p>
          <button className="flex items-center justify-center bg-black text-white h-14 w-52 rounded-md mt-6">
            Get The List
          </button>
        </div>
        <div className="relative flex-1 h-160 ml-20 flex items-center">
          <Image
            alt="price list video"
            src="/assets/images/priceListVideo.gif"
            width={800}
            height={465}
          />
        </div>
      </div>
      {/* your diamonds your price */}
      <div className="flex items-center justify-between border border-primary-30  py-12 px-20 bg-transparent">
        <div>
          <h1 className="font-bold text-3xl">Your Diamonds, Your Prices</h1>
          <p className="text-base max-w-[38ch] mt-2">
            The DPL is based on a clear, objective and transparent methodology,
            and is uninfluenced by interested parties. It uses the largest data
            set of asking prices in the world and delivers a price list that is
            both accurate and reliable. Your diamonds, your prices reflect our
            promise to remain completely objective and openly transparent.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/images/ai-video.png"
            width={350}
            height={196}
            alt="video"
          />
        </div>
      </div>
      {/* Go Straight to app */}
      <div className="flex items-center px-32 py-52">
        <div>
          <h1 className="font-bold text-5xl">Go Straight To App</h1>
          <p className="font-bold text-xl max-w-[36ch] mt-4">
            The most advanced, easy to use, diamond-price calculator:
          </p>
          <ul className="mt-10">
            <li
              className="h-24 border-l border-primary-40 relative before:content-[''] before:absolute before:w-5 before:h-5
                            before:rounded-full before:bg-black before:-left-[10px] before:top"
            >
              <p className="text-base opacity-80 pl-4 top-[-2px] relative">
                24 hour access to the most up to date price list
              </p>
            </li>
            <li
              className="h-24 border-l border-primary-40 relative before:content-[''] before:absolute before:w-5 before:h-5
                            before:rounded-full before:bg-black before:-left-[10px]"
            >
              {" "}
              <p className=" text-base opacity-80 pl-4 max-w-[36ch] top-[-2px] relative">
                Explore powerful, unique, trade support functionalities
              </p>
            </li>
            <li
              className="h-24 relative before:content-[''] before:absolute before:w-5 before:h-5
                            before:rounded-full before:bg-black before:-left-[10px]"
            >
              {" "}
              <p className="text-base opacity-80 pl-4 max-w-[36ch] top-[-2px] relative">
                Search and share GIA certificates directly within the app
              </p>
            </li>
          </ul>
          <a className="ml-4 font-bold text-lg flex items-center">
            Learn More{" "}
            <svg
              className="ml-2 relative"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.22998 9L5.22998 5L1.22998 1"
                stroke="#0A0A0A"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
        <div className="flex-1  relative">
          <div className="flex relative h-160">
            <Image
              alt="DPL iphone app"
              src="/assets/images/iphone-with-graph.svg"
              layout="fill"
            />
          </div>
          <div className="flex items-center absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 w-80">
            <a
              href="https://apps.apple.com/il/app/lucy-calculator/id1522203901"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="apple store"
                src="/assets/images/appStore.svg"
                width={160}
                height={51}
                objectFit="contain"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.DiamondPrice.DiamondPrice"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="apple store"
                src="/assets/images/googlePlay.svg"
                width={140}
                height={50}
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
      {/* big names */}
      <div className="grid grid-cols-2 gap-x-40 gap-y-20 px-32 pb-52">
        <div className="h-56 flex justify-center flex-col px-5">
          <h1 className="font-bold text-3xl">Accuracy</h1>
          <p className="font-normal text-base opacity-80 mt-4">
            The DPL™ continually collects and monitors vast volumes of relevant
            data points to accurately reflect real-time polished market pricing.
          </p>
        </div>
        <div className="bg-primary-20 h-56 relative p-6">
          <Image
            src="/assets/images/accuracy.svg"
            alt="accuracy"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="bg-primary-20 h-56 relative p-6">
          <Image
            src="/assets/images/ai.svg"
            alt="artificial intelligence"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-56 flex justify-center flex-col px-5">
          <h1 className="font-bold text-3xl">Artificial Intelligence</h1>
          <p className="font-normal text-base opacity-80 mt-4">
            The DPL™ team develops and optimizes advanced AI models to
            mathematically calculate the price list by translating real world
            data changes.
          </p>
        </div>
        <div className="h-56 flex justify-center flex-col px-5">
          <h1 className="font-bold text-3xl">Pragmatic</h1>
          <p className="font-normal text-base opacity-80 mt-4">
            Whilst data capture and analysis are continually performed, DPL™
            follows the Industry’s custom for only periodic updates of price
            changes.
          </p>
        </div>
        <div className="bg-primary-20 h-56 relative p-6">
          <Image
            src="/assets/images/pragmatic.svg"
            alt="pragmatic"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      availableDiamonds: "1.6M",
      suppliers: "4,800",
      totalValue: "6.7B",
    },
  };
};

export default Home;
