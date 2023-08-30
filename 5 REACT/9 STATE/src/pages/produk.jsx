import { Fragment } from "react";
import KartuProduk from "../components/Fragments/KartuProduk";
import Tombol from "../components/Elements/Button";
import Hitung from "../components/Fragments/Hitung";

const produk_produk = [
  {
    id: 1,
    judul: "Baju Mahal",
    harga: "Rp 1.000.000.000",
    foto: "/images/baju.jpg",
    deskripsi: `lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto `,
  },
  {
    id: 2,
    judul: "Baju Murah",
    harga: "Rp 1.00.000",
    foto: "/images/baju.jpg",
    deskripsi: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto`,
  },
  {
    id: 3,
    judul: "Baju",
    harga: "Rp 1.0.000",
    foto: "/images/baju.jpg",
    deskripsi: `apa apa apa`,
  },
];

const email = localStorage.getItem("email");
const handleKeluar = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("kata_sandi");
  window.location.href = "/masuk";
};

const ProdukPage = () => {
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{email}</p>
        <Tombol onClick={handleKeluar}>Keluar</Tombol>
      </div>
      <div className="flex justify-center py-5">
        {produk_produk.map((produk) => (
          <KartuProduk key={produk.id}>
            <KartuProduk.Kepala foto={produk.foto} />
            <KartuProduk.Tubuh judul={produk.judul}>
              {produk.deskripsi}
            </KartuProduk.Tubuh>
            <KartuProduk.Kaki harga={produk.harga} />
          </KartuProduk>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Hitung></Hitung>
      </div>
    </Fragment>
  );
};

export default ProdukPage;
