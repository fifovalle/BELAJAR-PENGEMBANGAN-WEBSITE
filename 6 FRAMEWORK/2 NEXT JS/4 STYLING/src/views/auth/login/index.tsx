import Link from "next/link";
import { useRouter } from "next/router";
import Pemanis from "./Masuk.module.scss";

const MasukViews = () => {
  const { push } = useRouter();
  const menanganiMasuk = () => {
    push("/produk");
  };
  return (
    <div className={Pemanis.masuk}>
      <h1 className="text-3xl font-bold">Daftar Page</h1>
      <button onClick={() => menanganiMasuk()}>Masuk</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "5px" }}>
        Belum Mempunyai Akun? Daftar{" "}
        <Link href="/auntentik/daftar">Disini</Link>
      </p>
    </div>
  );
};

export default MasukViews;
