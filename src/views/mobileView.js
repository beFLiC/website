import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Gallery from "../components/gallery";
import MobileNav from "../components/mobile/MobileNav";

import {useEffect} from 'react';
import Animations from "../animations/Animations";
function MobileView(){
  useEffect(() => {
    Animations(true);
  },[]);
  
  return (
    <>
      <MobileNav />
        <div id="panels-container">
          <Home />
          <About />
        </div>
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}

export default MobileView;