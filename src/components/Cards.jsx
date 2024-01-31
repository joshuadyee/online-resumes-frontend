import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';
import { StudentSkillsIndex } from './CrudActions';

export function Cards() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/students.json') // Replace with your API endpoint
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data', error);
      });
  }, []);

  const handleOpenButtonClick = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="cards-section">
      <Container fluid className="my-4" id="cards">
        <h1>RESUMES/PROFILES</h1>
        <Row className="cards-row">
          {students.map((student, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                {/* <Card.Img variant="top" src={student.imageUrl || 'default_image_url'} /> */}
                <Card.Body className="card_body">
                  <Card.Title>{`${student.first_name} ${student.last_name}`}</Card.Title>
                  <Button variant="primary" onClick={() => handleOpenButtonClick(student)}>
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{`${selectedStudent?.first_name} ${selectedStudent?.last_name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display student details here */}
          <h4>Bio</h4>
          <p>{selectedStudent?.bio}</p>
          <StudentSkillsIndex studentId={selectedStudent?.id.skills} />
          <br></br>
          <h4>Contact</h4>
          <p>{selectedStudent?.email} | {selectedStudent?.phone_number} | etc...</p>
          <h3>etc...</h3>
          <p>etc... placeholder</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
