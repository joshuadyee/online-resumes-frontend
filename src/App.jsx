import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from "./Profile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Home } from "./Home"
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./components/LandingPage";
import { Cards } from "./components/Cards";
// import PublicResume from "./PublicResume";
import { StudentDetails } from "./components/StudentDetails";
import { StudentsIndex } from "./components/CrudActions";




function App() {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/students.json")
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, 
  []);


  return (
    <Router>
      <div className="App">
        <NavBar />
        <LandingPage />
        <Cards />
        <Routes>

          {/* <Route path="/all-resumes" element={<AllResumes />} /> */}
          {/* <Route path="/selected-resume" element={<SelectedResume />} /> */}
          {/* <Route path="/student/:studentId" element={<PublicResume />} /> */}
          {/* <Route path="/students" element={<StudentDetails/>} /> */}
          <Route path="/students" element={<StudentsIndex students={students} />} />
          <Route path="/students/:id" element={<StudentDetails/>} />
          {/* <Route path="/profile/:studentId" element={<Profile />} /> */}
       
        
        </Routes>
      </div>
    </Router>
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