import React from "react";
import { useNavigate } from "react-router-dom";

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


export function StudentSkillsIndex({skills}) {
  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

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

export function StudentsShow(props) {
  return (
    <div>
    <h1>{props.student.first_name} {props.student.last_name}</h1>
  
    <h2>{props.student.email} | {props.student.phone_number} | etc...</h2>
    <h3>Bio</h3>
    <p>{props.student.bio}</p>
    <h3>Skills</h3>
    <p>{props.student.skills}</p>
    <h3>etc...</h3>
    <p>etc... placeholder</p>
  </div>
  );
}