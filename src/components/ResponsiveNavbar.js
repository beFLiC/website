import React, { useState } from "react";

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);
  // data
  const nav = [
    {
      name: "About Us",
      add: "#",
    },
    {
      name: "Our Team",
      add: "#",
    },
    {
      name: "Contact Us",
      add: "#",
    },
  ];
  return (
    <>
      {/* a navbar start */}
      <nav className="border-gray-200 py-5 px-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* a logo with ability to come back home */}
          
            <svg
              id="svg"
              width={30}
              height={30}
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="157.71 288.18 764.59 503.63"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  fy="90%"
                  gradientTransform="rotate(-11)"
                >
                  <stop offset={0} style={{ stopColor: "#2F2A7B" }} />
                  <stop offset={1} style={{ stopColor: "#39B54A" }} />
                </linearGradient>
                <mask
                  id="svg-mask"
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={1080}
                  height={1080}
                >
                  <path
                    id="pathsvg"
                    d="M169,786.34Q363.359996,175.978707,899.999998,336.45q-179.120002,587.259106-529.72,350.82q69.719998-251.25,299.72-209.26"
                    fill="none"
                    strokeWidth={50}
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                  />
                </mask>
              </defs>

              <g mask="url(#svg-mask)">
                <rect x={0} y={0} width={1080} height={1080} fill="white" />
                <rect
                  id="svg-gradient"
                  x={0}
                  y={0}
                  width={1080}
                  height={1080}
                  fill="url(#gradient)"
                />
              </g>
            </svg>
    
          <div className="flex lg:order-2">
            <div className="relative mr-3 lg:mr-0 hidden lg:block"></div>
            {/* button for mobile view  */}
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="lg:hidden text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* a link and button style and function control from here */}
          <div
            className={
              show
                ? "lg:flex justify-between items-center w-full lg:w-auto lg:order-1"
                : "hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1"
            }
            id="mobile-menu-3"
          >
            <div className="flex-col lg:flex-row flex lg:space-x-8 mt-5 lg:mt-0 lg:text-sm lg:font-medium">
              {/* a loop or fetch the link data from the array  */}
              {nav.map((value, idx) => {
                return (
                  <div key={idx}>
                    <a
                      className="bg-[#202020] lg:my-6 font-semibold text-center focus:rounded-3xl lg:bg-transparent text-white block pl-3 pr-4 py-2 lg:text-black lg:p-0 rounded"
                      aria-current="page"
                      href={value.add}
                    >
                      {value.name}
                    </a>
                  </div>
                );
              })}
              <div className="lg:mt-[1rem] ml-[43vw] lg:ml-0 lg:space-x-2 flex lg:flex-row space-y-2 lg:space-y-0 flex-col w-[90vw] lg:absolute lg:right-4 lg:w-auto"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
