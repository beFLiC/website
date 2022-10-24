import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

function horizontalScroll(){
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* Main navigation */
  let panelsContainer = document.querySelector("#panels-container");
  let masterTimeline;
  // Navigation
  document.querySelectorAll(".navbar li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      let targetElem = document.querySelector(anchor.getAttribute("href"));
      let y = targetElem;

      if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
        let totalScroll = masterTimeline.scrollTrigger.end - masterTimeline.scrollTrigger.start;
        let totalMovement = (panels.length - 1) * targetElem.offsetWidth;
        y = Math.round(masterTimeline.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
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
  const stopPanel = panels.findIndex((panel) => panel.dataset.pin);
  // Master timeline, animation horizontal + cards
  masterTimeline = gsap.timeline({
    defaults : {
      ease: "none",
    },
    // xPercent: -100 * ( panels.length - 1 ),
    scrollTrigger: {
      trigger: "#panels-container",
      pin: true,
      start: "top top",
      scrub: 2,
      end: () =>  "+=" + (panelsContainer.offsetWidth - window.innerWidth)/3,
      invalidateOnRefresh: true
    }
  }).to(panels, {
    xPercent: -100 *stopPanel,   // xPercent: -100 *( panels.length - 1 )
    duration:stopPanel
  });

  gsap.set(".ppanel", { zIndex: (i, target, targets) => targets.length - i });
  gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

  var images = gsap.utils.toArray('.ppanel:not(.purple)');
  images.forEach((image, i) => {
    masterTimeline.to(image, { height: 0 },`img${i}`)
                  .to(image,{duration:0.12},'>');     // adding delay to see the text
  });

  var texts = gsap.utils.toArray('.panel-text');
  texts.forEach((text, i) => {
    masterTimeline.to(text, { duration: 0.33, opacity: 1, y:"50%" },`img${i}-=0.33`)  // label minus 0.33
                  .to(text,{duration:0.12},'>') // "+adding delay of 0.12, > is after previous"
                  .to(text, { duration: 0.33, opacity: 0, y:"0%" }, ">")
    ;
  });

  masterTimeline.to(panels,{
    xPercent: -100 * ( panels.length - 1 ),
    duration: panels.length - stopPanel
  });
  
}

export default horizontalScroll;