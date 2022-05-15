import { Disclosure } from "@headlessui/react";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import React from "react";

const faqs = [
  {
    title: "What is The Diamond Price List (DPL™)?",
    text: "The Diamond Price List (DPL™) is an independent, market-referenced price list for polished diamonds that offers the perfect balance of advanced Machine Learning, Artificial Intelligence (AI) and Data Science, optimized to mathematically calculate and reflect current market diamond pricing in the smartest and most accurate, objective manner for the end user.",
  },
  {
    title: "Is there a need for a new diamond price list?",
    text: "Yes, absolutely. For years, diamantaires, jewelers and diamond merchants have referenced price lists without remotely understanding the methodology behind the numbers. The Diamond Price List (DPL™) is transparent, and the methodology behind its findings sit in the public domain.",
  },
  {
    title:
      "What makes The Diamond Price List (DPL™) different from other diamond price lists on the market today?",
    text: "· The Diamond Price List (DPL™) is objective. Its owners are not diamond merchants, nor do they own or trade diamonds. Furthermore, have no conflict of interest with regards to publishing a polished diamonds price list.\n\n            · DPL™’s artificial intelligence (AI) modeling uses the largest, licensed, set of rich quality data received anonymously from the most comprehensive database available to the industry today, www.get-diamonds.com, to determine its final price list.\n\n            · While competitors do not share their methodology and technology, DPL™ is the world’s most accurate and reliable price list that represents current market diamond pricing; it is based on an objective, transparent, trusted and revolutionary methodology, uninfluenced by interested parties.\n\n            · DPL™ is engaging a leading international accounting firm in order to perform and provide an external audit of the methodology and processes applied.\n            ",
  },
  {
    title:
      "What is the process that leads The Diamond Price List (DPL™) to the final numbers in its price list?",
    text: "\n            1. Defining pricing categories – diamond types and main parameters.\n\n            2. Collecting data on relevant diamonds from the largest data set currently available to the diamond industry.\n\n            3. Algorithm-based calculation of average prices per category whilst eliminating outlier values (unreasonably high or low prices).\n\n            4. Analyzing asking prices against other data including supply and demand and market prices. \n\n            5. In-depth analysis of the price data distribution and correction of anomalies\n\n            6. Filtration through layers of measures including current market conditions, data validation, and preparation of final pricing tables.\n\n            During the process the team consulted with a plethora of industry experts in order to test and validate the results of the different steps.\n\n            ",
  },
  {
    title: "Who created The Diamond Price List (DPL™)?",
    text: "DPL™ was designed and built by a separate dedicated team within Lucy Platforms, an Israeli based, leading technology developer of e-commerce platforms for the diamond industry.",
  },
  {
    title:
      "Why does The Diamond Price List not include prices for I2 and I3 qualities",
    text: "Relatively very few of these goods are certified, with limited standardisation in assortment and a wide possible variance in actual quality. Accordingly, we do not believe that a truly accurate list price for either quality can be usefully provided.",
  },
  {
    title: "Is The Diamond Price List (DPL™) issued by Get-Diamonds?",
    text: 'No, DPL™ is issued by a team of mathematicians and statisticians within Lucy Platforms, the technology company that operates the Get-Diamonds site for the World Federation of Diamond Bourses (WFDB).\n\n            DPL™ licensed an anonymous sub-set of the Get-Diamonds database as one of the data sources for creating and updating the DPL™ price list. \n\n            DPL™ is a separate team within Lucy Platforms, that is not involved in the daily operation of Get -Diamonds, working under tight "Chinese Walls" in order to guarantee data privacy and no conflict of interests.\n            ',
  },
  {
    title:
      "Is The Diamond Price List (DPL™) available to all members of the diamond trade?",
    text: "Yes, DPL™ is accessible only to eligible diamond trade members and is closely monitored by multiple advanced security levels to ensure that. \n\n              The price list will be offered free of charge for a trial period.\n              ",
  },
  {
    title:
      "What is the advantage of using Artificial Intelligence (AI) to create The Diamond Price List (DPL™)?",
    text: "Advanced Machine Learning, Artificial Intelligence (AI) and Data Science are quickly evolving, primarily because AI processes large amounts of data much faster and makes predictions more accurately and objectively than humanly possible. \n\n              AI eliminates reliance on human inputs, thereby making DPL™ trusted and objective, without any human intervention. \n\n              The most critical factor in the model performance is the quality of the data. DPL™ has access to the largest data set of rich data, providing it a great advantage when creating accurate and reliable artificial intelligence models.\n              ",
  },
  {
    title:
      "What differentiates The DPL™ Diamond Price Calculator app from similar apps on the market today?",
    text: "We developed the DPL™ Diamond Price Calculator in consultation with stakeholders throughout all levels of the supply chain, to help simplify and condense the steps diamantaires, jewelers and diamond merchants take today to achieve a final price. \n\n              Among its impressive functions are calculating the price of a diamond, setting your discount rate, viewing advanced related graphs, and sharing it right away with colleagues and clients. \n\n              The app also allows you to view the price list in a mobile-friendly way, to search diamonds from Get-Diamonds (without the supplier information, of course), and has a direct integration with GIA so you can verify the certificates digitally.\n              ",
  },
  {
    title: "What is Artificial Intelligence (AI)?",
    text: "AI is a simulation of human intelligence processes by machines. AI makes it possible for machines to learn from experience, adjust to new inputs and perform human-like tasks. \n\n              Most AI examples that you hear about today – from chess-playing computers, algo-trading in the stock market to self-driving cars – use complex and sophisticated machine learning models and train them over a massive amount of data. \n\n              This way, a computer can learn how to accomplish human-like tasks or even excel in tasks which are beyond human brain capacity.\n              ",
  },
  {
    title: "What is machine learning?",
    text: "Machine learning automates analytical model building. \n\n              It uses different methods from neural networks, statistics, operations research and physics, to find hidden insights in data without explicitly being programmed for where to look or what to conclude.\n              ",
  },
  {
    title: "What is data preprocessing?",
    text: "In any machine learning process, data preprocessing is the step in which the data gets transformed or encoded to bring it to such a state that now the machine can easily parse it. \n\n             In other words, the features of the data can now be easily interpreted by the algorithm. \n             ",
  },
];

const Faqs = () => {
  return (
    <Section className="faqs mb-10 grid gap-y-4 ">
      <Heading type="Heading 02">Frequently Asked Questions</Heading>
      {faqs.map((faq, index) => {
        return (
          <Disclosure
            key={index}
            as="div"
            className="border border-primary-30 bg-white"
          >
            {({ open }) => {
              return (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between p-4 text-left">
                    <Heading type="Subhead 03">{faq.title}</Heading>{" "}
                    <div className="ml-4 ">
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-minus-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <Paragraph className="p-4 pt-0 text-left">
                      {faq.text}
                    </Paragraph>
                  </Disclosure.Panel>
                </>
              );
            }}
          </Disclosure>
        );
      })}
    </Section>
  );
};

export default Faqs;
