import Heading from "@ui/Heading";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Container from "@ui/Container";
import { clsx } from "utils/index";
import { usePlansContent } from "pages/plans";

type Props = {};

const Compare = (props: Props) => {
  const { content } = usePlansContent();
  return (
    <Container className="mb-6 bg-white py-8">
      <Heading
        type="Subhead 01"
        className="mb-5 !font-semibold text-primary2-200"
      >
        {content.thirdSectionSubTitle}
      </Heading>
      <div className="block lg:hidden">
        <Tab.Group>
          <Tab.List
            className={clsx(
              "mb-4 grid grid-cols-2 overflow-hidden rounded-md border border-primary2-100"
            )}
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 text-sm",
                    selected
                      ? "rounded-tr-md rounded-br-md bg-primary2-100 font-bold text-white"
                      : "bg-transparent text-primary2-100"
                  )}
                >
                  {content.thirdSectionDescriptionMain2}
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 text-sm",
                    selected
                      ? "rounded-tl-md rounded-bl-md bg-primary2-100 font-bold text-white"
                      : "bg-transparent text-primary2-100"
                  )}
                >
                  {content.thirdSectionDescriptionMain1}
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {[
                {
                  check: true,
                  text: content.thirdSectionDescriptionA,
                },
                {
                  check: true,
                  text: content.thirdSectionDescriptionB,
                },
                {
                  check: true,
                  text: content.thirdSectionDescriptionC,
                },
                {
                  check: true,
                  text: content.thirdSectionDescriptionD,
                },
                {
                  check: true,
                  text: content.thirdSectionDescriptionE,
                },
              ].map((item, idx) => (
                <Row {...item} key={idx} />
              ))}
            </Tab.Panel>
            <Tab.Panel>
              {[
                {
                  check: false,
                  text: content.thirdSectionDescription1,
                },
                {
                  check: false,
                  text: content.thirdSectionDescription2,
                },
                {
                  check: false,
                  text: content.thirdSectionDescription3,
                },
                {
                  check: false,
                  text: content.thirdSectionDescription4,
                },
                {
                  check: false,
                  text: content.thirdSectionDescription5,
                },
              ].map((item, idx) => (
                <Row {...item} key={idx} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="hidden lg:mx-auto lg:mt-10 lg:grid lg:max-w-[900px] lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-primary2-200">
            Working with DPL
          </h3>
          {new Array(8)
            .fill({
              check: true,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
            })
            .map((item, idx) => (
              <Row {...item} key={idx} />
            ))}
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-primary2-200">
            Working traditionally
          </h3>
          {new Array(8)
            .fill({
              check: false,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
            })
            .map((item, idx) => (
              <Row {...item} key={idx} />
            ))}
        </div>
      </div>
    </Container>
  );
};

const Row = ({ check, text }: { check: boolean; text: string }) => {
  return (
    <div className="flex">
      <div className="mt-1">
        {check ? (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#01B047"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#FF0202"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </div>

      <p className="pl-4 text-sm leading-7 text-primary2-200">{text}</p>
    </div>
  );
};

export default Compare;
