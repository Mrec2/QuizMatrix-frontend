import styles from "./RegisterComp.module.css";

const RegisterComp = () => {
    return (
        <div className={styles.container}>
            <form action="#" className={styles.formulario}>
                <h1 className={styles.formularioTitle}>Crear cuenta</h1>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="nombres" className={styles.formLabel}>
                                Nombre:
                            </label>
                            <input
                                className={styles.inputs}
                                type="text"
                                name="nombres"
                                id="nombres"
                                placeholder="Escribe tus nombres..."
                                required=""
                            />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="apellidos" className={styles.formLabel}>
                                Apellido:
                            </label>
                            <input
                                className={styles.inputs}
                                type="text"
                                name="apellidos"
                                id="apellidos"
                                placeholder="Escribe tus apellidos..."
                                required=""
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="correo" className={styles.formLabel}>
                                Email:
                            </label>
                            <input
                                className={styles.inputs}
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="Escribe tu correo..."
                                required=""
                            />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="password" className={styles.formLabel}>
                                Contraseña:
                            </label>
                            <input
                                className={styles.inputs}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Escribe tu contraseña..."
                                required=""
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="usuario" className={styles.formLabel}>
                                Usuario:
                            </label>
                            <input
                                className={styles.inputs}
                                type="text"
                                name="usuario"
                                id="usuario"
                                placeholder="Escribe tu usuario..."
                                required=""
                            />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="fechaNacimiento" className={styles.formLabel}>
                                Fecha de nacimiento:
                            </label>
                            <input
                                className={styles.inputs}
                                type="date"
                                name="fechaNacimiento"
                                id="fechaNacimiento"
                                placeholder="Coloca tu fecha de nacimiento..."
                                required=""
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.formularioItem}>
                            <label htmlFor="localidad" className={styles.formLabel}>
                                Localidad:
                            </label>
                            <select name="localidad" id="localidad">
                                <option value={0}>Selecciona tu localidad</option>
                                <option value={1}>Madrid</option>
                                <option value={2}>Barcelona</option>
                                <option value={3}>Valencia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.formCheck}>
                    <input
                        className={styles.inputs}
                        type="checkbox"
                        defaultValue=""
                        id="acceptTerms"
                        required=""
                    />
                    <label htmlFor="acceptTerms">
                        He leído y acepto las Condiciones de servicio y la Política de
                        privacidad de TestOnlineJava.
                    </label>
                </div>
                <div className={styles.contenedorBoton}>
                    <button className={styles.btnCrearCuenta} type="submit">
                        Crear cuenta
                    </button>
                </div>
                <p>
                    ¿Tienes una cuenta?{" "}
                    <a href="#">
                        Inicia Sesión aquí
                    </a>
                </p>
                <hr className={styles.separacion} />
                <p className={styles.conectarCon}>O puedes regístrarte con</p>
                <section className={styles.iconosRedes}>
                    <img src="../public/imgs-register/icon-google.png"
                        alt="icono de red social"
                        className={styles.iconosRedesImg}
                    />
                    <img src="../public/imgs-register/icon-linkedin.png"
                        alt="icono de red social"
                        className={styles.iconosRedesImg}
                    />
                    <img src="../public/imgs-register/icon-github.png"
                        alt="icono de red social"
                        className={styles.iconosRedesImg}
                    />
                </section>
            </form>
        </div>

    );
}





export default RegisterComp;