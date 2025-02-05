import React from "react";
import { Offcanvas, Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeNav()
{
    const expand = "md"

    return(
        <Navbar expand={expand} className="col-md-3 bg-danger d-flex align-items-start align-items-md-center">
            <Container fluid>
                <div >
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                </div>
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                >
                <Offcanvas.Header closeButton className="bg-danger text-light">
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-danger text-light">
                    <Nav className="d-flex row justify-content-center flex-grow-1 pe-3">
                        <Link className="text-light display-4" to="/">Home</Link>
                        <Link className="text-light display-4" to="/">About</Link>
                        <Link className="text-light display-4" to="/">Sign In</Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default HomeNav;