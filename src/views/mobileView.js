import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Gallery from "../components/gallery";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

import {useEffect} from 'react';
import Animations from "../animations/Animations";
function MobileView(){
  useEffect(() => {
    Animations(true);
  },[]);
  
  return (
    <>
      {/* <ResponsiveNavbar /> */}
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