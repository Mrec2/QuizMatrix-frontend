import { Component } from "react";

import "./EmpleadoComp.css";

const EmpleadoComp = (props) => {

  const fotoEmpleado = "../../../img/about/" + props.foto + ".jpg";

  return (
    <>
    <div className="empleado">

      <div className="empleado-foto">
          <img src={fotoEmpleado} alt="foto de empleado" />
      </div>

      <div className="empleado-nombre">{props.empleado}</div>
      <div className="empleado-descripcion">{props.descripcion}</div>
      <div className="empleado-tecnologias">{props.tecnologias}</div>
      <div className="empleado-linkedin"></div>
    </div>
    </>
  )
}

export default EmpleadoComp;
