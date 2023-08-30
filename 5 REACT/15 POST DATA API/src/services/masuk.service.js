import axios from "axios";
import jwt_decode from "jwt-decode";

export const masuk = (data, panggil) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      panggil(true, res.data.token);
    })
    .catch((err) => {
      panggil(false, err);
    });
};

export const ambilUsername = (token) => {
  const decoded = jwt_decode(token);
  return decoded.user;
};
