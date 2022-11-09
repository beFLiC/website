import React from "react";
import SvgLogo from "../svg/svgLogo";
import Drawermenu from "./drawer";
const MobileNav = () => {
  return (
      <nav className="navbar fixed z-50">
        <ul className="flex w-[100vw] justify-between items-center text-xl font-bold">
          {/* LOGO animation -> svg*/}
          <li>
            <a href="#home">
              <SvgLogo />
            </a>
          </li>
          <li >
            {" "}
            <Drawermenu />
          </li>
        </ul>
      </nav>
  );
};

export default MobileNav;