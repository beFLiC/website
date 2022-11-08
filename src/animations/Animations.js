import horizontalScroll from './horizontalScroll';
import galleryAnimation from './galleryAnimation';
import teamAnimation from './teamAnimation';

function Animations(isMobile=false){
  horizontalScroll(isMobile);
  galleryAnimation(isMobile);
  teamAnimation(isMobile);
}

export default Animations;