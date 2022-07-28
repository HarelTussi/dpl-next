import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";

type Props = {};

const Recommendations = (props: Props) => {
  return (
    <div className="mb-6">
      <div className="relative bg-primary2-50 pt-10 pb-24">
        <Heading
          type="Subhead 01"
          className="mx-auto mb-2 max-w-[20ch] text-center !font-semibold text-primary2-200"
        >
          Don’t just take our word for it
        </Heading>
        <Paragraph className="mx-auto text-center text-primary2-200">
          Ask other people...
        </Paragraph>
      </div>
      <div className="-mt-[80px]">
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides
          className="!pb-4 "
          slidesPerView={1.2}
          spaceBetween={24}
          autoplay={{ delay: 4500, disableOnInteraction: true }}
          modules={[Autoplay]}
          initialSlide={2}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 24,
              autoplay: { delay: 4500, disableOnInteraction: true },
              modules: [Autoplay],
              initialSlide: 2,
            },
            678: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              autoplay: { delay: 4500, disableOnInteraction: true },
              modules: [Autoplay],
              initialSlide: 2,
            },
            1024: {
              slidesPerView: 3,
              initialSlide: 1,
              spaceBetween: 20,
              allowTouchMove: false,
              width: 920,
              wrapperClass: "mx-auto",
            },
          }}
        >
          <SwiperSlide>
            <Recommendation
              quote="I was surprised at how quickly you could get comprehensive information about specific diamonds and their availability in the market; this kind of technology makes anyone feel like an analysis expert in diamonds."
              name="Christopher Zoettl"
              company="Designer Diamonds"
              img="/assets/images/recommenders/chris.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Recommendation
              quote="Our industry needs greater, faster data analysis; adding visual results makes it so much easier and intuitive to understand and take action. I like the solution created by DPL Insights and can definitely see how it can impact the industry for the better."
              name="Howard Hauben"
              company="Centurion Jewelry By Invitation Only, LLC"
              img="/assets/images/recommenders/howard.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Recommendation
              quote="Proper research is time-consuming and requires multiple sources. Until now, real-time analysis of the market was thought to be impossible. Looking at the platform, I understand how “DPL Insights” is about to change all of that."
              name="Raj Mehta"
              company="Rosy Blue"
              img="/assets/images/recommenders/raj.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Recommendation = ({
  quote,
  img,
  name,
  company,
}: {
  quote: string;
  img: string;
  name: string;
  company: string;
}) => {
  return (
    <div className="mx-auto rounded-3xl bg-white p-7 shadow-md">
      <div className="flex items-center">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="mt-3 font-semibold leading-6 text-primary2-200 ">
        &quot;{quote}&quot;
      </div>
      <div className="mt-6 flex items-center">
        <div className="relative h-16 w-16 rounded-full bg-black">
          <Image src={img} layout="fill" objectFit="cover" alt={name} />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-primary2-100">{name}</h3>
          <p className="max-w-[20ch] text-sm text-secondary2-200">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.40104 1.33301L10.461 5.50634L15.0677 6.17967L11.7344 9.42634L12.521 14.013L8.40104 11.8463L4.28104 14.013L5.06771 9.42634L1.73438 6.17967L6.34104 5.50634L8.40104 1.33301Z"
        fill="#006DFF"
      />
    </svg>
  );
};
export default Recommendations;
