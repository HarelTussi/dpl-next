import { clsx } from "@utils/index";
import React from "react";

const AppStoreLink = ({
  className,
  type,
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement> & { type: "google" | "apple" }) => {
  const href =
    type === "google"
      ? "https://play.google.com/store/apps/details?id=com.DiamondPrice.DiamondPrice"
      : "https://apps.apple.com/il/app/lucy-calculator/id1522203901";

  return (
    <a
      className={clsx(
        "flex items-center justify-center rounded-md bg-primary-100",
        className
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {type === "google" ? <GoogleIcon /> : <AppleIcon />}
      <div className="ml-2">
        <span className="block text-xs leading-[1] text-white">
          {type === "google" ? "Get it On" : "Download on the"}
        </span>
        <span className="mt-[2px] block text-sm font-bold leading-[1] text-white">
          {type === "google" ? "Google Play" : "App Store"}
        </span>
      </div>
    </a>
  );
};

export default AppStoreLink;

const GoogleIcon = () => {
  return (
    <svg
      width="26"
      height="29"
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_568_5304)">
        <path
          d="M0.537291 1.08153C0.199599 1.42551 0 1.95936 0 2.65067V27.3504C0 28.0429 0.199599 28.5756 0.537291 28.9196L0.623163 29L15 15.1636V15.0006V14.8375L0.623163 1L0.537291 1.08153Z"
          fill="url(#paint0_linear_568_5304)"
        />
        <path
          d="M19.4687 20L15 15.1701V14.9994V14.8287L19.4698 10L19.5705 10.062L24.866 13.3123C26.378 14.2406 26.378 15.7594 24.866 16.6889L19.5705 19.9392L19.4687 20Z"
          fill="url(#paint1_linear_568_5304)"
        />
        <g filter="url(#filter1_i_568_5304)">
          <path
            d="M19 19.5982L14.4434 15L1 28.5671C1.49622 29.0983 2.31715 29.1636 3.24164 28.6346L19 19.5982Z"
            fill="url(#paint2_linear_568_5304)"
          />
        </g>
        <path
          d="M19 10.0723L3.24164 0.391968C2.31715 -0.176024 1.49622 -0.104879 1 0.46428L14.4444 15L19 10.0723Z"
          fill="url(#paint3_linear_568_5304)"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_568_5304"
          x="0"
          y="0"
          width="26"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_568_5304"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_568_5304"
            result="effect2_innerShadow_568_5304"
          />
        </filter>
        <filter
          id="filter1_i_568_5304"
          x="1"
          y="15"
          width="18"
          height="14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_568_5304"
          />
        </filter>
        <linearGradient
          id="paint0_linear_568_5304"
          x1="13.7256"
          y1="2.38933"
          x2="-5.00327"
          y2="21.8497"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset="0.0066" stopColor="#00A1FF" />
          <stop offset="0.2601" stopColor="#00BEFF" />
          <stop offset="0.5122" stopColor="#00D2FF" />
          <stop offset="0.7604" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_568_5304"
          x1="26.8342"
          y1="14.9994"
          x2="0.647483"
          y2="14.9994"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset="0.4087" stopColor="#FFBD00" />
          <stop offset="0.7754" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_568_5304"
          x1="16.5255"
          y1="17.4971"
          x2="-8.24818"
          y2="42.0468"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_568_5304"
          x1="-2.38576"
          y1="-8.12233"
          x2="9.43063"
          y2="2.80694"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset="0.0685" stopColor="#2DA771" />
          <stop offset="0.4762" stopColor="#15CF74" />
          <stop offset="0.8009" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const AppleIcon = () => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7045 12.7631C16.729 10.9104 17.7481 9.15738 19.3648 8.18699C18.3449 6.76488 16.6366 5.86322 14.8592 5.80893C12.9636 5.61467 11.1258 6.91639 10.1598 6.91639C9.17508 6.91639 7.68777 5.82822 6.08619 5.86039C3.99859 5.92624 2.05242 7.08501 1.03676 8.86687C-1.14651 12.5573 0.482015 17.9809 2.5734 20.964C3.61977 22.4247 4.84267 24.0564 6.44281 23.9985C8.00865 23.9351 8.59346 23.0237 10.4836 23.0237C12.3561 23.0237 12.9048 23.9985 14.5374 23.9617C16.2176 23.9351 17.2762 22.4945 18.2859 21.02C19.0377 19.9791 19.6162 18.8288 20 17.6116C18.0254 16.7962 16.7068 14.8562 16.7045 12.7631Z"
        fill="white"
      />
      <path
        d="M13.6208 3.84713C14.5369 2.77343 14.9882 1.39335 14.8789 0C13.4793 0.143521 12.1864 0.796601 11.2579 1.82911C10.35 2.83793 9.87749 4.19372 9.96681 5.53382C11.3669 5.54789 12.7434 4.91252 13.6208 3.84713Z"
        fill="white"
      />
    </svg>
  );
};
