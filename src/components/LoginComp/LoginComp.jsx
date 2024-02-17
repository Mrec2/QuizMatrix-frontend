import { Link } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';

import "./LoginComp.css";

const LoginComp = (props) => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {}
 
  return (
    <div className="login">

      <div className="login-contenedor">

        <div className="login-contenedor-texto">
          <h2>LOGIN</h2>
        </div>

        <div className="login-contenedor-error">{props.errorText}</div>

        <form className="login-contenedor-form" onSubmit={handleSubmit}>

          <div className="one-column">
            <input
              type="text"
              name="usuario"
              required
              autoFocus
              placeholder="Usuario"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
            />
          </div>

          <div className="one-column">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="botones-contenedor">

            <button className="btn" type="submit">
              Login
            </button>

            <div className="login-enlace-singin">             
                <Link to="/account" className="enlace">Crear Usuario</Link>
            </div>

          </div>

        </form>

      </div>

    </div>
  );
}

LoginComp.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default LoginComp;
