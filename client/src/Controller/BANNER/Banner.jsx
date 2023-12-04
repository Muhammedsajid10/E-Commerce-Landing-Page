import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner-container">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-left Tleft">
            <h2>X-Box For Your Living Room</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore rem cumque
              voluptatibus quisquam. Hic.
            </p>
            <p className='prize'>$600</p>
            <Button className='btnBanner' >Buy Now</Button>
          </Col>
          <Col md={6} className="text-right">
            <Image
              src="https://www.mall.cz/i/47206636/550/550"
              fluid
              style={{ mixBlendMode: 'multiply' }}
              alt="Product"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
