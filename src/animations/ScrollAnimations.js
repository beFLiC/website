import horizontalScroll from './horizontalScroll';
import cardsScroll from './cardsScroll';
import galleryAnimation from './galleryAnimation';

function ScrollAnimations(){
  const timeline = horizontalScroll();
  cardsScroll(timeline);
  galleryAnimation();

}

export default ScrollAnimations;