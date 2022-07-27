import Button from "@ui/Button";
import Container from "@ui/Container";
import Link from "next/link";
import React from "react";
import DPLMobileLogo from "../../assets/dpl-mobile-logo.svg";
import DPLDesktopLogo from "../../assets/dpl-desktop-logo.svg";
import DPLLogo from "../../assets/dpl-logo.svg";
import Menu from "../../assets/menu.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import X from "../../assets/x.svg";
import { clsx } from "@utils/index";
import { useHeaderStore } from "stores/header";
import { INISGHTS_CLIENT_URL } from "config";
import GetTheList from "@components/GetTheList";
import useMixpanel from "@hooks/useMixpanel";

const Header = () => {
  const isDrawerOpen = useHeaderStore((state) => state.isDrawerOpen);
  const isDropdownOpen = useHeaderStore((state) => state.isDropdownOpen);
  return (
    <div className="fixed top-0 left-0 z-[100] w-full bg-white shadow-lg lg:shadow-none">
      <Container withLines={false}>
        <div
          className={clsx(
            `overflow-hidden transition-all 
              lg:flex lg:justify-between lg:overflow-visible`,
            isDrawerOpen
              ? isDropdownOpen
                ? "h-[678px]"
                : "h-[512px]"
              : "h-[70px] lg:h-[80px]"
          )}
        >
          <HeaderLeft />
          <HeaderLinks />
          <HeaderGetList />
        </div>
      </Container>
    </div>
  );
};

const HeaderLinks = () => {
  const { track } = useMixpanel();
  const isDropdownOpen = useHeaderStore((state) => state.isDropdownOpen);
  const openDropdown = useHeaderStore((state) => state.openDropdown);
  const closeDropdown = useHeaderStore((state) => state.closeDropdown);

  const openDropdownWithoutDesktop = () => {
    if (window && window.innerWidth >= 1024) return;
    openDropdown();
  };
  const closeDropdownWithoutDesktop = () => {
    if (window && window.innerWidth >= 1024) return;
    closeDropdown();
  };

  return (
    <div
      className={clsx(
        `items-center overflow-hidden transition-all duration-300
  lg:flex lg:h-auto lg:overflow-visible
  `
      )}
    >
      <div
        className="group relative border-b border-b-primary-40 
py-6 lg:relative lg:border-b-0 lg:border-primary-100 lg:p-0 
        
"
      >
        <div
          className="flex items-center justify-between lg:mr-8 lg:cursor-pointer lg:justify-start"
          onClick={
            isDropdownOpen
              ? closeDropdownWithoutDesktop
              : openDropdownWithoutDesktop
          }
        >
          <p className="text-[21px] font-bold text-primary-100 lg:text-[15px]">
            Price List
          </p>
          <ChevronDown className="lg:hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden lg:ml-[3px] lg:block"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div
          className={clsx(
            `w-full overflow-hidden pl-4 transition-all duration-300 
            lg:absolute lg:left-0 lg:whitespace-nowrap lg:bg-white lg:p-0 lg:group-hover:h-[136px]
            
            `,
            isDropdownOpen ? "h-[166px]" : "h-0"
          )}
        >
          <a
            target="_blank"
            href={INISGHTS_CLIENT_URL + "/pricelist"}
            className="block pt-6 text-[21px] font-normal text-primary-100
      lg:mt-4 lg:p-0 lg:text-[15px]
      "
            rel="noreferrer"
          >
            Get The List
          </a>
          <Link href="/calculator">
            <a
              className="block pt-6 text-[21px] font-normal text-primary-100
      lg:mt-4 lg:p-0 lg:text-[15px]
      "
            >
              DPL Calculator
            </a>
          </Link>
          <Link href="/methodology">
            <a
              className="block pt-6 text-[21px] font-normal text-primary-100
      lg:mt-4 lg:p-0 lg:text-[15px]
      "
            >
              Methodology
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:flex lg:whitespace-nowrap">
        <button
          onClick={() => {
            track("InsightsEntrance");
            window && window.open(INISGHTS_CLIENT_URL);
          }}
          className={clsx(
            `block w-full border-b border-b-primary-40 py-6 text-left text-[21px]
    font-bold text-primary-100 lg:mr-8 lg:w-fit lg:border-none lg:p-0 lg:text-[15px]
  `
          )}
        >
          Insights
        </button>
        {[
          { href: "/about", label: "About us" },
          { href: "/support", label: "Support" },
        ].map(({ href, label }, index) => {
          return (
            <Link href={href} key={index}>
              <a
                className={clsx(
                  `block border-b border-b-primary-40 py-6 text-[21px] font-bold text-primary-100
          lg:border-none lg:p-0 lg:text-[15px] 
        `,
                  index !== 2 ? "lg:mr-8" : ""
                )}
              >
                {label}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const HeaderLeft = ({}) => {
  const isDrawerOpen = useHeaderStore((state) => state.isDrawerOpen);
  const openDrawer = useHeaderStore((state) => state.openDrawer);
  const closeDrawer = useHeaderStore((state) => state.closeDrawer);
  const openDrawerOnlyMobile = () => {
    window && window?.innerWidth < 1024 && openDrawer();
  };
  const closeDrawerOnlyMobile = () => {
    window && window?.innerWidth < 1024 && closeDrawer();
  };
  return (
    <div
      className={clsx(
        "flex h-[70px] w-full items-center justify-between lg:h-[80px] lg:flex-1"
      )}
    >
      <Link href="/">
        <a className="flex items-center">
          <DPLMobileLogo className="lg:hidden" />
          <DPLLogo className="hidden lg:block" />
          {/* <DPLDesktopLogo className="hidden lg:block" /> */}
        </a>
      </Link>
      <button
        onClick={isDrawerOpen ? closeDrawerOnlyMobile : openDrawerOnlyMobile}
        className="flex items-center lg:hidden"
      >
        {isDrawerOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

const HeaderGetList = () => {
  return (
    <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end">
      {/* <GetTheList className="my-8 h-[56px] w-full lg:m-0 lg:h-10 lg:w-[128px]" /> */}
      <a
        target="_self"
        href={INISGHTS_CLIENT_URL}
        className="text-primary-90 underline"
      >
        Login
      </a>
    </div>
  );
};

export default Header;
