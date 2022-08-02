import { Tab } from "@headlessui/react";
import Container from "@ui/Container";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import { clsx } from "@utils/index";
import { usePlansContent } from "pages/plans";
import React, { Fragment } from "react";

type Props = {};

const Pricing = (props: Props) => {
  const { content } = usePlansContent();
  return (
    <Container className="relative mb-6 bg-white py-8">
      <Paragraph className="relative mb-2 text-secondary2-100">
        {content.firstSectionHeader}
      </Paragraph>
      <Heading
        type="Display 02"
        className="mb-2 !font-semibold text-primary2-200"
      >
        {content.firstSectionTitle}
      </Heading>
      <Paragraph className="text-sm leading-6 text-primary2-200">
        {content.firstSectionSubTitle}
      </Paragraph>
      <div
        className="absolute top-1/2 left-0 z-[1] h-[250px] w-full rounded-full bg-primary2-100 opacity-40 blur-3xl
          lg:left-1/2 lg:w-[420px] lg:-translate-x-1/2

      "
      ></div>
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
              <Plan
                title={content.secondSectionHeader}
                subscription="USD / Monthly"
                subtitle={content.secondSectionDescription}
                tryText={content.secondSectionButton}
                price={"$39.99"}
                featuresTitle={content.secondSectionHeader1}
                features={[
                  { text: content.secondSectionFeature1 },
                  { text: content.secondSectionFeature2 },
                  { text: content.secondSectionFeature3 },
                  { text: content.secondSectionFeature4 },
                ]}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Plan
                title={content.secondSectionHeader}
                subscription="USD / Yearly"
                subtitle={content.secondSectionDescription}
                tryText={content.secondSectionButton}
                price={"$390.99"}
                featuresTitle={content.secondSectionHeader1}
                features={[
                  { text: content.secondSectionFeature1 },
                  { text: content.secondSectionFeature2 },
                  { text: content.secondSectionFeature3 },
                  { text: content.secondSectionFeature4 },
                ]}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  );
};

const Plan = ({
  title,
  subtitle,
  price,
  subscription,
  tryText,
  featuresTitle,
  features,
}: {
  title: string;
  subtitle: string;
  price: string;
  subscription: string;
  tryText: string;
  featuresTitle: string;
  features: { text: string }[];
}) => {
  return (
    <div className="mx-auto flex w-full max-w-[390px] flex-col items-center rounded-md bg-white px-8 py-6 shadow-md">
      <h3 className="mx-auto mb-2 text-xl font-semibold text-primary2-200">
        {title}
      </h3>
      <p className="mx-auto text-center text-sm leading-6 text-primary2-200">
        {subtitle}
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-primary2-200">{price}</h1>
      <p className="mt-1 mb-4 text-xs text-secondary2-200">{subscription}</p>
      <button className="mb-6 h-12 w-full rounded-md bg-primary2-100 font-bold text-white">
        {tryText}
      </button>
      <h4 className=" mb-2 font-semibold text-primary2-200">{featuresTitle}</h4>
      {features.map(({ text }, idx) => {
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
