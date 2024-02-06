import "./AccountProfile.css";

const AccountProfile = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src="../../../img/examplee.jpg" alt="foto-perfil" />
          <h1>Nombre Usuario</h1>
        </div>
        <p>@usuario</p>
        <a href="#">Modificar imagen de portada</a>
      </div>
    </>
  );
};

export default AccountProfile;
