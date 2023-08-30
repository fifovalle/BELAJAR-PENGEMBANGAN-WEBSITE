import Tombol from "../Elements/Button";
import InputForm from "../Elements/Input";

const Masuk = () => {
  return (
    <form action="">
      <InputForm
        judul="Email"
        type="email"
        placeholder="Contoh: 5HcVc@example.com"
        name="email"
      />
      <InputForm
        judul="Kata Sandi"
        type="password"
        placeholder="*********"
        name="kata_sandi"
      />
      <Tombol pariasi="bg-blue-600 w-full">Masuk</Tombol>
    </form>
  );
};

export default Masuk;
