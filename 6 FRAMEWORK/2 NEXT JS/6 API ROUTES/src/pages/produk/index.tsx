import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type TipeProduk = {
  id: number;
  nama: string;
  harga: number;
  ukuran: string;
};

const ProdukPage = () => {
  const [produk, aturProduk] = useState([]);
  // const [apakahMasuk, setApakahMasuk] = useState(false);
  // const { push } = useRouter();
  // useEffect(() => {
  //   if (!apakahMasuk) {
  //     push("/auntentik/masuk");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((respon) => {
        aturProduk(respon.data);
      });
  }, []);

  return (
    <div>
      <h1>Produk Page</h1>
      {produk.map((produk: TipeProduk) => (
        <div key={produk.id}>{produk.nama}</div>
      ))}
    </div>
  );
};

export default ProdukPage;
