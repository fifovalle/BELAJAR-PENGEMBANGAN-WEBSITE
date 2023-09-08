import Pemanis from "./Navigasi.module.css";
import { signIn, useSession, signOut } from "next-auth/react";

const Navigasibar = () => {
  const { data }: any = useSession();
  return (
    <div className={Pemanis.navigasi}>
      <div className="besar">Navigasi Bar</div>
      <div>
        {data && data.user.fullname}
        {data ? (
          <button className={Pemanis.button} onClick={() => signOut()}>
            Keluar
          </button>
        ) : (
          <button className={Pemanis.button} onClick={() => signIn()}>
            Masuk
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigasibar;
