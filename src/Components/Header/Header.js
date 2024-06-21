import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to='/' className='navbar-brand'>TL Software</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/employees' className='nav-link'>Nhân viên</NavLink>
                        <NavLink to='/admin' className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>
                        <button className='btn-login'>Login</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                Log out
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;