import { Link } from "react-router-dom";
import Masuk from "../components/Fragments/Masuk";
import AuntentikLayout from "../components/Layout/AuntentikLayout";

const MasukPage = () => {
  return (
    <AuntentikLayout judul="Masuk">
      <Masuk />
      <p className="text-sm mt-5 text-center">
        Tidak Memiliki Akun?{" "}
        <Link to="/daftar" className="font-bold text-blue-600">
          Daftar
        </Link>
      </p>
    </AuntentikLayout>
  );
};

export default MasukPage;
