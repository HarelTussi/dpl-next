import BusinessDetails from "@components/Registration/BusinessDetails";
import CreateAccount from "@components/Registration/CreatAccount";
import ReferenceOne from "@components/Registration/ReferenceOne";
import ReferenceTwo from "@components/Registration/ReferenceTwo";
import ThankYou from "@components/Registration/ThankYou";
import Walkthrough from "@components/Registration/Walkthrough";
import useScrollToTop from "@hooks/useScrollToTop";
import Container from "@ui/Container";
import Divider from "@ui/Divider";
import Heading from "@ui/Heading";
import Page from "@ui/Page";
import Paragraph from "@ui/Paragraph";
import { clsx } from "@utils/index";
import Head from "next/head";
import { useEffect } from "react";
import { useRegistrationStore } from "stores/registration";
import styles from "../styles/register.module.css";
const steps = [CreateAccount, BusinessDetails, ReferenceOne, ReferenceTwo];
const titles = [
  "Create Account",
  "Business Details",
  "Reference 1",
  "Reference 2",
];
const Register = () => {
  const step = useRegistrationStore((state) => state.step);
  const isInLastStep = step === steps.length + 1;
  const scrollToTop = useScrollToTop();
  useEffect(() => {
    scrollToTop();
  }, [step, scrollToTop]);

  return (
    <Page>
      <Head>
        <title>Register to DPL</title>
      </Head>
      <Container
        className={clsx(
          "xl:flex xl:w-full xl:flex-1 xl:items-center xl:justify-center",
          isInLastStep ? "flex flex-1 flex-col" : ""
        )}
      >
        <div
          className={clsx(
            "border border-primary-40 bg-white p-6 xl:h-[550px] xl:w-full xl:p-16",
            styles.container,
            isInLastStep ? "flex flex-1 flex-col" : ""
          )}
        >
          <div className="flex w-full flex-1 flex-col xl:flex xl:h-full xl:flex-row-reverse">
            {!isInLastStep && (
              <div className="md:max-w-[550px] lg:max-w-[660px] xl:max-w-none xl:flex-[1]">
                <div className="mb-2 md:flex md:items-center">
                  <Heading type="Heading 02">{titles[step - 1]}</Heading>
                  <Paragraph className="md:ml-4">
                    {step}/{steps.length}
                  </Paragraph>
                </div>
                {steps.map((Comp, index) =>
                  step === index + 1 ? <Comp key={index} /> : null
                )}
              </div>
            )}
            {!isInLastStep && (
              <Divider className="md:max-w-[600px] xl:hidden xl:max-w-[720px]" />
            )}
            {!isInLastStep && (
              <Divider
                type="vertical"
                className="hidden xl:mr-14 xl:ml-20 xl:block xl:h-[400px] "
              />
            )}
            {!isInLastStep && (
              <div className="md:max-w-[550px] lg:max-w-[660px]  xl:max-w-none xl:flex-[1.1]">
                <Walkthrough />
              </div>
            )}
            {isInLastStep && <ThankYou />}
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Register;
