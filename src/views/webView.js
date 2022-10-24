import Navbar from "../components/navbar";
import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Invite from "../components/invite";
import Gallery from "../components/gallery";

import ScrollAnimations from "../animations/ScrollAnimations";

import {useEffect} from 'react';

function WebView() {
  // execute once after render
  useEffect(() => {
    ScrollAnimations();
  },[]);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div id="panels-container" className="overflow-hidden flex flex-nowrap h-screen" style={{width:"500%"}}>
          <Home />
          <About />
          {/* <Invite/> */}
        </div>
      </div>
      <Gallery />
      <Team />
      <Contact />
    </>
  );
}

export default WebView;