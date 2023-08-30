import { Fragment, useEffect, useRef, useState } from "react";
import KartuProduk from "../components/Fragments/KartuProduk";
import Tombol from "../components/Elements/Button";
import Hitung from "../components/Fragments/Hitung";
import { ambilProduk } from "../services/produk_produk.service";
import { ambilUsername } from "../services/masuk.service";
import { useMasuk } from "../hooks/useMasuk";
import KeranjangTable from "../components/Fragments/KeranjangTable";

const ProdukPage = () => {
  // const [keranjang, setKeranjang] = useState([]);
  // const [totalHarga, setTotalHarga] = useState(0);
  const [produk_produk, setProduk_Produk] = useState([]);
  const username = useMasuk();

  // useEffect(() => {
  //   setKeranjang(JSON.parse(localStorage.getItem("keranjang")) || []);
  // }, []);

  useEffect(() => {
    ambilProduk((data) => {
      setProduk_Produk(data);
    });
  }, []);

  const handleKeluar = () => {
    localStorage.removeItem("token");
    window.location.href = "/masuk";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{username}</p>
        <Tombol onClick={handleKeluar}>Keluar</Tombol>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {produk_produk.length > 0 &&
            produk_produk.map((produk) => (
              <KartuProduk key={produk.id}>
                <KartuProduk.Kepala foto={produk.image} id={produk.id} />
                <KartuProduk.Tubuh judul={produk.title}>
                  {produk.description}
                </KartuProduk.Tubuh>
                <KartuProduk.Kaki harga={produk.price} id={produk.id} />
              </KartuProduk>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
            Keranjang
          </h1>
          <KeranjangTable produk_produk={produk_produk} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Hitung> </Hitung>
      </div> */}
    </Fragment>
  );
};

export default ProdukPage;
