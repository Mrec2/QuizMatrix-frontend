import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbarMain">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Sobre nuestra web</a></li>
                <li><a href="/tests">Hacer tests</a></li>
                <li><a href="/register">Iniciar sesión</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;