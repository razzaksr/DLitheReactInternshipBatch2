import { Container } from "@material-ui/core";
import { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { user } from "./App";

const Menu=()=>{

    const[person,setPerson]=useContext(user)

    return(<>
        <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#">Dlithe Kart</Navbar.Brand>
                    <Navbar.Toggle aria-control="logitems"></Navbar.Toggle>
                    <Navbar.Collapse id="logitems">
                        <Nav className="ms-auto">
                            {person!==""?<h1 className="me-3 float-end text-danger">Welcome {person}</h1>:
                                <>
                                    <Nav.Link href="/login" className="me-3 text-dark btn btn-outline-primary">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link href="/signup" className="me-3 text-dark btn btn-outline-primary">
                                        Signup
                                    </Nav.Link>
                                </>
                                }
                            <Nav.Link href="/" className="me-3 text-dark btn btn-outline-primary">
                                Home
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>)
}
export default Menu;