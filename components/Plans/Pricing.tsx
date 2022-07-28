import { Tab } from "@headlessui/react";
import Container from "@ui/Container";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import { clsx } from "@utils/index";
import React, { Fragment } from "react";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <Container className="relative mb-6 bg-white py-8">
      <Paragraph className="relative mb-2 text-secondary2-100">
        be our friend
      </Paragraph>
      <Heading
        type="Display 02"
        className="mb-2 !font-semibold text-primary2-200"
      >
        Plan and Pricing
      </Heading>
      <Paragraph className="text-sm leading-6 text-primary2-200">
        Check out our early bird special price. It is a time-limited offer
      </Paragraph>
      <div className="absolute top-1/2 left-0 z-[1] h-[250px] w-full rounded-full bg-primary2-100 opacity-40 blur-3xl"></div>
      <div className="relative z-10">
        <Tab.Group>
          <Tab.List
            className={clsx(
              "mx-auto mb-4 mt-8 flex w-fit overflow-hidden rounded-md border border-primary2-100"
            )}
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 px-3 text-sm",
                    selected
                      ? "rounded-tr-md rounded-br-md bg-primary2-100 font-bold text-white"
                      : "bg-transparent text-primary2-100"
                  )}
                >
                  Monthly
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 px-3 text-sm",
                    selected
                      ? "rounded-tl-md rounded-bl-md bg-primary2-100 font-bold text-white"
                      : "bg-transparent text-primary2-100"
                  )}
                >
                  Lifetime
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Plan />
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <Plan />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  );
};

const Plan = () => {
  return (
    <div className="mx-auto flex w-full max-w-[390px] flex-col items-center rounded-md bg-white px-8 py-6 shadow-md">
      <h3 className="mx-auto mb-2 text-xl font-semibold text-primary2-200">
        Premium Plan
      </h3>
      <p className="mx-auto text-center text-sm leading-6 text-primary2-200">
        Two short description lines on this package. One row is also possible.
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-primary2-200">$319.99</h1>
      <p className="mt-1 mb-4 text-xs text-secondary2-200">USD / Yearly</p>
      <button className="mb-6 h-12 w-full rounded-md bg-primary2-100 font-bold text-white">
        Try for 30 days
      </button>
      <h4 className=" mb-2 font-semibold text-primary2-200">Main Features:</h4>
      {new Array(4)
        .fill({ text: "Neque porro quisquam est qui  " })
        .map(({ text }, idx) => {
          return (
            <div key={idx} className="mb-2 flex">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3327 5.5L8.24935 15.5833L3.66602 11"
                  stroke="#006DFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="ml-2 text-sm text-primary2-200">{text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Pricing;
