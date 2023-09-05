import PembungkusApp from "@/components/layout/PembungkusApp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PembungkusApp>
        <Component {...pageProps} />;
      </PembungkusApp>
    </>
  );
}
