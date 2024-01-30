import Login from "./Login"

export function LandingPage() {
  return (
    <section className="section">
    <div className="landing-container">
      <div className="landing-top-bar">
        <div>INSIGHT</div>
        <div><button className="button">PAINT YOUR PICTURE</button></div>
        <div>RESOURCES</div>
      </div>
      <div className="central-text">
        CAREER CANVAS
      </div>
      <div className="sub-text">
        SHARED RESUME COMMUNITY<br />
        ACTUALIZE BOOTCAMP 2023/24
      </div>
      <div>
        < Login />{Login}
      </div>
      <div className="landing-bottom-bar">
        <div>COMMUNITY</div>
        <div>APPLICATIONS</div>
      </div>
    </div>
    </section>
  )
}

export default LandingPage;