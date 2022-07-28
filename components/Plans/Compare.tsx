import Heading from "@ui/Heading";
import Section from "@ui/Section";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Container from "@ui/Container";
import { clsx } from "utils/index";

type Props = {};

const Compare = (props: Props) => {
  return (
    <Section>
      <Container>
        <Heading type="Subhead 01" className="mb-5 text-primary2-200">
          Compare plans{" "}
        </Heading>
        <Tab.Group>
          <Tab.List
            className={clsx(
              "mb-2 grid grid-cols-2 overflow-hidden rounded-md border border-primary2-100"
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
                  Working with DPL
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
                  Working traditionally
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {new Array(8)
                .fill({
                  check: true,
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                })
                .map((item, idx) => (
                  <Row {...item} key={idx} />
                ))}
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              {new Array(8)
                .fill({
                  check: true,
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                })
                .map((item, idx) => (
                  <Row {...item} key={idx} />
                ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </Section>
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
