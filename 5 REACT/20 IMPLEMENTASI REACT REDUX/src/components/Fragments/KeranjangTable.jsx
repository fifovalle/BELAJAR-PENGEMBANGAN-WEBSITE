import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const KeranjangTable = (P) => {
  const { produk_produk } = P;
  const keranjang = useSelector((state) => state.keranjang.data);
  const { totalHarga, setTotalHarga } = useState(0);

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
                <td>{produk.price}</td>
                <td>{barang.kuantiti}</td>
                <td>{produk.price * barang.kuantiti}</td>
              </tr>
            );
          })}
        <tr ref={totalHargaRef}>
          <td colSpan={3}>
            <b>Total Harga</b>
          </td>
          <td>
            <b> {totalHarga}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default KeranjangTable;
