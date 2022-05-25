import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@components/Footer";
import { ClickToComponent } from "click-to-react-component";
import Header from "@ui/Header";
import ScrollObserver from "@components/ScrollObserver";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollObserver />
      <ClickToComponent />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}

export default MyApp;
