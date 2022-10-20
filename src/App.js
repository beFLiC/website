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
      <Navbar />


      <div className="overflow-x-hidden">
        <div id="panels-container" className="overflow-hidden flex flex-nowrap h-screen" ref={panelsContainer} style={{width:"500%"}}>
          <div id="home" className="w-screen h-screen overflow-hidden" ref={(e) => createPanelsRefs(e, 0)}>
            <Home />
          </div>

          <div className="about w-screen h-screen overflow-hidden" ref={(e) => createPanelsRefs(e, 1)}>
            <About />
          </div>
        </div>
      </div>

      <Team />
      <Contact />
    </div>
  );
}

export default App;