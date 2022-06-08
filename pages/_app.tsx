import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@components/Footer";
import Header from "@ui/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteListener from "@components/RouteListener/RouteListener";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouteListener />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}

export default MyApp;
