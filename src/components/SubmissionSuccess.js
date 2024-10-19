import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || {};  // Use empty object as fallback

  if (!name || !email || !message) {
    return <div>Error: Missing submission data</div>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Thank you, {name}!</h2>
              <p className="text-center">Your message has been sent successfully.</p>
              <h4>Submitted Data:</h4>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> {email}</li>
              </ul>
              <h4>Your Message:</h4>
              <p className="bg-light p-3 rounded" style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmissionSuccess;
