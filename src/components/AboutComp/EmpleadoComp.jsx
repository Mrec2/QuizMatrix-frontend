import { Component } from "react";

import "./EmpleadoComp.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empleado: this.props.empleado,
      descripcion: this.props.descripcion,
      tecnologias: this.props.tecnologias,
      foto: this.props.foto,
      linkedin:""
    };

  }

  render() {

    const fotoEmpleado = "../../../img/about/" + this.state.foto + ".jpg";

    return (
      <div className="empleado">

        <div className="empleado-foto">
            <img src={fotoEmpleado} alt="foto de empleado" />
        </div>

        <div className="empleado-nombre">{this.state.empleado}</div>
        <div className="empleado-descripcion">{this.state.descripcion}</div>
        <div className="empleado-tecnologias">{this.state.tecnologias}</div>
        <div className="empleado-linkedin"></div>
      </div>
    );
  }
}
