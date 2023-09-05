import ProdukView from "@/views/produk";
import { TipeProduk } from "./produk";

const ProdukPage = (props: { produk: TipeProduk[] }) => {
  const { produk } = props;
  return (
    <div>
      <div>
        <ProdukView produk={produk} />
      </div>
    </div>
  );
};

export default ProdukPage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  return {
    props: {
      produk: response.data,
    },
  };
}
