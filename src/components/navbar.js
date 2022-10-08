function Navbar () {
  return (
    <nav className="navbar fixed">
      <ul className="pt-10 pl-16 flex gap-10 text-primary-color text-xl  font-bold">
                  {/* LOGO animation -> svg*/}
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="157.71 288.18 764.59 503.63" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <defs>
              <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%" gradientTransform="rotate(-11)">
                <stop offset={0} style={{stopColor: '#2F2A7B'}} />
                <stop offset={1} style={{stopColor: '#39B54A'}} />
              </linearGradient>
              
              <mask id="svg-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={1080} height={1080}>
                <path id="pathsvg" d="M169,786.34Q363.359996,175.978707,899.999998,336.45q-179.120002,587.259106-529.72,350.82q69.719998-251.25,299.72-209.26" fill="none" strokeWidth={35} strokeLinecap="round" strokeLinejoin="miter" />
              </mask>
            </defs>

            <g mask="url(#svg-mask)">
              <rect x={0} y={0} width={1080} height={1080} fill="white" />
              <rect id="svg-gradient" x={0} y={0} width={1080} height={1080} fill="url(#gradient)" />
            </g>
          </svg>
        <li className="text-secondary-color">|</li>
        <li>About Us</li>
        <li>Our Team</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;

// import { motion } from "framer-motion";


// const Navbar = () => {

//   return (
//     <nav className="w-full fixed bg-slate-900 shadow">
//       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

//         {/* LOGO animation -> svg*/}
//         <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="157.71 288.18 764.59 503.63" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
//           <defs>
//             <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%" gradientTransform="rotate(-11)">
//               <stop offset={0} style={{stopColor: '#2F2A7B'}} />
//               <stop offset={1} style={{stopColor: '#39B54A'}} />
//             </linearGradient>
            
//             <mask id="svg-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={1080} height={1080}>
//               <path id="pathsvg" d="M169,786.34Q363.359996,175.978707,899.999998,336.45q-179.120002,587.259106-529.72,350.82q69.719998-251.25,299.72-209.26" fill="none" strokeWidth={35} strokeLinecap="round" strokeLinejoin="miter" />
//             </mask>
//           </defs>

//           <g mask="url(#svg-mask)">
//             <rect x={0} y={0} width={1080} height={1080} fill="white" />
//             <rect id="svg-gradient" x={0} y={0} width={1080} height={1080} fill="url(#gradient)" />
//           </g>
//         </svg>

//         <div>
//             <ul className="items-center justify-center space-y-8 md:mx-8 md:my-8 md:flex md:space-x-6 md:space-y-0">
//               <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.8,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
//                 <a href="#About">About Us</a>
//               </motion.li>
//               <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.3,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
//                 <a href="#Teams">Our Team</a>
//               </motion.li>
//               <motion.li initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.8,duration:1,bounce:1}} className="text-white/80 hover:font-semibold hover:text-white">
//                 <a href="#contact">Contact Us</a>
//               </motion.li>
//             </ul>
//           </div>
//       </div>
//     </nav>
//   );
// };


// export default Navbar;