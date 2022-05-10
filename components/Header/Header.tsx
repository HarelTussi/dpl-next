import Button from "@components/Button";
import { useScrollContext } from "contexts/ScrollContext";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const { scrollY } = useScrollContext();

  return (
    <div
      className={[
        "fixed left-1/2 top-0 z-50 flex w-full -translate-x-1/2 justify-between py-8 px-4 transition-all sm:px-6 lg:max-w-7xl lg:px-8 xl:px-0",
        scrollY > 0 ? "bg-white py-5" : "bg-transparent",
      ].join(" ")}
    >
      <Image
        src="/assets/images/logo.png"
        alt="DPL logo"
        width={108}
        height={53}
      />
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="mr-12 font-mullish text-base text-black">
            Price List
          </li>
          <li className="mr-12 font-mullish text-base text-black">Insights</li>
          <li className="mr-12 font-mullish text-base text-black">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className="font-mullish text-base text-black">Support</li>
        </ul>
        <Button className="ml-16 py-2 px-5 text-sm">Get The List</Button>
      </div>
    </div>
  );
};

export default Header;
