import Circle from "../circles";

function Home() {
  return (
    <div >
      <h1 className="absolute">Home</h1>
      <Circle x="90vw" y="50vh" r = "60vh"/>
      <Circle x="90vw" y="50vh" r = "40vh"/>
      <Circle x="5vw" y="95vh" r = "10vh"/>

    </div>
  );
}

export default Home;