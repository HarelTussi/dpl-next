import Heading from "@ui/Heading";
import Section from "@ui/Section";
import { Disclosure } from "@headlessui/react";
import { clsx } from "@utils/index";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "@ui/Container";
const faqs = [
  {
    question: "What is The Diamond Price List (DPL™)?",
    answer:
      "The Diamond Price List (DPL™) is an independent, market-referenced price list for polished diamonds that offers the perfect balance of advanced Machine Learning, Artificial Intelligence (AI) and Data Science, optimized to mathematically calculate and reflect current market diamond pricing in the smartest and most accurate, objective manner for the end user.",
  },
  {
    question: "Is there a need for a new diamond price list?",
    answer:
      "Yes, absolutely. For years, diamantaires, jewelers and diamond merchants have referenced price lists without remotely understanding the methodology behind the numbers. The Diamond Price List (DPL™) is transparent, and the methodology behind its findings sit in the public domain.",
  },
  {
    question:
      "What makes The Diamond Price List (DPL™) different from other diamond price lists on the market today?",
    answer:
      "· The Diamond Price List (DPL™) is objective. Its owners are not diamond merchants, nor do they own or trade diamonds. Furthermore, have no conflict of interest with regards to publishing a polished diamonds price list.\n\n            · DPL™’s artificial intelligence (AI) modeling uses the largest, licensed, set of rich quality data received anonymously from the most comprehensive database available to the industry today, www.get-diamonds.com, to determine its final price list.\n\n            · While competitors do not share their methodology and technology, DPL™ is the world’s most accurate and reliable price list that represents current market diamond pricing; it is based on an objective, transparent, trusted and revolutionary methodology, uninfluenced by interested parties.\n\n            · DPL™ is engaging a leading international accounting firm in order to perform and provide an external audit of the methodology and processes applied.\n            ",
  },
  {
    question:
      "What is the process that leads The Diamond Price List (DPL™) to the final numbers in its price list?",
    answer:
      "\n            1. Defining pricing categories – diamond types and main parameters.\n\n            2. Collecting data on relevant diamonds from the largest data set currently available to the diamond industry.\n\n            3. Algorithm-based calculation of average prices per category whilst eliminating outlier values (unreasonably high or low prices).\n\n            4. Analyzing asking prices against other data including supply and demand and market prices. \n\n            5. In-depth analysis of the price data distribution and correction of anomalies\n\n            6. Filtration through layers of measures including current market conditions, data validation, and preparation of final pricing tables.\n\n            During the process the team consulted with a plethora of industry experts in order to test and validate the results of the different steps.\n\n            ",
  },
  {
    question: "Who created The Diamond Price List (DPL™)?",
    answer:
      "DPL™ was designed and built by a separate dedicated team within Lucy Platforms, an Israeli based, leading technology developer of e-commerce platforms for the diamond industry.",
  },
  {
    question:
      "Why does The Diamond Price List not include prices for I2 and I3 qualities",
    answer:
      "Relatively very few of these goods are certified, with limited standardisation in assortment and a wide possible variance in actual quality. Accordingly, we do not believe that a truly accurate list price for either quality can be usefully provided.",
  },
  {
    question: "Is The Diamond Price List (DPL™) issued by Get-Diamonds?",
    answer:
      'No, DPL™ is issued by a team of mathematicians and statisticians within Lucy Platforms, the technology company that operates the Get-Diamonds site for the World Federation of Diamond Bourses (WFDB).\n\n            DPL™ licensed an anonymous sub-set of the Get-Diamonds database as one of the data sources for creating and updating the DPL™ price list. \n\n            DPL™ is a separate team within Lucy Platforms, that is not involved in the daily operation of Get -Diamonds, working under tight "Chinese Walls" in order to guarantee data privacy and no conflict of interests.\n            ',
  },
  {
    question:
      "Is The Diamond Price List (DPL™) available to all members of the diamond trade?",
    answer:
      "Yes, DPL™ is accessible only to eligible diamond trade members and is closely monitored by multiple advanced security levels to ensure that. \n\n              The price list will be offered free of charge for a trial period.\n              ",
  },
  {
    question:
      "What is the advantage of using Artificial Intelligence (AI) to create The Diamond Price List (DPL™)?",
    answer:
      "Advanced Machine Learning, Artificial Intelligence (AI) and Data Science are quickly evolving, primarily because AI processes large amounts of data much faster and makes predictions more accurately and objectively than humanly possible. \n\n              AI eliminates reliance on human inputs, thereby making DPL™ trusted and objective, without any human intervention. \n\n              The most critical factor in the model performance is the quality of the data. DPL™ has access to the largest data set of rich data, providing it a great advantage when creating accurate and reliable artificial intelligence models.\n              ",
  },
  {
    question:
      "What differentiates The DPL™ Diamond Price Calculator app from similar apps on the market today?",
    answer:
      "We developed the DPL™ Diamond Price Calculator in consultation with stakeholders throughout all levels of the supply chain, to help simplify and condense the steps diamantaires, jewelers and diamond merchants take today to achieve a final price. \n\n              Among its impressive functions are calculating the price of a diamond, setting your discount rate, viewing advanced related graphs, and sharing it right away with colleagues and clients. \n\n              The app also allows you to view the price list in a mobile-friendly way, to search diamonds from Get-Diamonds (without the supplier information, of course), and has a direct integration with GIA so you can verify the certificates digitally.\n              ",
  },
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "AI is a simulation of human intelligence processes by machines. AI makes it possible for machines to learn from experience, adjust to new inputs and perform human-like tasks. \n\n              Most AI examples that you hear about today – from chess-playing computers, algo-trading in the stock market to self-driving cars – use complex and sophisticated machine learning models and train them over a massive amount of data. \n\n              This way, a computer can learn how to accomplish human-like tasks or even excel in tasks which are beyond human brain capacity.\n              ",
  },
  {
    question: "What is machine learning?",
    answer:
      "Machine learning automates analytical model building. \n\n              It uses different methods from neural networks, statistics, operations research and physics, to find hidden insights in data without explicitly being programmed for where to look or what to conclude.\n              ",
  },
  {
    question: "What is data preprocessing?",
    answer:
      "In any machine learning process, data preprocessing is the step in which the data gets transformed or encoded to bring it to such a state that now the machine can easily parse it. \n\n             In other words, the features of the data can now be easily interpreted by the algorithm. \n             ",
  },
];

function Faqs() {
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
