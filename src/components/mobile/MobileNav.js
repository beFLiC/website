import React from "react";
import SvgLogo from "../svg/svgLogo";
import Drawermenu from "./drawer";
const nav = () => {
  return (
    <div>
      <nav className="navbar fixed z-50">
        <ul className="flex w-[100vw] justify-between items-center text-xl font-bold">
          {/* LOGO animation -> svg*/}
          <li className="order-1 ">
            <a href="/">
              <SvgLogo />
            </a>
          </li>
          <li className="text-blue-100 order-2">
            {" "}
            <Drawermenu />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
