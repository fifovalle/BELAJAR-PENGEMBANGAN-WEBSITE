import Navigasibar from "../Navigasibar";

type PembungkusAppAtribut = {
  children: React.ReactNode;
};

const PembungkusApp = (atribut: PembungkusAppAtribut) => {
  const { children } = atribut;
  return (
    <main>
      <Navigasibar />
      {children}
    </main>
  );
};

export default PembungkusApp;
