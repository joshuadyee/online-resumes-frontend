import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react"
import axios from "axios"; 

export function NavBar() {
  const [searchFilter, setSearchFilter] = useState("");

  const handleFocus = () => {
    setSearchFilter(" "); // Clear the searchFilter when the input is focused
  };

  const handleLogout = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Navbar Brand and Links */}
        <Navbar.Brand href="#home">CareerCanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cards">Resumes</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="search-bar">
            <input className="search-bar-input"
              type="text"
              value={searchFilter}
              onChange={(event) => setSearchFilter(event.target.value)}
              onFocus={handleFocus}
              placeholder='Search...'
              list="names"
            />
            {/* <datalist id="names">
              {resumes.map(resume => (
                <option key={resume.id} value={resume.name} />
              ))}
            </datalist> */}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
