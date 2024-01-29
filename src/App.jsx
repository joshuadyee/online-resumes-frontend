import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Home } from "./Home"
import { NavBar } from "./components/NavBar"
import { LandingPage } from "./components/LandingPage"
import { Cards } from "./components/Cards"

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