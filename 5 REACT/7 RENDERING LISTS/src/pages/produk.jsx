import KartuProduk from "../components/Fragments/KartuProduk";

const produk_produk = [
  {
    id: 1,
    judul: "Baju Mahal",
    harga: "Rp 1.000.000.000",
    foto: "/images/baju.jpg",
    deskripsi: `lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto `,
  },
  {
    id: 2,
    judul: "Baju Murah",
    harga: "Rp 1.00.000",
    foto: "/images/baju.jpg",
    deskripsi: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto`,
  },
  {
    id: 3,
    judul: "Baju",
    harga: "Rp 1.0.000",
    foto: "/images/baju.jpg",
    deskripsi: `apa apa apa`,
  },
];

const ProdukPage = () => {
  return (
    <div className="flex justify-center py-5">
      {produk_produk.map((produk) => (
        <KartuProduk>
          <KartuProduk.Kepala foto={produk.foto} />
          <KartuProduk.Tubuh judul={produk.judul}>
            {produk.deskripsi}
          </KartuProduk.Tubuh>
          <KartuProduk.Kaki harga={produk.harga} />
        </KartuProduk>
      ))}
    </div>
  );
};

export default ProdukPage;
