import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body className="text-center p-5">
              <Card.Title as="h2" className="mb-4">About Me</Card.Title>
              <Card.Text className="lead">
              I'm a dedicated computer science student with a strong passion for technology and problem-solving. 
              I’m currently pursuing my degree, where I've developed a solid foundation in programming, algorithms, and software development. Outside of academics, I love working on personal coding projects and exploring the latest trends in tech.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
