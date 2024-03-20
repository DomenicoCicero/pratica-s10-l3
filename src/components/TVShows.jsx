import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const TVShows = () => {
  const [filmsArray, setFilmsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=f364cb6f&s=suburra`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(films => {
        console.log(films);
        setFilmsArray(films.Search);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <Container fluid className="bg-dark px-4">
      {isLoading && (
        <div className="text-center mt-3">
          <Spinner animation="border" variant="white" />
        </div>
      )}

      {!isLoading && (
        <>
          <h4 className="text-white text-center">Al primo posto questa setimana</h4>
          {filmsArray.map(film => {
            return (
              <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 justify-content-center mt-4">
                <Col className="col mb-2 text-center px-1" key={film.imdbID}>
                  <img src={film.Poster} alt={film.Title} className="img-fluid" id="img" />
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default TVShows;
