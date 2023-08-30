import { Fragment, useEffect, useState } from "react";
import KartuProduk from "../components/Fragments/KartuProduk";
import Tombol from "../components/Elements/Button";
import Hitung from "../components/Fragments/Hitung";

const produk_produk = [
  {
    id: 1,
    judul: "Baju Mahal",
    harga: 1000000000,
    foto: "/images/baju.jpg",
    deskripsi: `lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto `,
  },
  {
    id: 2,
    judul: "Baju Murah",
    harga: 100000,
    foto: "/images/baju.jpg",
    deskripsi: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto`,
  },
  {
    id: 3,
    judul: "Baju",
    harga: 10000,
    foto: "/images/baju.jpg",
    deskripsi: `apa apa apa`,
  },
];

const email = localStorage.getItem("email");

const ProdukPage = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  useEffect(() => {
    setKeranjang(JSON.parse(localStorage.getItem("keranjang")) || []);
  }, []);

  useEffect(() => {
    if (keranjang.length > 0) {
      const hasil = keranjang.reduce((total, barang) => {
        const produk = produk_produk.find((p) => p.id === barang.id);
        return total + produk.harga * barang.kuantiti;
      }, 0);
      setTotalHarga(hasil);
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
    }
  }, [keranjang]);

  const handleKeluar = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("kata_sandi");
    window.location.href = "/masuk";
  };

  const handleTambahKeKeranjang = (id) => {
    if (keranjang.find((barang) => barang.id === id)) {
      setKeranjang(
        keranjang.map((barang) =>
          barang.id === id
            ? { ...barang, kuantiti: barang.kuantiti + 1 }
            : barang
        )
      );
    } else {
      setKeranjang([...keranjang, { id, kuantiti: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{email}</p>
        <Tombol onClick={handleKeluar}>Keluar</Tombol>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {produk_produk.map((produk) => (
            <KartuProduk key={produk.id}>
              <KartuProduk.Kepala foto={produk.foto} />
              <KartuProduk.Tubuh judul={produk.judul}>
                {produk.deskripsi}
              </KartuProduk.Tubuh>
              <KartuProduk.Kaki
                harga={produk.harga}
                id={produk.id}
                handleTambahKeKeranjang={handleTambahKeKeranjang}
              />
            </KartuProduk>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
            Keranjang
          </h1>
          <table className="text-left  table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {keranjang.map((barang) => {
                const produk = produk_produk.find((p) => p.id === barang.id);
                return (
                  <tr key={barang.id}>
                    <td>{produk.judul}</td>
                    <td>
                      {produk.harga.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{barang.kuantiti}</td>
                    <td>
                      {(produk.harga * barang.kuantiti).toLocaleString(
                        "id-ID",
                        { style: "currency", currency: "IDR" }
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Harga</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalHarga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Hitung> </Hitung>
      </div> */}
    </Fragment>
  );
};

export default ProdukPage;
