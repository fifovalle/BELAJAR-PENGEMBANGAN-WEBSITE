import { useEffect, useState } from "react";
import { ambilUsername } from "../services/masuk.service";

export const useMasuk = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(ambilUsername(token));
    } else {
      window.location.href = "/masuk";
    }
  }, []);

  return username;
};
