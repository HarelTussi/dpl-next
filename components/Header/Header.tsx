import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between py-8 bg-transparent w-full">
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
        <button className="ml-16 mr-4 bg-black text-white font-mullish py-2 px-5 rounded-md">
          Get The List
        </button>
        <Image
          src="/assets/images/us-flag.png"
          alt="USA flag"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
};

export default Header;
