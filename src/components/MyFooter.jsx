import { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

class MyFooter extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="row justify-content-center mt-5">
          <Col className="col col-6">
            <Row>
              <Col className="mb-2">
                <FaFacebook className="bi bi-facebook footer-icon me-2" />
                <FaInstagram className="bi bi-instagram footer-icon me-2" />
                <FaXTwitter className="bi bi-twitter-x footer-icon me-2" />
                <FaYoutube className="bi bi-youtube footer-icon" />
              </Col>
            </Row>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  type="button"
                  className="btn btn-sm footer-button bg-dark border-secondary text-secondary rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <div className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyFooter;
