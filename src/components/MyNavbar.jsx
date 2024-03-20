import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = props => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [textForm, setTextForm] = useState("");
  const location = useLocation();

  const visibleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.textFormProp(textForm);
  };

  const handleInputChange = e => {
    setTextForm(e.target.value);
  };

  console.log(location);
  return (
    <Container fluid className="bg-dark">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="text-decoration-none text-white nav-link">
              <div className={location.pathname === "/" ? "text-decoration-underline" : ""}>Home</div>
            </Link>
            <Link to="/tv-shows" className="text-decoration-none text-white nav-link">
              <div className={location.pathname === "/tv-shows" ? "text-decoration-underline" : ""}>TV Shows</div>
            </Link>
            <Nav.Link href="#" className="text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-end ms-auto">
            <Form className={isFormVisible ? "" : "d-none"} onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={location.pathname === "/tv-shows" ? "Cerca Serie TV" : "Search"}
                  className={isFormVisible ? "" : "d-none"}
                  onChange={handleInputChange}
                  value={textForm}
                />{" "}
              </Form.Group>
              <Button type="submit">Search</Button>
            </Form>
            <CiSearch className="icons text-white" id="ci-search" onClick={visibleForm} />
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <CiBellOn className="icons text-white" />
            <FaRegUserCircle className="icons text-white" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
