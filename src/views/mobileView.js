import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";
import Nav from "../components/mobile/MobileNav.js";
import { Breakpoint, BreakpointProvider } from "react-socks";

function MobileView() {
  return (
    <>
      <Breakpoint medium down>
        <Nav />
        {/* <Home/> */}
        {/* <About/> */}
        {/* <Team/> */}
        {/* <Contact /> */}
      </Breakpoint>
    </>
  );
}

export default MobileView;
