import { useRouter } from "next/router";

const TokoPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>Toko: {query.toko ? query.toko[0] : ""}</p>
    </div>
  );
};

export default TokoPage;
