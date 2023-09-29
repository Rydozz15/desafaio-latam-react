import { Container, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

function NavbarSection() {
    return(
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container>
                    <Link
                    to="/"
                    className="text-white ms-3 text-decoration-none">
                        Home 🏡
                    </Link>
                    <Link
                    to="/contact"
                    className="text-white ms-3 text-decoration-none">
                        Contacto 📧
                    </Link>
                    <Navbar.Brand>Happy Cake 🎂</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarSection