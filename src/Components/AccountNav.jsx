import React from "react";
import { Offcanvas, Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function AccountNav()
{
    const expand = "md"

    return(
        <Navbar expand={expand} className="col-md-3 bg-danger d-flex align-items-start align-items-md-center ">
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
                    <Nav className="d-flex row">
                        <Link className="text-light display-5 d-flex justify-content-start undeline-on-hover" to="/Account/Dashboard">Dashboard</Link>
                        <Link className="text-light display-5 d-flex justify-content-start undeline-on-hover" to="/SignIn">Invoices</Link>
                        <Link className="text-light display-5 d-flex justify-content-start undeline-on-hover" to="/Account/Business">Businesses</Link>
                        <Link className="text-light display-5 d-flex justify-content-start undeline-on-hover" to="/About">Profile</Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default AccountNav;