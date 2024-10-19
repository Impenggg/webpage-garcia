import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SubmissionSuccess from './components/SubmissionSuccess.js';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css'; // Add this line

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-text">My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link as={Link} to="/skills" className="nav-link-custom">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission-success" element={<SubmissionSuccess />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
