import Navbar from "../components/navbar";
import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Gallery from "../components/gallery";

import Animations from "../animations/Animations";

import {useEffect} from 'react';

function WebView() {
  // execute once after render
  useEffect(() => {
    Animations();
  },[]);

  return (
    <>
      <progress max="100" value="0"
        className="fixed top-0 left-0 appearance-none w-full h-4 border-none bg-transparent
          ::-webkit-progress-bar { background-color: transparent; }"
      ></progress>

      <Navbar />
      <div className="overflow-x-hidden">
        <div id="panels-container" className="overflow-hidden flex flex-nowrap h-screen" style={{width:"500%"}}>
          <Home />
          <About />
          {/* <Invite/> */}
        </div>
      </div>
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}

export default WebView;