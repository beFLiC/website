import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";



function horizontalScroll(isMobile){
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  if(isMobile){
    let masterTimeline = gsap.timeline({
      defaults : {
        ease: "none",
      },
      // xPercent: -100 * ( panels.length - 1 ),
      scrollTrigger: {
        trigger: "section.black",
        // scroller: '.App',
        pin: '#about',
        start: ()=>"top top",
        end: () => "+=" + ((document.querySelectorAll('.ppanel').length) * window.innerHeight),
        scrub: 2,
        // markers: true,
        // end: () =>  "+=" + (panelsContainer.offsetWidth - window.innerWidth)/3,
        invalidateOnRefresh: true
      }
    });
    scrollMobile(masterTimeline);
    nav(masterTimeline);
  }else{
    horizontalScroll_();
  }
}

function scrollMobile(masterTimeline){

  gsap.set(".ppanel", { zIndex: (i, target, targets) => targets.length - i });
  gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
  let images = gsap.utils.toArray('.ppanel:not(.purple)');

  images.forEach((image, i) => {
    masterTimeline
      .to(image, { height: 0 },`img${i}`)
      .to(image,{duration:0.3},'>');     // adding delay to see the text
  });

  var texts = gsap.utils.toArray('.panel-text');
  texts.forEach((text, i) => {
    if(i<2){
      masterTimeline
        .to(text, { duration: 0.33, opacity: 1, y:"50%" },`img${i}-=0.33`)  // label minus 0.33
        .to(text,{duration:0.3},'>') // "+adding delay of 0.12, > is after previous"
        .to(text, { duration: 0.33, opacity: 0, y:"0%" }, ">")
      ;
    }else{
      masterTimeline
      .to(text, { duration: 0.33, opacity: 1, y:"50%" },`img${i}-=0.33`)  // label minus 0.33
      .to(text,{duration:1},'>') // "+adding delay of 0.12, > is after previous"
    }
  });
}

function nav(masterTimeline){
  let panelsContainer = document.querySelector("#panels-container");
  const panels = gsap.utils.toArray("#panels-container .panel");

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
}

function horizontalScroll_(){

  let panelsContainer = document.querySelector("#panels-container");
  const panels = gsap.utils.toArray("#panels-container .panel");
  const stopPanel = panels.findIndex((panel) => panel.dataset.pin);

  let masterTimeline;

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

  scrollMobile(masterTimeline);

  masterTimeline.to(panels,{
    xPercent: -100 * ( panels.length - 1 ),
    duration: panels.length - stopPanel
  });

  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  });
  
  document.querySelectorAll('.ppanel.purple').forEach( element =>{
    element.addEventListener('mousemove', (e)=>{
      var rect = element.getBoundingClientRect();
      const angleDeg = Math.round(Math.atan2(e.clientY -(rect.right-rect.left)/2 , e.clientX - (rect.bottom - rect.top)/2) * 180 / Math.PI) ;
  
      element.style.setProperty('background', `linear-gradient(${angleDeg}deg, #262262 6.24%, #52af5d 91.17%, #48af55 91.17%)`);
    })
  })
  nav(masterTimeline);

}

export default horizontalScroll;