import Tombol from "../Elements/Button";

const KartuProduk = (p) => {
  const { children } = p;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2  flex flex-col justify-between">
      {children}
    </div>
  );
};

const Tubuh = (P) => {
  const { children, judul } = P;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {judul.substring(0, 20)}...
        </h5>
        <p className="text-s text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Kaki = (P) => {
  const { harga, handleTambahKeKeranjang, id } = P;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {" "}
        {harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Tombol
        className="bg-blue-600"
        onClick={() => handleTambahKeKeranjang(id)}
      >
        Beli
      </Tombol>
    </div>
  );
};

const Kepala = (P) => {
  const { foto } = P;
  return (
    <a href="#">
      <img
        src={foto}
        alt="produk"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
};

KartuProduk.Kepala = Kepala;
KartuProduk.Tubuh = Tubuh;
KartuProduk.Kaki = Kaki;
export default KartuProduk;
