import { useRouter } from "next/router";

const DetailProdukPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>Produk : {query.id}</p>
    </div>
  );
};

export default DetailProdukPage;
