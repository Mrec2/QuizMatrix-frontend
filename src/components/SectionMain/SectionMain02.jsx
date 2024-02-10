import "./SectionMain02.css";

const SectionMain02 = () => {
  return (
    <div className="contenedor">
      <section className="section-conocimientos">
        <div className="section-conocimientos-contenido">
          <h3 className="section-conocimientos--titulo">
            Consolida tus conocimientos de JAVA de forma gratuita
          </h3>
          <p className="section-conocimientos--parrafo">
            Desafíate con pequeños tests. Cada tests está diseñado por los creadores
            de <span className="section-conocimientos--parrafo-edit">TestsOnlineJava</span> para ayudarte a fortalecer tus conocimientos.
          </p>
          <button className="section-conocimientos--btn">Únete ahora</button>
        </div>
        <div className="section-conocimientos-imagen">
          <img src="../imgs-home-page/test-icon.png" alt="Icono de Test" className="section-conocimientos--img" />
        </div>
      </section>
    </div>
  );
};

export default SectionMain02;
