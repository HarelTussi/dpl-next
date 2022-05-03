import { useScrollContext } from "contexts/ScrollContext";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const { scrollY } = useScrollContext();

  return (
    <div
      className={[
        "fixed flex justify-between py-8 bg-transparent w-full top-0 max-w-7xl transition-all",
        scrollY > 0 ? "z-50 bg-white py-5" : "",
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
          <li className="text-black mr-12 font-mullish text-base">
            Price List
          </li>
          <li className="text-black mr-12 font-mullish text-base">Insights</li>
          <li className="text-black mr-12 font-mullish text-base">About Us</li>
          <li className="text-black font-mullish text-base">Support</li>
        </ul>
        <button className="ml-16 bg-black text-white font-mullish py-2 px-5 rounded-md text-sm">
          Get The List
        </button>
      </div>
    </div>
  );
};

export default Header;
