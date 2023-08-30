import { useMasuk } from "../hooks/useMasuk";

const ProfilPage = () => {
  const username = useMasuk();
  return (
    <div>
      <h1>Profil</h1>
      username : {username}
    </div>
  );
};

export default ProfilPage;
