import { Link } from "react-router-dom";
import Daftar from "../components/Fragments/Daftar";
import AuntentikLayout from "../components/Layout/AuntentikLayout";

const DaftarPage = () => {
  return (
    <AuntentikLayout judul="Daftar">
      <Daftar />
      <p className="text-sm mt-5 text-center">
        Sudah Memiliki Akun?{" "}
        <Link to="/masuk" className="font-bold text-blue-600">
          Masuk
        </Link>
      </p>
    </AuntentikLayout>
  );
};

export default DaftarPage;
