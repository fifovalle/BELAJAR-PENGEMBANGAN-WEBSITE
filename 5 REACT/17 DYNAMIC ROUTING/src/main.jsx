import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasukPage from "./pages/masuk.jsx";
import DaftarPage from "./pages/daftar.jsx";
import HalamanEror from "./pages/404.jsx";
import ProdukPage from "./pages/produk";
import ProfilPage from "./pages/profil";
import ProdukDetailPage from "./pages/produkDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Halo Dunia</div>,
    errorElement: <HalamanEror />,
  },
  {
    path: "/masuk",
    element: <MasukPage />,
  },
  {
    path: "/daftar",
    element: <DaftarPage />,
  },
  {
    path: "/produk",
    element: <ProdukPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
  },
  {
    path: "/detail/:id",
    element: <ProdukDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
