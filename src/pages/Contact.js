import '../style/contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.jpg';
import github from '../assets/github.png';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="body">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="col-md-4">
              <div className="card">
                <img className="card-image" src={instagram} />

                <div className="category"> Instagram </div>
                <div className="heading">
                  <h2>Syntax._Error</h2>
                  <div className="author">
                    <a className="btn btn-outline-primary w-100" target="_blank" href="https://www.instagram.com/syntax._error/">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-md-4">
              <div className="card">
                <img className="card-image" src={twitter} />

                <div className="category"> Twitter </div>
                <div className="heading">
                  <h2>403_Forbidden</h2>
                  <div className="author">
                    <a className="btn btn-outline-primary w-100" target="_blank" href="https://twitter.com/NdutzYz">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-md-4">
              <div className="card">
                <img className="card-image" src={github} />

                <div className="category"> GITHUB </div>
                <div className="heading">
                  <h2>CriticalSyntaxError</h2>
                  <div className="author">
                    <a className="btn btn-outline-primary w-100" target="_blank" href="https://github.com/CriticalSyntaxError">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
