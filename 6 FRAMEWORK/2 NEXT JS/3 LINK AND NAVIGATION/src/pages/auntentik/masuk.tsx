import Link from "next/link";
import { useRouter } from "next/router";

const MasukPage = () => {
  const { push } = useRouter();
  const menanganiMasuk = () => {
    push("/produk");
  };
  return (
    <div>
      <h1>Daftar Page</h1>
      <button onClick={() => menanganiMasuk()}>Masuk</button>
      <p>
        Belum Mempunyai Akun? Daftar{" "}
        <Link href="/auntentik/daftar">Disini</Link>
      </p>
    </div>
  );
};

export default MasukPage;
