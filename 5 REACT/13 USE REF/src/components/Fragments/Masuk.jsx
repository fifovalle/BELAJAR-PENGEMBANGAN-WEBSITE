import Tombol from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef } from "react";

const Masuk = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("kata_sandi", event.target.kata_sandi.value);
    window.location.href = "/produk";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        judul="Email"
        type="email"
        placeholder="Contoh: 5HcVc@example.com"
        nama="email"
        ref={emailRef}
      />
      <InputForm
        judul="Kata Sandi"
        type="password"
        placeholder="*********"
        nama="kata_sandi"
      />
      <Tombol pariasi="bg-blue-600 w-full" type="submit">
        Masuk
      </Tombol>
    </form>
  );
};

export default Masuk;
