import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Home } from "./Home"
import { NavBar } from "./components/NavBar"
import { LandingPage } from "./components/LandingPage"
import { Cards } from "./components/Cards"

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

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage />
      <Cards />
    </div>
  );
}

export default App;