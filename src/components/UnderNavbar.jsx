import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdOutlineGridView } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";

const UnderNavbar = props => {
  const handleGenre = genreParam => {
    props.genreProp(genreParam);
  };

  return (
    <Container fluid className="bg-dark d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4 ms-2 text-white">TV Shows</h2>
        <div role="group" className="btn-group">
          <div className="dropdown ms-4 mt-1">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Genre"
              menuVariant="dark"
              className="btn btn-secondary bg-dark btn-sm rounded-0"
            >
              <NavDropdown.Item href="#action/3.1" onClick={() => handleGenre("comedy")}>
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => handleGenre("drama")}>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => handleGenre("thriller")}>
                Thriller
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => handleGenre("serie")}>
                Serie
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
      <div className="me-2">
        <MdOutlineGridView className="bi bi-grid icons fs-4" />
        <BsGrid3X3 className="bi bi-grid-3x3 icons" />
      </div>
    </Container>
  );
};

export default UnderNavbar;
