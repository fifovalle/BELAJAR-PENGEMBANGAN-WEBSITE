import pemanis from "./Produk.module.scss";

type TipeProduk = {
  id: number;
  nama: string;
  harga: number;
  kategori: string;
  foto: string;
};

const ProdukView = ({ produk }: { produk: TipeProduk[] }) => {
  return (
    <div className={pemanis.produk}>
      <h1 className={pemanis.produk_title}>Produk</h1>
      <div className={pemanis.produk__content}>
        {produk.length > 0 ? (
          <>
            {produk.map((produk: TipeProduk) => (
              <div key={produk.id} className={pemanis.produk__content__item}>
                <div className={pemanis.produk__content__item__image}>
                  <img src={produk.foto} alt={produk.nama} />
                </div>
                <h4 className={pemanis.produk__content__item__name}>
                  {produk.nama}
                </h4>
                <p className={pemanis.produk__content__item__category}>
                  {produk.kategori}
                </p>
                <p className={pemanis.produk__content__item__price}>
                  {produk.harga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={pemanis.produk__content__skeleton}>
            <div className={pemanis.produk__content__skeleton__image} />
            <div className={pemanis.produk__content__skeleton__name} />
            <div className={pemanis.produk__content__skeleton__category} />
            <div className={pemanis.produk__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdukView;
