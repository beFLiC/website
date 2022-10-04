import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Team from "./components/team";

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth/4
      }
    });
  }, []);


  return (
    <div className="App">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="panels">
        <div id="panels-container" ref={panelsContainer} style={{width:"500%"}}>
          <div className="home panel full-screen" ref={(e) => createPanelsRefs(e, 0)}>
            <Home />
          </div>

          <div className="about panel full-screen" ref={(e) => createPanelsRefs(e, 1)}>
            <div><About /></div>
          </div>
        </div>
      </div>
      <div className="team full-screen">
          <Team />
      </div>

      <div className="contact full-screen">
        <Contact />
      </div>
    </div>
  );
}

export default App;