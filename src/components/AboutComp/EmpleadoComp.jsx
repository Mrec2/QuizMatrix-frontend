import PropTypes from 'prop-types';

import "./EmpleadoComp.css";

const EmpleadoComp = ({empleado}) => {

  const fotoEmpleado = "../../../img/about/" + empleado.foto + ".jpg";

  return (
    <>
    <div className="empleado">

      <div className="empleado-foto">
          <img src={fotoEmpleado} alt="foto de empleado" />
      </div>

      <div className="empleado-nombre">{empleado.nombre}</div>
      <div className="empleado-descripcion">{empleado.descripcion}</div>
      <div className="empleado-tecnologias">{empleado.tecnologias}</div>
      <div className="empleado-linkedin"></div>
    </div>
    </>
  )
}

EmpleadoComp.propTypes = {
  empleado: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
  }).isRequired,
};

/*EmpleadoComp.propTypes = {
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
};*/

export default EmpleadoComp;


/*
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

EmpleadoComp.propTypes = {
  empleado: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  tecnologias: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
};

export default EmpleadoComp;
*/
