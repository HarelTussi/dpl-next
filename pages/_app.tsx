import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ScrollContextProvider } from "contexts/ScrollContext";
import Footer from "@components/Footer";
import { ClickToComponent } from "click-to-react-component";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollContextProvider>
      <ClickToComponent />
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ScrollContextProvider>
  );
}

export default MyApp;
