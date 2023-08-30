import Tombol from "../Elements/Button";

const KartuProduk = (p) => {
  const { children } = p;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Tubuh = (P) => {
  const { children, judul } = P;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {judul}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Kaki = (P) => {
  const { harga } = P;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{harga}</span>
      <Tombol className="bg-blue-600">Beli</Tombol>
    </div>
  );
};

const Kepala = (P) => {
  const { foto } = P;
  return (
    <a href="#">
      <img src={foto} alt="produk" className="p-8 rounded-t-lg" />
    </a>
  );
};

KartuProduk.Kepala = Kepala;
KartuProduk.Tubuh = Tubuh;
KartuProduk.Kaki = Kaki;
export default KartuProduk;
