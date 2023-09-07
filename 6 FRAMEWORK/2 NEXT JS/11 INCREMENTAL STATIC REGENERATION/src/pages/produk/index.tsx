import ProdukView from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/swr/fatcher";

const ProdukPage = () => {
  const [produk, aturProduk] = useState([]);
  // const [apakahMasuk, setApakahMasuk] = useState(false);
  // const { push } = useRouter();
  // useEffect(() => {
  //   if (!apakahMasuk) {
  //     push("/auntentik/masuk");
  //   }
  // }, []);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // useEffect(() => {
  //   fetch("/api/produk")
  //     .then((res) => res.json())
  //     .then((respon) => {
  //       aturProduk(respon.data);
  //     });
  // }, []);

  return (
    <div>
      <ProdukView produk={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProdukPage;
