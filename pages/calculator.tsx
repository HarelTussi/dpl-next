import App from "@components/Calculator/App";
import Hero from "@components/Calculator/Hero";
import Benefits from "@components/Calculator/Benefits";
import Container from "@ui/Container";
import Page from "@ui/Page";
import Head from "next/head";
import React from "react";
import DownloadApp from "@components/Calculator/DownloadApp";

const Calcualtor = () => {
  return (
    <Page>
      <Head>
        <title>Calculator</title>
      </Head>
      <Container>
        <Hero />
        <App />
        <Benefits />
        <DownloadApp />
      </Container>
    </Page>
  );
};

export default Calcualtor;
