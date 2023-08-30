import { Fragment, useEffect, useRef, useState } from "react";
import KartuProduk from "../components/Fragments/KartuProduk";
import Tombol from "../components/Elements/Button";
import Hitung from "../components/Fragments/Hitung";
import { ambilProduk } from "../services/produk_produk.service";
import { ambilUsername } from "../services/masuk.service";
import { useMasuk } from "../hooks/useMasuk";

const ProdukPage = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [produk_produk, setProduk_Produk] = useState([]);
  const username = useMasuk();

  useEffect(() => {
    setKeranjang(JSON.parse(localStorage.getItem("keranjang")) || []);
  }, []);

  useEffect(() => {
    ambilProduk((data) => {
      setProduk_Produk(data);
    });
  }, []);

  useEffect(() => {
    if (produk_produk.length > 0 && keranjang.length > 0) {
      const hasil = keranjang.reduce((total, barang) => {
        const produk = produk_produk.find((p) => p.id === barang.id);
        return total + produk.price * barang.kuantiti;
      }, 0);
      setTotalHarga(hasil);
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
    }
  }, [keranjang, produk_produk]);

  const handleKeluar = () => {
    localStorage.removeItem("token");
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

  const karanjangRef = useRef(
    JSON.parse(localStorage.getItem("keranjang")) || []
  );

  const handleTambahKeKeranjangRef = (id) => {
    karanjangRef.current = [...karanjangRef.current, { id, kuantiti: 1 }];
    localStorage.setItem("keranjang", JSON.stringify(karanjangRef.current));
  };

  const totalHargaRef = useRef(null);

  useEffect(() => {
    if (keranjang.length > 0) {
      totalHargaRef.current.style.display = "table-row";
    } else {
      totalHargaRef.current.style.display = "none";
    }
  }, [keranjang]);

  useEffect(() => {
    ambilProduk((data) => {
      console.log(data);
    });
  }, []);

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
                <KartuProduk.Kepala foto={produk.image} />
                <KartuProduk.Tubuh judul={produk.title}>
                  {produk.description}
                </KartuProduk.Tubuh>
                <KartuProduk.Kaki
                  harga={produk.price}
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
              {produk_produk.length > 0 &&
                keranjang.map((barang) => {
                  const produk = produk_produk.find((p) => p.id === barang.id);
                  return (
                    <tr key={barang.id}>
                      <td>{produk.title}</td>
                      <td>
                        {produk.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{barang.kuantiti}</td>
                      <td>
                        {(produk.price * barang.kuantiti).toLocaleString(
                          "id-ID",
                          { style: "currency", currency: "IDR" }
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalHargaRef}>
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
