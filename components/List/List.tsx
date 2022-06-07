import React, { useEffect, useState } from "react";
import { PriceListItem } from "types/list";
import { groupBy } from "lodash";
import styles from "./List.module.css";
import { clsx } from "@utils/index";
import { usePriceListStore } from "stores/pricelist";
import QuickFind from "./QuickFind";
import Paragraph from "@ui/Paragraph";
type Props = {
  roundJson: PriceListItem[];
  fancyJson: PriceListItem[];
};

const getClarityClassName = (clarity: string) => {
  return [
    styles.clarityCell,
    ["VVS2", "VS2", "SI3"].includes(clarity) ? styles.cellWithBorderRight : "",
  ].join(" ");
};

const getPriceClassName = (clarity: string, color: string) => {
  return [
    styles.priceCell,
    ["VVS2", "VS2", "SI3"].includes(clarity) ? styles.cellWithBorderRight : "",
    ["F", "H", "K"].includes(color) ? styles.cellWithBorderBottom : "",
  ].join(" ");
};

const getColorClassName = () => {
  return [styles.cell, styles.colorCell].join(" ");
};

const List = ({ roundJson, fancyJson }: Props) => {
  const [list, setList] = useState(null as any);
  const [clarities, setClarities] = useState([] as string[]);
  const [colors, setColors] = useState([] as string[]);
  const [carats, setCarats] = useState([] as string[]);
  const listType = usePriceListStore((state) => state.listType);
  const setListType = usePriceListStore((state) => state.setListType);

  useEffect(() => {
    const list = listType === "round" ? roundJson : fancyJson;
    const groupsByCarat = groupBy(list, (item) =>
      [item.minCarat, item.maxCarat].join(" - ")
    );
    for (const key in groupsByCarat) {
      groupsByCarat[key] = groupBy(
        groupsByCarat[key],
        (item) => item.color
      ) as any;
    }
    const carats = Object.keys(groupsByCarat);
    const colors = Object.keys(groupsByCarat["0.3 - 0.39"]);
    // @ts-ignore
    const clarities = groupsByCarat["0.3 - 0.39"]["D"].map(
      // @ts-ignore
      (item) => item.clarity
    );
    setClarities([...clarities]);
    setColors(colors);
    setCarats(carats);
    setList(groupsByCarat);

    // const downloadPdf = () => {
    //   if (listType === "round") {
    //     window.open(
    //       "https://lucy-common-files.s3.eu-west-1.amazonaws.com/DPL_price_list_ROUND_2022.pdf"
    //     );
    //   } else {
    //     window.open(
    //       "https://lucy-common-files.s3.eu-west-1.amazonaws.com/DPL_price_list_FANCY_2022.pdf"
    //     );
    //   }
    // };
  }, [listType, roundJson, fancyJson]);

  return (
    <div>
      {/* actions container */}
      <div className="flex h-[60px] items-center rounded-t-lg bg-[#fafbfe] px-4">
        <Paragraph className="mr-4">List Type</Paragraph>
        <select
          className="h-10 w-32 rounded-md bg-black px-2 text-white outline-none"
          onChange={(e) => setListType(e.target.value as any)}
          value={listType}
        >
          <option value="round">Round</option>
          <option value="fancy">Fancy</option>
        </select>
        <QuickFind />
      </div>
      <div className="lg:grid lg:grid-cols-2">
        {carats &&
          carats.map((carat, index) => {
            return (
              <div
                key={carat}
                className={clsx(
                  "bg-white",
                  index + 1 === carats.length ? "col-span-2" : ""
                )}
              >
                {/* title */}
                <div className="flex h-14 items-center justify-between bg-primary-100 px-4">
                  <h4 className="flex-1 uppercase text-white">DPL</h4>
                  {listType === "round" && <RoundIcon />}
                  <h4 className="flex uppercase text-white">{carat}</h4>
                  <span className="flex-1"></span>
                </div>
                {/* clarities */}
                <div className="grid grid-cols-10">
                  <div className={clsx(styles.clarityCell, "text-center")}>
                    Clarity
                    <br />
                    Color
                  </div>
                  {clarities.map((clarity) => {
                    const className = getClarityClassName(clarity);
                    return (
                      <div key={clarity} className={className}>
                        {clarity}
                      </div>
                    );
                  })}
                </div>
                {/* colors */}
                {colors.map((color) => {
                  return (
                    <div
                      key={[carat, color].join("")}
                      className="grid grid-cols-10"
                    >
                      <div className={getColorClassName()}>{color}</div>
                      {list[carat][color].map((item: any) => {
                        const id = [
                          item.color,
                          item.minCarat,
                          "-",
                          item.maxCarat,
                          item.clarity,
                        ].join("");
                        const className = getPriceClassName(
                          item.clarity,
                          item.color
                        );
                        return (
                          <button
                            key={[carat, item.color, item.clarity].join("")}
                            id={id}
                            className={className}
                          >
                            {item.price}
                          </button>
                        ) as any;
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;

const RoundIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="round-diamond"
      width="37.261"
      height="37.261"
      viewBox="0 0 37.261 37.261"
      className="mr-4"
    >
      <defs>
        <style></style>
      </defs>
      <path
        id="Path_335"
        d="M18.631 35.4A16.768 16.768 0 1 0 1.863 18.631 16.8 16.8 0 0 0 18.631 35.4zm0 1.863a18.631 18.631 0 1 1 18.63-18.632 18.666 18.666 0 0 1-18.63 18.63z"
        fill="#ffffff"
        data-name="Path 335"
      />
      <path
        id="Path_336"
        d="M24.231 7.21l1.952-4.7a.466.466 0 0 0-.86-.358l-1.953 4.7a.466.466 0 0 0 .861.358zm6.724 7.222l4.7-1.941a.466.466 0 1 0-.356-.861l-4.7 1.94a.466.466 0 1 0 .355.862zm-.355 9.861l4.7 1.952a.466.466 0 0 0 .358-.86l-4.7-1.952a.466.466 0 1 0-.358.86zm-7.221 6.724l1.94 4.7a.466.466 0 1 0 .861-.356l-1.94-4.7a.466.466 0 0 0-.861.355zm-9.862-.351l-1.952 4.7a.466.466 0 0 0 .86.358l1.952-4.7a.466.466 0 0 0-.86-.358zM6.8 23.445l-4.7 1.94a.466.466 0 1 0 .356.861l4.7-1.94a.466.466 0 1 0-.356-.861zm.352-9.862L2.45 11.63a.466.466 0 0 0-.358.86l4.7 1.953a.466.466 0 1 0 .358-.861zm7.218-6.724l-1.941-4.7a.466.466 0 1 0-.861.356l1.941 4.7a.466.466 0 0 0 .861-.355zM18.875 1.7l4.564 5.62a.466.466 0 1 0 .723-.587L19.237.672a.466.466 0 0 0-.723 0l-4.937 6.07a.466.466 0 1 0 .723.587L18.875 1.7zm12.173 5.063l-.764 7.2a.466.466 0 1 0 .926.1l.824-7.77a.466.466 0 0 0-.51-.512l-7.785.782-.132.034L6.79 13.582a.466.466 0 1 0 .358.861L23.9 7.482l7.147-.719zM30.407 23.5a.466.466 0 1 0 .583.727l6.089-4.9a.466.466 0 0 0 0-.723l-6.048-4.965a.466.466 0 1 0-.591.719l5.6 4.6-5.641 4.537zm-6.671 6.812a.466.466 0 0 0-.1.926l7.764.862a.466.466 0 0 0 .515-.507l-.746-7.793a.466.466 0 1 0-.928.088l.691 7.218-7.2-.8zm-9.534.078a.466.466 0 1 0-.728.579l4.867 6.113a.466.466 0 0 0 .723.007l4.994-6.023a.466.466 0 1 0-.717-.594l-4.629 5.578zm-6.781-6.7a.466.466 0 1 0-.925-.107l-.9 7.762a.466.466 0 0 0 .5.518l7.792-.709a.466.466 0 1 0-.084-.928l-7.222.657.833-7.191zm-.031-9.54a.466.466 0 0 0-.578-.732L.677 18.256a.466.466 0 0 0-.01.722l6 5.024a.466.466 0 0 0 .6-.714L1.7 18.632l5.69-4.482zm6.735-6.75a.466.466 0 1 0 .112-.925L6.479 5.54a.466.466 0 0 0-.52.5l.672 7.8a.466.466 0 1 0 .929-.08l-.623-7.226 7.188.866zm-.363.028l16.807 7.014a.466.466 0 0 0 .359-.86L14.12 6.569a.466.466 0 1 0-.359.86zm9.638-.245l6.861 16.87a.466.466 0 1 0 .863-.351l-6.862-16.87a.466.466 0 1 0-.863.351zm6.963 6.667L23.22 30.6a.466.466 0 0 0 .857.365l7.141-16.754a.466.466 0 0 0-.857-.365zm.173 9.639l-16.922 6.732a.466.466 0 0 0 .345.866l16.921-6.733a.466.466 0 1 0-.345-.865zm-6.72 6.911l-16.7-7.266a.466.466 0 1 0-.373.853l16.7 7.267a.466.466 0 1 0 .373-.854zm-9.639.1l-6.6-16.972a.466.466 0 0 0-.869.338l6.605 16.972a.466.466 0 0 0 .868-.339zm-6.863-6.77l7.394-16.641a.466.466 0 0 0-.851-.378L6.462 23.353a.466.466 0 1 0 .851.378z"
        fill="#ffffff"
        data-name="Path 336"
        transform="translate(-.034 -.034)"
      />
    </svg>
  );
};
