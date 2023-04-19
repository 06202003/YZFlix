import { Col, Container, Row } from 'react-bootstrap';
import '../style/hero.css';
const Hero = () => {
  return (
    <div>
      <Container className=" utama">
        <Row className="d-flex justify-content-center align-items-center ">
          <Col className="col-md-12 besar">
            <div className="tengah text-center">
              <h1 className="judul_besar">YZFlix</h1>
              <h2 className="subjudul">Cari Film Favorit Untuk Ditonton</h2>
              <a href="#search" className="atas">
                <svg class="arrows">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
