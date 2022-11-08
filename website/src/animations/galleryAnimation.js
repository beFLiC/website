import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray('img');

const galleryAnimation = () => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
    
    gsap.utils.toArray('#gallery section').forEach((section, index) => {
      const w = section.querySelector('.wrapper');
      const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: { 
          trigger: section, 
          scrub: 0.5 
        }
      });
    });
  }
export default galleryAnimation;