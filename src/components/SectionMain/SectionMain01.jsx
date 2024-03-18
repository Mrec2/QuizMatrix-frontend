import "./SectionMain01.css";

const SectionMain01 = () => {
  return (
    <div className="contenedor">
      <section className="section-principal">
        <section className="section-texto">
          <h1 className="section-principal--titulo">
            Domina Java como un Experto
          </h1>
          <p className="section-principal--parrafo">
            Mejora tus habilidades de codificación en Java realizando Tests.
          </p>
          <button className="section-principal-btn">Empezar</button>
        </section>
        <section className="section-imagen">
          <img src="/imgs-home-page/icon-programming.png" alt="Logo de Java" />
        </section>
      </section>
    </div>
  );
};

export default SectionMain01;
