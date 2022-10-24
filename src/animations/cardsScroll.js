import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function cardsScroll(horizontal_scroll){
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".ppanel", { zIndex: (i, target, targets) => targets.length - i });
  gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

  var images = gsap.utils.toArray('.ppanel:not(.purple)');
  images.forEach((image, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.black",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*(i+0.5)),
        end: () => "+=" + window.innerHeight,
        scrub: 1,
        id: "image" + i,
        containerAnimation: horizontal_scroll,
        // horizontal: true,
        markers: true,
        toggleActions: "play reset reverse reset",
        invalidateOnRefresh: true,
        pin:true,
      }
    })
    tl
    .to(image, { height: 0 })
    ;    
  });

  var texts = gsap.utils.toArray('.panel-text');
  texts.forEach((text, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.black",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*i),
        end: () => "+=" + window.innerHeight,
        scrub: 1,
        // horizontal: true,
        id: "text",
        containerAnimation: horizontal_scroll,
        markers: true,
        toggleActions: "play reset reverse reset",
        invalidateOnRefresh: true,     
        pin:true,

      }
    })
    
    tl.to(text, { duration: 0.33, opacity: 1, y:"50%" })  
      .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
    ;
  });

  ScrollTrigger.create({
    trigger: "section.black",
    scroller: ".scroller",
    scrub: 1,
    markers: true,
    // horizontal: true,
    id: "black",
    pin: true,
    containerAnimation: horizontal_scroll,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,
  });

}

export default cardsScroll;