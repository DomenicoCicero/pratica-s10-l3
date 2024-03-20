import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const authenticationApiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTA5NDQ0NjMsImV4cCI6MTcxMjE1NDA2M30.PjYbBwx7IrgcBU2lgTFw_YtAPG0qiavEiF1FsTxkbUQ";
  const [filmObj, setFilmObj] = useState(null);
  const [commentsArray, setCommentsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    getFilm();
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=f364cb6f&i=${params.movieId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(film => {
        console.log(film);
        setFilmObj(film);
        setIsLoading(false);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  const getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticationApiKey,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(comments => {
        const commentsArrayFilm = comments.filter(comment => comment.elementId === params.movieId);
        setCommentsArray(commentsArrayFilm);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8}>
          {isLoading && (
            <div className="text-center mt-3">
              <Spinner animation="border" variant="white" />
            </div>
          )}

          {!isLoading && (
            <Card>
              <Card.Img variant="top" src={filmObj.Poster} className="object-fit-cover" />
              <Card.Body>
                <Card.Title className="text-center my-3">{filmObj.Title}</Card.Title>
                <Card.Text>{filmObj.Plot}</Card.Text>
                <Card.Text>
                  <span className="fw-bold">Actors:</span> {filmObj.Actors}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Awards:</span> {filmObj.Awards}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Country:</span> {filmObj.Country}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Genre:</span> {filmObj.Genre}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Language:</span> {filmObj.Language}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Ratings:</span> {filmObj.Ratings[0].Value}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Released:</span> {filmObj.Released}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Duration:</span> {filmObj.Runtime}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Writer:</span> {filmObj.Writer}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col xs={8}>
          <ListGroup>
            {commentsArray.map(comment => {
              return (
                <ListGroup.Item className="my-3" key={comment._id}>
                  <span className="fw-bold">Comment:</span> {comment.comment} <br />
                  <span className="fw-bold">Author:</span> {comment.author} <br />
                  <span className="fw-bold">CreatedAt:</span> {comment.createdAt} <br />
                  <span className="fw-bold">Rate:</span> {comment.rate}/5
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
