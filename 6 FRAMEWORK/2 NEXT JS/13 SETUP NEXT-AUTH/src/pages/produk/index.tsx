import ProdukView from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/swr/fatcher";

const ProdukPage = () => {
  const [produk, aturProduk] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <ProdukView produk={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProdukPage;
