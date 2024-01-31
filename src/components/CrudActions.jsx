import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// ... (existing imports)

export function StudentsIndex({ students }) {
  const navigate = useNavigate();

  const handleStudentClick = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  return (
    <div>
      <h1>All Students</h1>
      {students.map((student) => (
        <div key={student.id} onClick={() => handleStudentClick(student.id)}>
          <h2>{student.first_name} {student.last_name}</h2>
          <p>{student.bio}</p>
        </div>
      ))}
    </div>
  );
}

StudentsIndex.propTypes = {
  students: PropTypes.array.isRequired,
};

export function StudentSkillsIndex() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}.json`)
      .then(response => {
        console.log("loading skills information");
        setStudent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the skills data', error);
      });
  });

  // Check if student.skills is defined before mapping over it
  if (!student.skills) {
    return <div>Loading skills...</div>;
  }

  return (
    <div>
      <h2>Skills</h2>
      {student.skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

StudentSkillsIndex.propTypes = {
  skills: PropTypes.array.isRequired,
};

export function ExperienceIndex({ experiences }) {
  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>{experience.company}</h3>
          <p>{experience.job_title}</p>
        </div>
      ))}
    </div>
  );
}

ExperienceIndex.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export function EducationIndex({ educations }) {
  return (
    <div>
      <h2>Education</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <h3>{education.university}</h3>
          <p>{education.degree}</p>
          <p>etc...</p>
        </div>
      ))}
    </div>
  );
}

EducationIndex.propTypes = {
  educations: PropTypes.array.isRequired,
};

export function StudentsShow({ student }) {
  return (
    <div>
      <h1>{student.first_name} {student.last_name}</h1>
      <h2>{student.email} | {student.phone_number} | etc...</h2>
      <h3>Bio</h3>
      <p>{student.bio}</p>
      <h3>Skills</h3>
      <p>{student.skills}</p>
      <h3>etc...</h3>
      <p>etc... placeholder</p>
    </div>
  );
}

StudentsShow.propTypes = {
  student: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    // ... (add more prop types for other fields)
  }).isRequired,
};
