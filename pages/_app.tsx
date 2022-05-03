import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScrollContextProvider } from "contexts/ScrollContext";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollContextProvider>
      <Component {...pageProps} />
      <Footer />
    </ScrollContextProvider>
  );
}

export default MyApp;
