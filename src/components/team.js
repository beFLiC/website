import Circle from "../circles";
function Team() {
  return (
    <div id="team" className="full-screen h-screen w-screen">
      <div className="absolute">
        <h1>Team</h1>
        <p>This is team</p>
      </div>
      
      <Circle x="-10vw" y="-50vh" r = "60vh"/>
    </div>
  );
}

export default Team;