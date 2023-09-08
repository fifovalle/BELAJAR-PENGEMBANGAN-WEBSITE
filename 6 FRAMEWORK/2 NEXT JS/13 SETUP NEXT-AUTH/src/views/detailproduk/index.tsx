import { TipeProduk } from "@/pages/produk/produk";
import pemanis from "./detailProduk.module.scss";

const DetailProduk = ({ produk }: { produk: TipeProduk }) => {
  return (
    <div className={pemanis.produkDetail}>
      <div className={pemanis.produkDetail__image}>
        <img src={produk.foto} alt={produk.nama} />
      </div>
      <h4 className={pemanis.produkDetail__name}>{produk.nama}</h4>
      <p className={pemanis.produkDetail__category}>{produk.kategori}</p>
      <p className={pemanis.produkDetail__price}>
        {produk.harga &&
          produk.harga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </p>
    </div>
  );
};

export default DetailProduk;
