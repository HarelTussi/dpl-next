import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Container from "@components/Container";

type Props = {};

const Footer = (props: Props) => {
  const sections = [
    {
      title: "PRODUCT",
      links: [{ label: "Price List" }, { label: "DPL Calculator" }],
    },
    {
      title: "ABOUT",
      links: [{ label: "About Us" }, { label: "Methodology" }],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "FAQ" },
        { label: "Contact Us" },
        { label: "Terms of Use" },
        { label: "Privacy Policy" },
      ],
    },
  ];
  return (
    <div className="bg-black pt-10 ">
      {/* first section */}
      <div className="relative after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-white after:bg-opacity-50">
        <Container
          withLines={false}
          className="after:content[''] after:l-0 py-10 "
        >
          <div className="lg:flex lg:items-start lg:justify-between">
            <div>
              <Image
                src="/assets/images/logo-white.svg"
                width={108}
                height={54}
                alt="DPL logo"
              />
            </div>
            {sections.map(({ title, links }, index) => {
              return (
                <div key={index} className="mt-8 lg:mt-0">
                  <Disclosure defaultOpen={true}>
                    <Disclosure.Button
                      className="flex w-full items-center justify-between font-bold uppercase text-white outline-none 
                  md:pointer-events-none"
                    >
                      {title}
                      <span className="md:hidden">+</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      <ul>
                        {links.map(({ label }, index) => {
                          return (
                            <li className="mt-4" key={index}>
                              <Link href="/pricelist">
                                <a className="text-sm font-normal text-white">
                                  {label}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Disclosure.Panel>
                  </Disclosure>
                </div>
              );
            })}
            <div className="mt-8 md:mt-0">
              <h3 className="text-sm font-bold uppercase text-white">
                NEWSLETTER
              </h3>
              <form action="" className="mt-6 grid grid-cols-[2fr,1fr]">
                <input
                  type="text"
                  placeholder="Email address"
                  className="h-12 rounded-md pl-4 text-sm placeholder:text-black"
                />
                <button className="ml-3 h-12 rounded-md border border-white px-4 text-sm text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
      {/* second section */}
      <Container className="py-10" withLines={false}>
        <div className="flex flex-col items-center md:flex-row">
          <a
            href="mailto:info@thediamondpricelist.com"
            className="text-center text-sm text-white sm:hidden md:order-2 md:px-2 lg:block"
          >
            info@thediamondpricelist.com
          </a>
          <div className="mx-auto my-6 flex items-center md:order-3 md:flex-1 md:justify-end">
            <a
              className="mr-2"
              href="https://apps.apple.com/il/app/lucy-calculator/id1522203901"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/images/appleStoreWhite.svg"
                width={140}
                height={50}
                alt="apple store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.DiamondPrice.DiamondPrice"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/images/googlePlayWhite.svg"
                width={140}
                height={50}
                alt="google play store"
              />
            </a>
          </div>
          <div className="flex items-center justify-center md:order-1">
            <p className="mr-2 whitespace-nowrap text-xs font-bold text-white">
              Powered By
            </p>
            <Image
              src="/assets/images/lucy-logo-white.svg"
              width={42}
              height={31}
              alt="lucy logo"
            />
            <p className="ml-4 text-xs text-white">
              All rights are reserved to DPL™ Inc.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
