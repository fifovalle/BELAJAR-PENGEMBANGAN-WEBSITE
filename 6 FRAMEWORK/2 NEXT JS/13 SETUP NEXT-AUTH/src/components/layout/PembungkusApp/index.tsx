import { useRouter } from "next/router";
import Navigasibar from "../Navigasibar";

type PembungkusAppAtribut = {
  children: React.ReactNode;
};

const nonaktifNavigasi = ["/auntentik/masuk", "/auntentik/daftar", "/404"];

const PembungkusApp = (atribut: PembungkusAppAtribut) => {
  const { children } = atribut;
  const { pathname } = useRouter();
  return (
    <main>
      {!nonaktifNavigasi.includes(pathname) && <Navigasibar />}
      {children}
    </main>
  );
};

export default PembungkusApp;
