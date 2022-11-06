import React from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Icon from "../svg/menuIcon";
import Cross from "../svg/crossIcon";
const Drawermenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={ToggleDrawer}>
        <Icon />
      </button>
      <Drawer
        open={isOpen}
        onClose={ToggleDrawer}
        direction="right"
        className=""
      >
        <div className="bg-[#1E1E1E] w-full h-full">
          <ul className="space-y-20 px-10 flex flex-col">
            <li className="text-blue-100  px-40 " onClick={ToggleDrawer}>
              <Cross />
            </li>
            <li className="text-blue-100">
              {" "}
              <a href="#about"> About Us</a>
            </li>
            <li className="text-blue-100">
              {" "}
              <a href="#team">Our Team</a>
            </li>
            <li className="text-blue-100">
              {" "}
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Drawermenu;
