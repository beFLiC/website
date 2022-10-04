import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Team from "./components/team";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
