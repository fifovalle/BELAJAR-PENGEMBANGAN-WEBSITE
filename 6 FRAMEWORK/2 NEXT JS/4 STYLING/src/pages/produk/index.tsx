import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProdukPage = () => {
  const [apakahMasuk, setApakahMasuk] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!apakahMasuk) {
      push("/auntentik/masuk");
    }
  }, []);
  return (
    <div>
      <h1>Produk Page</h1>
    </div>
  );
};

export default ProdukPage;
