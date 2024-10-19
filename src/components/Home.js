import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card className="bg-primary text-white shadow">
            <Card.Body className="text-center">
              <h1 className="display-4 mb-4">Welcome to My Profile!</h1>
              <p className="lead">
              Hi! I’m Adrian John Garcia, a computer science student passionate about coding, technology, and innovation. 
              I’m constantly learning and growing, with a focus on developing skills that will allow me to solve real-world problems using technology.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
