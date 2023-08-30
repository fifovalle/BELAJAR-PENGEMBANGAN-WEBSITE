import { Link } from "react-router-dom";

const AuntentikLayout = (P) => {
  const { children, judul, type } = P;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{judul}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Selamat datang di aplikasi ini
        </p>
        {children}
        <Navigasi type={type} />
        {/* <p className="text-sm mt-5 text-center">
          {type === "masuk" ? "Belum punya akun? " : "Sudah punya akun? "}
          {type === "masuk" && (
            <Link to="/daftar" className="font-bold text-blue-600">
              Daftar
            </Link>
          )}
          {type === "daftar" && (
            <Link to="/masuk" className="font-bold text-blue-600">
              Masuk
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

const Navigasi = ({ type }) => {
  if (type === "masuk") {
    return (
      <p className="text-sm mt-5 text-center">
        Belum punya akun?{" "}
        <Link to="/daftar" className="font-bold text-blue-600">
          Daftar
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Sudah punya akun?{" "}
        <Link to="/masuk" className="font-bold text-blue-600">
          Masuk
        </Link>
      </p>
    );
  }
};

export default AuntentikLayout;
