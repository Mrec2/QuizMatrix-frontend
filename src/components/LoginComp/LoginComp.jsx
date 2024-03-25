import { Link } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from "./LoginComp.module.css";

const LoginComp = (props) => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => { }

  return (
    <div className={styles.login}>

      <div className={styles.loginContenedor}>

        <div className={styles.loginContenedorTexto}>
          <h2>LOGIN</h2>
        </div>

        <div className={styles.loginContenedorError}>{props.errorText}</div>

        <form onSubmit={handleSubmit} className={styles.loginContenedorform}>

          <div className={styles.oneColumn}>
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

          <div className={styles.oneColumn}>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.botonesContenedor}>

            <button className={styles.btn} type="submit">
              Login
            </button>

            <div className={styles.loginEnlaceSingin}>
              <Link to="/register" className={styles.enlaceCrearUsuario}>Crear Usuario</Link>
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
