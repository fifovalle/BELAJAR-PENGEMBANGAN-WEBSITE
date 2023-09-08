import PembungkusApp from "@/components/layout/PembungkusApp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <PembungkusApp>
        <Component {...pageProps} />
      </PembungkusApp>
    </SessionProvider>
  );
}
