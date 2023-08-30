import KartuProduk from "../components/Fragments/KartuProduk";

const ProdukPage = () => {
  return (
    <div className="flex justify-center py-5">
      <KartuProduk>
        <KartuProduk.Kepala foto="/images/baju.jpg" />
        <KartuProduk.Tubuh judul="Baju Mahal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          explicabo sit libero perferendis ex dolore quo corporis rem blanditiis
          nemo sequi saepe, autem sapiente? Aut nostrum non harum ratione iste!
        </KartuProduk.Tubuh>
        <KartuProduk.Kaki harga="Rp 1.000.000.000" />
      </KartuProduk>
      <KartuProduk>
        <KartuProduk.Kepala foto="/images/baju.jpg" />
        <KartuProduk.Tubuh judul="Baju Mahal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          explicabo sit libero perferendis ex dolore quo corporis rem blanditiis
          nemo sequi saepe, autem sapiente? Aut nostrum non harum ratione iste!
        </KartuProduk.Tubuh>
        <KartuProduk.Kaki harga="Rp 1.000.000.000" />
      </KartuProduk>
    </div>
  );
};

export default ProdukPage;
