import SvgLogo from "./svg/svgLogo";

function Navbar () {
  return (
    <nav className="navbar fixed z-50 bg-[#202020]">
      <ul className="pt-4 pl-16 flex gap-12 items-center text-xl font-bold">
        {/* LOGO animation -> svg*/}
        <li>
          <a href="#home">
            <SvgLogo/>
          </a>
        </li>

        <li className="text-[#949494] font-[100] text-6xl">|</li>
        <li className="text-[#D6D6D6] hover:text-[#ffffff]"> <a href="#about"> About Us</a></li>
        <li className="text-[#D6D6D6] hover:text-[#ffffff]"> <a href="#team">Our Team</a></li>
        <li className="text-[#D6D6D6] hover:text-[#ffffff]"> <a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;