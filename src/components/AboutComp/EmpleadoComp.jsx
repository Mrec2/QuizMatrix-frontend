import PropTypes from "prop-types";
// import { useState } from "react";

import styles from "./EmpleadoComp.module.css";

const EmpleadoComp = ({ empleado }) => {
  const { nombre, descripcion, tecnologias, fotoImg } = empleado;
  // const [foto, setFotos] = useState(fotoImg);

  // const updateFoto = () => {
  //   setFotos(fotoImg);
  // };

  return (
    <>
      <div className={styles.empleado}>
        <div className={styles.empleadoFoto}>
          <img src={fotoImg} alt="foto de empleado" className={styles.empleadoFotoImg}/>
        </div>

        <div className={styles.empleadoNombre}>{nombre}</div>
        <div className={styles.empleadoDescripcion}>{descripcion}</div>
        <div className={styles.empleadoTecnologias}>{tecnologias}</div>
        <div className={styles.empleadoLinkedin}></div>
      </div>

      <div className={styles.empleadoNombre}>{empleado.nombre}</div>
      <div className={styles.empleadoDescripcion}>{empleado.descripcion}</div>
      <div className={styles.empleadoTecnologias}>{empleado.tecnologias}</div>
      <div className={styles.empleadoLinkedin}></div>
    </>
  );
};

EmpleadoComp.propTypes = {
  empleado: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    fotoImg: PropTypes.string,
  }).isRequired,
};

export default EmpleadoComp;
