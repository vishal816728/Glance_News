import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/newspaper-folded.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"

function Header() {
  return (
    <Container>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Link to="/" style={{textDecoration:"none",color:"black"}}><Navbar.Brand>
             <img src={logo} alt="logo" width="40px" height="40px" style={{marginRight:"0.25rem"}} />
            Glance News</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Categories
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <hr/>
                  <Link style={{textDecoration:"none",color:"black"}} to="/"><Nav.Item className="navitem-sidebar">General</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/business"><Nav.Item className="navitem-sidebar">Business</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/sports"><Nav.Item className="navitem-sidebar">Sports</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/politics"><Nav.Item className="navitem-sidebar">Politics</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/technology"><Nav.Item className="navitem-sidebar">Technology</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/entertainment"><Nav.Item className="navitem-sidebar">Entertainment</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/science"><Nav.Item className="navitem-sidebar">Science</Nav.Item></Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/news/health"><Nav.Item className="navitem-sidebar">Health</Nav.Item></Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Container>
  );
}

export default Header;