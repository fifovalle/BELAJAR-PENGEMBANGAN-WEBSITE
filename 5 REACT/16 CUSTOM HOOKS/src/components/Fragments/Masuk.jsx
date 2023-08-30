import { masuk } from "../../services/masuk.service";
import Tombol from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef, useState } from "react";

const Masuk = () => {
  const [gagalMasuk, setGagalMasuk] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("kata_sandi", event.target.kata_sandi.value);
    // window.location.href = "/produk";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    masuk(data, (sukses, res) => {
      if (sukses) {
        localStorage.setItem("token", res);
        window.location.href = "/produk";
      } else {
        setGagalMasuk(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        judul="Username"
        type="text"
        placeholder="Contoh: 5HcVc@example.com"
        nama="username"
        ref={usernameRef}
      />
      <InputForm
        judul="Password"
        type="password"
        placeholder="*********"
        nama="password"
      />
      <Tombol pariasi="bg-blue-600 w-full" type="submit">
        Masuk
      </Tombol>
      {gagalMasuk && (
        <p className="text-red-600 text-center mt-5">{gagalMasuk}</p>
      )}
    </form>
  );
};

export default Masuk;
