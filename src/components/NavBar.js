import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    // Navbar component with styling and navigation links
    <Navbar style={{ backgroundColor: '#3083ff' }} variant="dark" expand="lg" className="d-flex justify-content-center">
      <Container>
        {/* Navbar toggle button for responsive design */}
        <Navbar.Toggle aria-controls="navbarNavDropdown" />

        {/* Navbar content with navigation links */}
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto">
            {/* Home link */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Applicants link */}
            <Nav.Link as={Link} to="/applicants">Applicants</Nav.Link>

            {/* Add Applicant link */}
            <Nav.Link as={Link} to="/add-applicant">Add Applicant</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
/* 
I used the react-router-dom library for navigation, providing links to the Home page, Applicants page, and Add Applicant page.
The navigation bar has a responsive design with a toggle button for smaller screens.
Navigation links are styled with the Bootstrap Navbar component.
*/

