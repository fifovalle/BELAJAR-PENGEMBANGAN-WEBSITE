import Tombol from "../Elements/Button";
import InputForm from "../Elements/Input";

const Masuk = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("kata_sandi", event.target.kata_sandi.value);
    window.location.href = "/produk";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        judul="Email"
        type="email"
        placeholder="Contoh: 5HcVc@example.com"
        nama="email"
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
