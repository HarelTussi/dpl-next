import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import React from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div
        className="flex flex-col items-center text-center 
                 md:justify-center md:py-8"
      >
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="min-h-[72px]"
        >
          <path
            d="M36 72C28.8799 72 21.9197 69.8887 15.9995 65.9329C10.0793 61.9772 5.46511 56.3548 2.74035 49.7766C0.0155983 43.1985 -0.697322 35.9601 0.691746 28.9768C2.08081 21.9934 5.50948 15.5789 10.5442 10.5442C15.5789 5.50948 21.9934 2.08081 28.9768 0.691746C35.9601 -0.697322 43.1985 0.0155983 49.7766 2.74035C56.3548 5.46511 61.9772 10.0793 65.9329 15.9995C69.8887 21.9197 72 28.8799 72 36C71.9892 45.5445 68.1928 54.6949 61.4439 61.4439C54.6949 68.1928 45.5445 71.9892 36 72ZM36 3.60002C28.8677 3.59997 21.9346 5.95338 16.2761 10.2952C10.6176 14.6371 6.54987 20.7248 4.70384 27.6141C2.85781 34.5034 3.33664 41.8094 6.06604 48.3988C8.79545 54.9883 13.6229 60.493 19.7997 64.0592C25.9765 67.6254 33.1574 69.0538 40.2288 68.1228C47.3001 67.1919 53.8667 63.9536 58.91 58.9103C63.9534 53.867 67.1916 47.3004 68.1226 40.2291C69.0536 33.1578 67.6252 25.9768 64.059 19.8C61.2125 14.8771 57.1218 10.7891 52.197 7.9458C47.2723 5.10248 41.6866 3.6038 36 3.60002ZM30.6 46.8C30.3635 46.7999 30.1294 46.7533 29.911 46.6627C29.6926 46.5721 29.4941 46.4393 29.327 46.272L22.127 39.072C21.7901 38.7332 21.6009 38.2748 21.6009 37.797C21.6009 37.3192 21.7901 36.8608 22.127 36.522C22.2942 36.3542 22.4929 36.2211 22.7117 36.1302C22.9305 36.0394 23.1651 35.9926 23.402 35.9926C23.6389 35.9926 23.8735 36.0394 24.0923 36.1302C24.3111 36.2211 24.5098 36.3542 24.677 36.522L30.6 42.454L47.327 25.726C47.4944 25.5588 47.6932 25.4262 47.9119 25.3357C48.1306 25.2453 48.3649 25.1988 48.6016 25.199C48.8382 25.1991 49.0725 25.2458 49.2911 25.3365C49.5097 25.4272 49.7083 25.5601 49.8755 25.7275C50.0428 25.895 50.1754 26.0937 50.2658 26.3124C50.3562 26.5311 50.4027 26.7654 50.4026 27.0021C50.4024 27.2387 50.3557 27.473 50.265 27.6916C50.1743 27.9102 50.0415 28.1088 49.874 28.276L31.874 46.276C31.7071 46.4435 31.5084 46.5761 31.2897 46.6661C31.071 46.7561 30.8365 46.8016 30.6 46.8Z"
            fill="#0A0A0A"
          />
        </svg>
        <Heading type="Subhead 01" className="mt-8 mb-6 text-center">
          Thank you for choosing The Diamond Price List
        </Heading>
        <Paragraph className="md:mb-4 md:max-w-[510px]">
          Thank you for registering for access to The Diamond Price List. We are
          reviewing and will notify you within 48 hours regarding your approval
          status.
        </Paragraph>
        <Paragraph className="mt-2">
          Feel free to get in touch at info@thediamondpriclist.com
        </Paragraph>
        <Button
          onClick={() => router.push("/")}
          className="my-6 h-[56px] w-full text-white md:mt-8 md:min-h-[56px] md:w-[200px]"
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
