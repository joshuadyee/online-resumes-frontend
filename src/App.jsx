import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Home } from "./Home"
import { NavBar } from "./components/NavBar"
import { LandingPage } from "./components/LandingPage"
import { Cards } from "./components/Cards"
import { BrowserRouter, Route, Routes } from "react-router-dom"

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
  const resumes = []
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <LandingPage /> {/* Landing Page Section */}
        <Cards resumes={resumes} /> {/* Cards Section */}
      </BrowserRouter>
    </div>
  );
}

export default App;


/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cards" element={<Cards resumes={resumes} />} />
        // </Routes>
      // </BrowserRouter> */