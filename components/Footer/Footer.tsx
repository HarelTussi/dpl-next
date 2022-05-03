import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="bg-black">
      {/* first section */}
      <div className="border-b border-b-primary-10 border-opacity-20 pt-16 pb-12">
        <div className="flex justify-between max-w-7xl mx-auto">
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
              <div key={index}>
                <h3 className="text-white font-bold text-sm uppercase">
                  {title}
                </h3>
                <ul className="mt-6">
                  {links.map(({ label }, index) => {
                    return (
                      <li className="mb-4" key={index}>
                        <Link href="/pricelist">
                          <a className="text-white font-normal text-sm">
                            {label}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="">
            <h3 className="text-white font-bold text-sm uppercase">
              NEWSLETTER
            </h3>
            <form action="" className="flex items-center mt-6">
              <input
                type="text"
                placeholder="Email address"
                className="h-12 rounded-md placeholder:text-black pl-4 text-sm"
              />
              <button className="rounded-md h-12 border-white border ml-3 text-white text-sm px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="flex items-center justify-between py-12 max-w-7xl mx-auto">
        <div className="flex items-center">
          <p className="text-white font-bold text-base mr-2">Powered By</p>
          <Image
            src="/assets/images/lucy-logo-white.svg"
            width={42}
            height={31}
            alt="lucy logo"
          />
          {/* Logo */}
          <p className="text-white text-sm ml-4">
            All rights are reserved to DPL™ Inc.
          </p>
          <a
            href="mailto:info@thediamondpricelist.com"
            className="text-white text-sm ml-28"
          >
            info@thediamondpricelist.com
          </a>
        </div>
        <div className="flex items-center">
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
      </div>
    </div>
  );
};

export default Footer;
