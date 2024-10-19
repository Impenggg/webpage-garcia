import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const skills = ['JavaScript', 'React.js', 'CSS', 'Node.js'];

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body className="p-5">
              <Card.Title as="h2" className="text-center mb-4">My Skills</Card.Title>
              <Row>
                {skills.map((skill, index) => (
                  <Col key={index} xs={6} md={3} className="text-center mb-3">
                    <div className="bg-light rounded p-3 skill-item">
                      <span className="h5">{skill}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
