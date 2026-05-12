import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Movie App</Navbar.Brand>

                <Nav className='ms-auto'>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">Favorites ❤️</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       
    )
}

export default AppNavbar