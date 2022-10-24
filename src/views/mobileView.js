import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";

function MobileView(){
  return (
    <>
      {/* <ResponsiveNavbar/> */}
      <Home/>
      {/* <About/> */}
      <Team/>
      <Contact/>
    </>
  );
}

export default MobileView;