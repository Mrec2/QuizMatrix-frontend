import styles from "./SectionMain01.module.css";

const SectionMain01 = () => {
  return (
    <div className={styles.contenedor}>
      <section className={styles.sectionPrincipal}>
        <section className={styles.sectionTexto}>
          <h1 className={styles.sectionPrincipalTitulo}>
            Domina Java como un Experto
          </h1>
          <p className={styles.sectionPrincipalParrafo}>
            Mejora tus habilidades de codificación en Java realizando Tests.
          </p>
          <button className={styles.sectionPrincipalBtn}>Empezar</button>
        </section>
        <section className={styles.sectionImagen}>
          <img 
            src="/imgs-home-page/icon-programming.png" 
            alt="Logo de Programación" 
            className={styles.imgPortada}/>
        </section>
      </section>
    </div>
  );
};

export default SectionMain01;
