import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Gallery from "../components/gallery";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

import {useEffect} from 'react';

function MobileView(){
  return (
    <>
      <ResponsiveNavbar/>
      <Home/>
      <About/>
      <Team/>
      <Gallery/>
      <Contact/>
    </>
  );
}

export default MobileView;