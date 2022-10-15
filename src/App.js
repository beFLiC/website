import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Home from "./components/HomeHero";
import Teams from "./components/Teams";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

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
    <>
    <div className="App sm:block hidden bg-[#202020]"> 
      <Navbar />


      <div id="panels snap-x snap-mandatory">
        <div id="panels-container" ref={panelsContainer} style={{width:"800%"}}>
          <div className="home panel snap-center full-screen" ref={(e) => createPanelsRefs(e, 0)}>
            <Home />
          </div>

          <div className="about panel full-screen snap-center snap-always" ref={(e) => createPanelsRefs(e, 1)}>
            <Timeline />
          </div>
        </div>
      </div>

      <Teams />
      <Contact />
    </div>
    {/* for mobile */}
    <div className="sm:hidden block bg-[#202020]">
      <ResponsiveNavbar/>
      <Home/>
      <Timeline/>
      <Teams/>
      <Contact/>
    </div>
    </>
  );
}

export default App;