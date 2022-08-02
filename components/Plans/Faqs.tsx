import Heading from "@ui/Heading";
import { clsx } from "@utils/index";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@ui/Container";
import { usePlansContent } from "pages/plans";

function Faqs() {
  const { faqs } = usePlansContent();
  return (
    <Container className="bg-white py-8">
      <Heading
        type="Subhead 01"
        className="mb-5 !font-semibold text-primary2-200"
      >
        Frequently Asked Questions
      </Heading>
      {faqs.map((item, idx) => {
        return <Faq {...item} key={idx} />;
      })}
    </Container>
  );
}

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "mb-2 w-full rounded-md border border-primary2-50 px-4 py-3 transition-all ease-in-out",
        isOpen ? "bg-primary2-50" : "bg-white"
      )}
    >
      <button
        className="flex w-full items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p
          className={clsx(
            "text-left text-sm text-primary2-200 transition-all ease-in-out",
            isOpen ? "font-semibold" : "font-normal"
          )}
        >
          {question}
        </p>
        <div className="ml-2 min-w-[18px]">{isOpen ? <Minus /> : <Plus />}</div>
      </button>
      <motion.div
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
        initial={{ height: 0, opacity: 0 }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-gray-500 mt-4 text-sm leading-[21px] text-primary2-200">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Plus = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="#182D5D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.80078 9H12.2008"
        stroke="#182D5D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5.7998L9 12.1998"
        stroke="#182D5D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Minus = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="#182D5D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.80078 9H12.2008"
        stroke="#182D5D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Faqs;
