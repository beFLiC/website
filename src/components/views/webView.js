import Navbar from "../navbar";
import About from "../about";
import Contact from "../contact";
import Home from "../home";
import Team from "../team";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function WebView() {
  // execute once after render
  useEffect(() => {
    scrollEffect();
  },[]);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div id="panels-container" className="overflow-hidden flex flex-nowrap h-screen" style={{width:"500%"}}>
          <Home />
          <About />
        </div>
      </div>
      <Team />
      <Contact />
    </>
  );
}

export default WebView;

// navigation and scroll effect
function scrollEffect(){
  /* Main navigation */
  let panelsContainer = document.querySelector("#panels-container"),
  tween;

  document.querySelectorAll(".navbar li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      let targetElem = document.querySelector(anchor.getAttribute("href"));
      let y = targetElem;

      if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
        let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
        let totalMovement = (panels.length - 1) * targetElem.offsetWidth;
        y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
      }

      gsap.to(window, {
        scrollTo: {
          y: y,
          autoKill: false
        },
        duration: 1
      });
    });
  });

  /* Panels */
  const panels = gsap.utils.toArray("#panels-container .panel");
  console.log(panels);
  tween = gsap.to(panels, {
    xPercent: -100 * ( panels.length - 1 ),
    ease: "none",
    scrollTrigger: {
      trigger: "#panels-container",
      pin: true,
      start: "top top",
      scrub: 1,
      snap: {
        snapTo: 1 / (panels.length - 1),
        inertia: false,
        duration: {min: 0.1, max: 0.1}
      },
      end: () =>  "+=" + (panelsContainer.offsetWidth - window.innerWidth)/3
    }
  });
}