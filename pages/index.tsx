import type { GetStaticProps } from "next";
import Header from "@components/Header";
import Container from "@components/Container";
import Image from "next/image";
import Head from "next/head";
import Button from "@components/Button";
import InfoBox from "@components/InfoBox";
import { api } from "api";

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
      {/* Hero Section */}
      <div className="relative -right-1px sm:block lg:mt-32 lg:flex lg:justify-between">
        <div>
          <p className="mb-4 font-mullish text-base font-bold">
            Diamond Price List - DPL™
          </p>
          <h1 className="font-mullish text-5xl font-bold leading-17 text-black">
            The world’s most accurate, <br />
            transparent and objective,
            <br /> polished Diamond Price List
          </h1>
          <p className="mt-4 mb-10 font-mullish text-lg font-normal">
            An independent reference designed exclusively for the industry based
            on the <br /> largest dataset of actual asking prices.
          </p>
          <div className="flex items-center">
            <Button className="flex h-14 w-52 items-center justify-center ">
              Get The List
            </Button>
            <Button kind="secondary" className="h-14 w-52">
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
            </Button>
          </div>
          <div className="mt-16 flex items-center">
            {data.map((item, index) => {
              return (
                <div key={index} className="mr-10 block">
                  <p className="font-mullish text-2xl font-bold text-black">
                    {item.value}
                  </p>
                  <p className="font-mullish text-base font-normal text-black">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/assets/images/iphone.svg"
            alt="DPL Application"
            width={900}
            height={900}
          />
        </div>
      </div>
      {/* Benefits */}
      <div className="z-20 grid grid-cols-3 grid-rows-[320px] gap-x-6 px-16 py-48 text-center">
        {boxes.map(({ title, subtitle, icon }, index) => {
          return (
            <InfoBox
              key={index}
              title={title}
              text={subtitle}
              icon={<Image alt="icon" src={icon} width={32} height={32} />}
            />
          );
        })}
      </div>
      {/* Never seen */}
      <div className="flex items-center pb-48">
        <div className="block">
          <h1 className="font-mullish text-5xl font-bold leading-17 text-black">
            Never Seen <br /> Before Interactive
            <br /> Price List
          </h1>
          <p className="mt-4 max-w-sm">
            The DPL is the first interactive price list of its kind, offering
            users easy price selection features and time saving calculations.
          </p>
          <button className="mt-6 flex h-14 w-52 items-center justify-center rounded-md bg-black text-white">
            Get The List
          </button>
        </div>
        <div className="relative ml-20 flex h-160 flex-1 items-center">
          <Image
            alt="price list video"
            src="/assets/images/priceListVideo.gif"
            width={800}
            height={465}
          />
        </div>
      </div>
      {/* your diamonds your price */}
      <div className="flex items-center justify-between border border-primary-30  bg-transparent py-12 px-20">
        <div>
          <h1 className="text-3xl font-bold">Your Diamonds, Your Prices</h1>
          <p className="mt-2 max-w-[38ch] text-base">
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
      <div className="flex items-center px-32 py-48">
        <div>
          <h1 className="text-5xl font-bold">Go Straight To App</h1>
          <p className="mt-4 max-w-[36ch] text-xl font-bold">
            The most advanced, easy to use, diamond-price calculator:
          </p>
          <ul className="mt-10">
            <li
              className="before:top relative h-24 border-l border-primary-40 before:absolute before:-left-[10px] before:h-5
                            before:w-5 before:rounded-full before:bg-black before:content-['']"
            >
              <p className="relative top-[-2px] pl-4 text-base opacity-80">
                24 hour access to the most up to date price list
              </p>
            </li>
            <li
              className="relative h-24 border-l border-primary-40 before:absolute before:-left-[10px] before:h-5 before:w-5
                            before:rounded-full before:bg-black before:content-['']"
            >
              {" "}
              <p className=" relative top-[-2px] max-w-[36ch] pl-4 text-base opacity-80">
                Explore powerful, unique, trade support functionalities
              </p>
            </li>
            <li
              className="relative h-24 before:absolute before:-left-[10px] before:h-5 before:w-5
                            before:rounded-full before:bg-black before:content-['']"
            >
              {" "}
              <p className="relative top-[-2px] max-w-[36ch] pl-4 text-base opacity-80">
                Search and share GIA certificates directly within the app
              </p>
            </li>
          </ul>
          <a className="ml-4 flex items-center text-lg font-bold">
            Learn More{" "}
            <svg
              className="relative ml-2"
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
        <div className="relative  flex-1">
          <div className="relative flex h-160">
            <Image
              alt="DPL iphone app"
              src="/assets/images/iphone-with-graph.svg"
              layout="fill"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 z-10 flex w-80 -translate-x-1/2 items-center">
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
      <div className="grid grid-cols-2 gap-x-40 gap-y-20 px-32 pb-48">
        <div className="flex h-56 flex-col justify-center px-5">
          <h1 className="text-3xl font-bold">Accuracy</h1>
          <p className="mt-4 text-base font-normal opacity-80">
            The DPL™ continually collects and monitors vast volumes of relevant
            data points to accurately reflect real-time polished market pricing.
          </p>
        </div>
        <div className="relative h-56 bg-primary-20 p-6">
          <Image
            src="/assets/images/accuracy.svg"
            alt="accuracy"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-56 bg-primary-20 p-6">
          <Image
            src="/assets/images/ai.svg"
            alt="artificial intelligence"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex h-56 flex-col justify-center px-5">
          <h1 className="text-3xl font-bold">Artificial Intelligence</h1>
          <p className="mt-4 text-base font-normal opacity-80">
            The DPL™ team develops and optimizes advanced AI models to
            mathematically calculate the price list by translating real world
            data changes.
          </p>
        </div>
        <div className="flex h-56 flex-col justify-center px-5">
          <h1 className="text-3xl font-bold">Pragmatic</h1>
          <p className="mt-4 text-base font-normal opacity-80">
            Whilst data capture and analysis are continually performed, DPL™
            follows the Industry’s custom for only periodic updates of price
            changes.
          </p>
        </div>
        <div className="relative h-56 bg-primary-20 p-6">
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

export const getStaticProps: GetStaticProps = async () => {
  const stats = await api.GD.getDiamondsStats();
  return {
    props: stats,
  };
};

export default Home;
