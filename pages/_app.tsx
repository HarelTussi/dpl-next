import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@components/Footer";
import Header from "@ui/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteListener from "@components/RouteListener/RouteListener";
import Script from "next/script";
import Intercom from "@components/Intercom";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-183371956-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-183371956-1');
        `}
      </Script>
      <RouteListener />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Intercom />
    </QueryClientProvider>
  );
}

export default MyApp;
