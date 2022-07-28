import Container from "@ui/Container";
import Heading from "@ui/Heading";
import "swiper/css";
import Image from "next/image";
import styles from "./Trusted.module.css";

type Props = {};

const Trusted = (props: Props) => {
  return (
    <div className="mb-6 bg-white py-8 pb-10">
      <Container>
        <Heading
          type="Subhead 01"
          className="mx-auto mb-4 text-center !font-semibold text-primary2-200"
        >
          Trusted by the Leading Industry Professionals
        </Heading>
      </Container>
      <Slider />
    </div>
  );
};

const Slider = () => {
  const displaySlides = () => {
    return (
      <>
        <div className={styles.slide}>
          <Image
            src="/assets/images/trusted/wfdb.png"
            height={65}
            width={126}
            alt="wfdb logo"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/assets/images/trusted/hennig.png"
            height={67}
            width={68}
            alt="henning logo"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/assets/images/trusted/rosy-blue.png"
            height={67}
            width={133}
            alt="rosy-blue logo"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/assets/images/trusted/dharm-diam.png"
            height={71}
            width={83}
            alt="dharm-diam logo"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="/assets/images/trusted/venus.png"
            height={90}
            width={141}
            alt="venus logo"
          />
        </div>
      </>
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {displaySlides()}
        {displaySlides()}
      </div>
    </div>
  );
};

export default Trusted;
