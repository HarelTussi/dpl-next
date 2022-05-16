import Container from "@ui/Container";
import Head from "next/head";
import Page from "@ui/Page";
import WhatIsMethodology from "@components/WhatIsMethodology";
import Faqs from "@components/Faqs";
import ContactUs from "@components/ContactUs";

const Support = () => {
  return (
    <Page>
      <Head>
        <title>Support</title>
      </Head>
      <Container>
        <ContactUs />
        <Faqs />
        <WhatIsMethodology />
      </Container>
    </Page>
  );
};

export default Support;
