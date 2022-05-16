import Container from "@ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const linkClassName = "text-sm font-normal text-primary-100";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <Container>
        <div className="flex h-header items-center justify-between">
          <div className="relative hidden">
            <Image
              alt="DPL logo"
              src="/assets/images/logo.png"
              width={324}
              height={161}
              layout="fill"
            />
          </div>
          <div
            className="relative flex h-7 w-20 items-center
            justify-center"
          >
            <Image
              alt="DPL logo"
              src="/assets/images/mini-logo.svg"
              width={79}
              height={28}
              layout="fill"
            />
          </div>
          <button className="" onClick={() => setIsDrawerOpen((prev) => !prev)}>
            {isDrawerOpen ? <Close /> : <Hamburger />}
          </button>
          <div
            className={`
            absolute
            left-0 top-0 z-10 block h-[100%] w-full bg-white transition-all
              ${isDrawerOpen ? "-translate-y-full" : ""}`}
          >
            <div className="group relative">
              <p className={linkClassName}>Price List</p>
              <div className="absolute left-0 opacity-0 group-hover:opacity-100 ">
                <Link href="/calculator">
                  <a className={linkClassName}>DPL Calculator</a>
                </Link>
                <Link href="/methodlogy">
                  <a className={linkClassName}>Methodlogy</a>
                </Link>
              </div>
            </div>
            <Link href="/insights">
              <a className={linkClassName}>Insights</a>
            </Link>
            <Link href="/about">
              <a className={linkClassName}>About Us</a>
            </Link>
            <Link href="/support">
              <a className={linkClassName}>Support</a>
            </Link>
          </div>
          {/* <Link href="/login">
            <a
              className="flex h-10 w-32 items-center justify-center 
                      rounded-md bg-primary-100 text-white"
            >
              Get The List
            </a>
          </Link> */}
        </div>
      </Container>
    </div>
  );
};

const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
};

const Close = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default Header;
