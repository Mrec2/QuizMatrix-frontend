import PropTypes from "prop-types";
// import { useState } from "react";

import "./EmpleadoComp.css";

const EmpleadoComp = ({ empleado }) => {
  const { nombre, descripcion, tecnologias, fotoImg } = empleado;
  // const [foto, setFotos] = useState(fotoImg);

  // const updateFoto = () => {
  //   setFotos(fotoImg);
  // };

  return (
    <>
      <div className="empleado">
        <div className="empleado-foto">
          <img src={fotoImg} alt="foto de empleado" />
        </div>

        <div className="empleado-nombre">{nombre}</div>
        <div className="empleado-descripcion">{descripcion}</div>
        <div className="empleado-tecnologias">{tecnologias}</div>
        <div className="empleado-linkedin"></div>
      </div>

      <div className="empleado-nombre">{empleado.nombre}</div>
      <div className="empleado-descripcion">{empleado.descripcion}</div>
      <div className="empleado-tecnologias">{empleado.tecnologias}</div>
      <div className="empleado-linkedin"></div>
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
