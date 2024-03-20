import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Films = props => {
  const [filmsArray, setFilmsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title]);

  const getFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=f364cb6f&s=${props.title}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(films => {
        console.log(films);
        setFilmsArray(films.Search.slice(0, 6));
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <>
      <Container fluid className="bg-dark px-4">
        {isLoading && (
          <div className="text-center mt-3">
            <Spinner animation="border" variant="white" />
          </div>
        )}

        {!isLoading && (
          <>
            <h4 className="text-white">{props.title}</h4>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
              {filmsArray.map(film => {
                return (
                  <Col className="col mb-2 text-center px-1" key={film.imdbID}>
                    <Link to={`/movie-details/${film.imdbID}`}>
                      <img src={film.Poster} alt={film.Title} className="img-fluid" id="img" />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Films;
