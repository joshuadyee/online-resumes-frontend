// import { NavBar } from "./components/NavBar"
import { LandingPage } from "./components/LandingPage"
import { Cards } from "./components/Cards"
import { Container } from 'react-bootstrap';

export function Home() {

  return (
    <section>
      <LandingPage />
      <Container className="my-4">
        <h1>Resumes</h1>
      </Container>
      <Cards />
    </section>
  );
}
