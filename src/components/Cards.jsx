/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

export function Cards() {
  const [students, setStudents] = useState([]); // State to store the student data

  useEffect(() => {
    // Fetch student data when the component mounts
    axios.get('http://localhost:3000/students.json') // Replace with your API endpoint
      .then(response => {
        setStudents(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, []);
  
  return (
    <section className="section">
      <Container fluid className="my-4" id="cards">
        <h1>RESUMES/PROFILES</h1>
        <Row className="cards-row">
          {students.map((student, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                {/* If you have an image for each student, use it here */}
                <Card.Img variant="top" src={student.imageUrl || 'default_image_url'} /> 
                <Card.Body className="card_body">
                  <Card.Title>{`${student.first_name} ${student.last_name}`}</Card.Title>
                  {/* Additional student information can be displayed here */}
                  <Button variant="primary">Open</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Cards;