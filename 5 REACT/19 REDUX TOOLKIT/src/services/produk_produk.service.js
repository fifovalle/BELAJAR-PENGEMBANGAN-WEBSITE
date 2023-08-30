import axios from "axios";

export const ambilProduk = (panggil) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      panggil(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const ambilProdukDetail = (id, panggil) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      panggil(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
