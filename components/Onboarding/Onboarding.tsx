import Container from "@ui/Container";
import Modal from "@ui/Modal";
import { clsx } from "@utils/index";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Onboarding.module.css";
import { motion, AnimatePresence, MotionProps } from "framer-motion";

type Props = {};

const stepAnimation: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeInOut" },
};

const Onboarding = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
      <Container className={styles.container}>
        <div className={styles.main}>
          <div className={styles.stepIndicators}>
            {new Array(5).fill(0).map((_, i) => {
              return (
                <button
                  key={i}
                  className={clsx(
                    styles.stepIndicator,
                    i + 1 <= step ? styles.stepIndicatorActive : ""
                  )}
                  onClick={() => setStep(i + 1)}
                ></button>
              );
            })}
          </div>
          <Steps step={step} />
          <div className={styles.actionsContainer}>
            <button
              className={styles.submit}
              onClick={() => setStep((prev) => prev + 1)}
            >
              Let&apos;s Go
            </button>
            <button
              className={styles.skip}
              onClick={() => setStep((prev) => prev - 1)}
            >
              Skip
            </button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

const Step = ({ title, text }: { title: string; text: string }) => {
  return (
    <motion.div className={styles.stepContainer} {...stepAnimation}>
      <div className={styles.stepGif}>
        <Image src="/assets/images/onboarding_1.gif" layout="fill" alt="gif" />
      </div>
      <h1 className={styles.stepTitle}>{title}</h1>
      <h1 className={styles.stepText}>{text}</h1>
    </motion.div>
  );
};

const Welcome = () => {
  return (
    <motion.div className={styles.welcomeContainer} {...stepAnimation}>
      <p className={styles.welcomeTitle}>Welcome to DPL Insights</p>
      <p className={styles.welcomeSubtitle}>
        We are so happy to have you on board with us!
      </p>
      <p className={styles.welcomeText}>
        Visual data always makes it easier to better understand data. It will
        help you make business decisions gaster and cut through the
        time-consuming traditional processes.
      </p>
      <p className={styles.welcomeSubtitle}>
        Let’s discover your new superpowers
      </p>
    </motion.div>
  );
};

const Steps = ({ step }: { step: number }) => {
  return (
    <div className={styles.stepsContainer}>
      <AnimatePresence exitBeforeEnter>
        {step === 1 && <Welcome key={1} />}
        {step === 2 && (
          <Step
            key={2}
            title="Keep a finger on the market’s pulse"
            text="Filter your way through the market and get the exact data you need using a user-friendly and customizable in-depth analysis of the market’s pricing and supply in real-time."
          />
        )}
        {step === 3 && (
          <Step
            key={3}
            title="Know your Stock! (like never before)"
            text="Explore the My Stock page to learn how to upload your stock and match it against the market to find where you are positioned in real-time and how to manage your pricing strategy like never before. "
          />
        )}
        {step === 4 && (
          <Step
            key={4}
            title="Maximize your diamond expertise - in real-time!"
            text="Explore Diamond page to learn how to maximize your diamond expertise - in real-time!
        Get comprehensive information and historical data trends on any type of diamond with a click of a button. "
          />
        )}{" "}
        {step === 5 && (
          <Step
            key={5}
            title="Be the first to know"
            text="Explore the Watchlist page to learn how to set an instant alert and be notified before anyone else on the availability of a specific diamond in a specific price range and use the personal agent feature to get deal offers to your doorstep!"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
