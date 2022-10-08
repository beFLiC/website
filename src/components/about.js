import Circle from "../circles";

function About() {
  return (
    <div className="about">
      <div className="absolute">
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
      <Circle x="-10vw" y="50vh" r = "60vh"/>
      <Circle x="-10vw" y="50vh" r = "40vh"/>
    </div>
  );
}

export default About;