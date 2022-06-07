import App from "@components/Calculator/App";
import Hero from "@components/Calculator/Hero";
import Benefits from "@components/Calculator/Benefits";
import Container from "@ui/Container";
import Head from "next/head";
import React from "react";
import DownloadApp from "@components/Calculator/DownloadApp";
import GuestPage from "@components/Page/GuestPage";

const Calcualtor = () => {
  return (
    <GuestPage>
      <Head>
        <title>Calculator</title>
      </Head>
      <Container>
        <Hero />
        <App />
        <Benefits />
        <DownloadApp />
      </Container>
    </GuestPage>
  );
};

export default Calcualtor;
