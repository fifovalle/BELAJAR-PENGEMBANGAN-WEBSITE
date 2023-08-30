import Tombol from "../Elements/Button";
import InputForm from "../Elements/Input";

const Daftar = () => {
  return (
    <form action="">
      <InputForm
        judul="Nama Lengkap"
        type="text"
        placeholder="Masukan Nama Lengkap Anda"
        name="nama_lengkap"
      />
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
      <InputForm
        judul="Konfirmasi Kata Sandi"
        type="password"
        placeholder="*********"
        name="konfirmasi_kata_sandi"
      />
      <Tombol pariasi="bg-blue-600 w-full">Daftar</Tombol>
    </form>
  );
};

export default Daftar;
