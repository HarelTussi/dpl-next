import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@components/Footer";
import { ClickToComponent } from "click-to-react-component";
import Header from "@ui/Header";
import ScrollObserver from "@components/ScrollObserver";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollObserver />
      <ClickToComponent />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
