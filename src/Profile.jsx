import React, { useState } from "react";

const Profile = () => { 
  const [resumes, setResumes] = useState(loadResumes());
  const [selectedResume, setSelectedResume] = useState(null);
  const [view, setView] = useState("all");

  const saveResume = (newResume) => {
    let savedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
    savedResumes.push(newResume);
    localStorage.setItem('resumes', JSON.stringify(savedResumes));
    setResumes(savedResumes);
  };

  const loadResumes = () => {
    const savedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
    return savedResumes;
  };

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
    setView("selected");
  };

  return (
    <div>
      {view === "all" && (
        <div>
          <h1>User's Resume</h1>
          {selectedResume ? (
            <div>
              <p>Name: {selectedResume.name}</p>
              <p>Experience: {selectedResume.experience}</p>
              <p>Skills: {selectedResume.skills}</p>
            </div>
          ) : (
            <p>No resume selected</p>
          )}
        </div>
      )}
      <h1>Saved Resumes</h1>
      <ul>
        {resumes.map((resume, index) => (
          <li key={index} onClick={() => handleResumeClick(resume)}>
            Resume {index + 1}
          </li>
        ))}
      </ul>
      {view === "selected" && (
        <div>
          <button onClick={() => setView("all")}>Back to All Resumes</button>
          <h2>Selected Resume</h2>
          <p>Name: {selectedResume.name}</p>
          <p>Experience: {selectedResume.experience}</p>
          <p>Skills: {selectedResume.skills}</p>
        </div>
      )}
    </div>
  );  
};

export default Profile;
