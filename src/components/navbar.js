import SvgLogo from "./svg/svgLogo";
// import Drawermenu from "./mobile/drawer";
function Navbar() {
  return (
    <nav className="navbar fixed z-50">
      <ul className="pt-10 pl-16 flex gap-12 items-center text-xl font-bold">
        {/* LOGO animation -> svg*/}
        <li>
          <a href="#home">
            <SvgLogo />
          </a>
        </li>

        <li className="text-blue-100 font-[100] text-6xl">|</li>
        <li className="text-blue-100 hover:text-white">
          {" "}
          <a href="#about"> About Us</a>
        </li>
        <li className="text-blue-100 hover:text-white">
          {" "}
          <a href="#gallery"> Gallery </a>
        </li>

        <li className="text-blue-100 hover:text-white">
          {" "}
          <a href="#team">Our Team</a>
        </li>
        <li className="text-blue-100 hover:text-white">
          {" "}
          <a href="#contact">Contact Us</a>
        </li>
        {/* <li className="text-[#D6D6D6] hover:text-[#ffffff]"> <a href="#contact"><Drawermenu/></a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
