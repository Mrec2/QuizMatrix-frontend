import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbarMain}>
            <ul className={styles.unorderedList}>
                <li className={styles.listItem}>
                    <a href="/" className={styles.link}>Home</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/about" className={styles.link}>Sobre nuestra web</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/tests" className={styles.link}>Hacer tests</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/login" className={styles.link}>Iniciar sesión</a>
                </li>
                <li className={styles.listItem}>
                    <a href="/contact" className={styles.link}>Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;