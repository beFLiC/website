// import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Team from "../components/team";

function MobileView(){
  return (
    <>
      <div className="sm:hidden block z-0">
      {/* <ResponsiveNavbar/> */}
      <Home/>
      {/* <About/> */}
      <Team/>
      <Contact/>
      </div>
    </>
  );
}

export default MobileView;