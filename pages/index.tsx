import type { GetStaticProps } from "next";
import Container from "@ui/Container";
import Head from "next/head";
import { api } from "api";
// import Hero from "@components/Home/Hero";
// import Benefits from "@components/Home/Benefits";
import NeverSeenBefore from "@components/Home/NeverSeenBefore";
import YourDiamonds from "@components/Home/YourDiamonds";
import DataScience from "@components/Home/DataScience";
import GoToApp from "@components/Home/GoToApp";
import GuestPage from "@components/Page/GuestPage";
import FirstHero from "@components/Home/FirstHero";
import Hero from "@components/Home/new/Hero";
import Cards from "@components/Home/new/Cards";
import Federation from "@components/Home/new/Federation";
import Industry from "@components/Home/new/Industry";
import PriceList from "@components/Home/new/PriceList";
import Quote from "@components/Home/new/Quote";

interface Props {
  availableDiamonds: string;
  suppliers: string;
  totalValue: string;
}

const Home = ({}: // availableDiamonds, suppliers, totalValue
Props) => {
  // const stats = [
  //   { value: availableDiamonds, label: "Available Diamonds" },
  //   { value: suppliers, label: "Suppliers" },
  //   { value: totalValue, label: "Total Value" },
  // ];
  // const benefits = [
  //   {
  //     icon: "/assets/images/check.svg",
  //     title: "Objective + Reliable",
  //     subtitle:
  //       "DPL’s A.I algorithms are programmed to follow strict, clear and transparent methodologies to ensure data integrity. This will be third-party verified by an independent expert institution.",
  //   },
  //   {
  //     icon: "/assets/images/plus-box.svg",
  //     title: "Smart + Accurate",
  //     subtitle:
  //       "The DPL is based on advanced Machine Learning, Artificial Intelligence (AI) and Data Science, optimized to mathematically calculate and reflect current market pricing in the most accurate and objective manner.",
  //   },
  //   {
  //     icon: "/assets/images/trapeze.svg",
  //     title: "Accessible + Transparent",
  //     subtitle:
  //       "The DPL and its methodology are transparent and accessible to all members of the diamond trade.",
  //   },
  // ];

  return (
    <GuestPage classNames="bg-[url('/assets/images/guest-bg.png')]">
      <Head>
        <title>The Diamond Price List</title>
      </Head>
      <Container>
        {/* <FirstHero /> */}
        {/* <Hero stats={stats} /> */}
        {/* <Benefits
          benefits={benefits}
          className="grid gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-4"
        /> */}
        {/* <NeverSeenBefore /> */}
        {/* <YourDiamonds /> */}
        {/* <GoToApp /> */}
        {/* <DataScience /> */}

        {/* New */}
     
        <Hero />
        <Cards />
        <Federation />
        {/* <Industry/> */}
        <Quote />
        <PriceList />
      </Container>
    </GuestPage>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stats = await api.GD.getDiamondsStats();
  return {
    props: stats,
  };
};

export default Home;
