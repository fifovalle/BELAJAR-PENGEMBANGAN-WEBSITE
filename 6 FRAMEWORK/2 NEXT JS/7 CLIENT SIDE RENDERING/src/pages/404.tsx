import pemanis from "@/styles/404.module.scss";

const Rubah404 = () => {
  return (
    <div className={pemanis.eror}>
      <img src="/404.png" alt="404" className={pemanis.eror_foto} />
      <div>404 | Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Rubah404;
