import About from "../about";
import Contact from "../contact";
import Home from "../home";
import Team from "../team";

function MobileView(){
  return (
    <>
      {/* <ResponsiveNavbar/> */}
      <Home/>
      <About/>
      <Team/>
      <Contact/>
    </>
  );
}

export default MobileView;