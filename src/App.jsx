import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/all-resumes" element={<AllResumes />} />
        <Route path="/selected-resume" element={<SelectedResume />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-profile/resume" element={<UserResume />} />
      </Routes>
    </Router>
  );
};

export default App;