import Container from "@ui/Container";
import Head from "next/head";
import WhatIsMethodology from "@components/WhatIsMethodology";
import Faqs from "@components/Faqs";
import ContactUs from "@components/ContactUs";
import GuestPage from "@components/Page/GuestPage";

const Support = () => {
  return (
    <GuestPage classNames="bg-[url('/assets/images/guest-bg.png')]">
      <Head>
        <title>Support</title>
      </Head>
      <Container>
        <ContactUs />
        <Faqs />
        <WhatIsMethodology />
      </Container>
    </GuestPage>
  );
};

export default Support;
