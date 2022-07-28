import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

type Props = {};

const Recommendations = (props: Props) => {
  return (
    <Section className="relative ">
      <div className="relative bg-primary2-50 pt-10 pb-24">
        <Heading
          type="Subhead 01"
          className="mx-auto mb-2 max-w-[20ch] text-center text-primary2-200"
        >
          Don’t just take our word for it
        </Heading>
        <Paragraph className="mx-auto text-center text-primary2-200">
          Ask other people...
        </Paragraph>
      </div>
      <div className="-mt-[60px]">
        <Swiper
          slidesPerView={1.2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 4500, disableOnInteraction: true }}
          centeredSlides
          modules={[Autoplay]}
          initialSlide={2}
          className="!pb-4"
          spaceBetween={20}
        >
          <SwiperSlide>
            <Recommendation />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Recommendation />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Recommendation />
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

const Recommendation = () => {
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
        &quot;Our industry needs greater, faster data analysis; adding visual
        results makes it so much easier and intuitive to understand and take
        action. I like the solution created by DPL Insights and can definitely
        see how it can impact the industry for the better.&quot;
      </div>
      <div className="mt-6 flex">
        <div className="h-16 w-16 rounded-full bg-black"></div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-primary2-100">
            Howard Hauben
          </h3>
          <p className="max-w-[20ch] text-sm text-secondary2-200">
            Centurion Jewelry By Invitation Only, LLC
          </p>
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
