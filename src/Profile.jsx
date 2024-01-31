import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ studentId }) {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Fetch student data
        const studentResponse = await axios.get(`http://localhost:3000/students/${studentId}`);
        const student = studentResponse.data;
        
        // Fetch student skills
        const skillsResponse = await axios.get(`http://localhost:3000/students/${studentId}/skills`);
        const skills = skillsResponse.data;

        // Fetch student experiences
        const experiencesResponse = await axios.get(`http://localhost:3000/students/${studentId}/experiences`);
        const experiences = experiencesResponse.data;

        // Fetch student educations
        const educationsResponse = await axios.get(`http://localhost:3000/students/${studentId}/educations`);
        const educations = educationsResponse.data;

        // Fetch student capstones
        const capstonesResponse = await axios.get(`http://localhost:3000/students/${studentId}/capstones`);
        const capstones = capstonesResponse.data;

        setStudentData({ student, skills, experiences, educations, capstones });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { student, skills, experiences, educations, capstones } = studentData;

  return (
    <div className="profile">
      {/* Display student personal information */}
      <div>
        <h2>Student Information</h2>
        <p>Name: {student.first_name} {student.last_name}</p>
        <p>Bio: {student.bio}</p>
        <p>Email: {student.email}</p>
        <p>Phone Number: {student.phone_number}</p>
        <p>Github: {student.github_url}</p>
        <p>LinkedIn: {student.linkedin_url}</p>
        {/* Add more personal information fields as needed */}
      </div>

      {/* Display student skills */}
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.id}</li>
          ))}
        </ul>
      </div>

      {/* Display student experiences */}
      <div>
        <h2>Experiences</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <p>Company: {experience.company}</p>
              <p>Job Title: {experience.job_title}</p>
              <p>Start Date: {experience.start_date}</p>
              <p>End Date: {experience.end_date}</p>
              <p>Details: {experience.details}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Display student education */}
      <div>
        <h2>Education</h2>
        <ul>
          {educations.map((education, index) => (
            <li key={index}>
              <p>University: {education.university}</p>
              <p>Degree: {education.degree}</p>
              <p>Details: {education.details}</p>
              <p>Start Date: {education.start_date}</p>
              <p>End Date: {education.end_date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Display student capstones */}
      <div>
        <h2>Capstones</h2>
        <ul>
          {capstones.map((capstone, index) => (
            <li key={index}>
              <p>Name: {capstone.name}</p>
              <p>Description: {capstone.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
