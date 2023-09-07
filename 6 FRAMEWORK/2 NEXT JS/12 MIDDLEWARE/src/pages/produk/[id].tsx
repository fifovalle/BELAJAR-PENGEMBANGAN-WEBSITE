import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utils/swr/fatcher";
import DetailProduk from "@/views/detailproduk";

const DetailProdukPage = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/produk/${query.produk}`,
    fetcher
  );

  return (
    <div>
      <h1>Detail Produk</h1>
      <DetailProduk produk={isLoading ? [] : data.data} />
    </div>
  );
};

export default DetailProdukPage;
