import SvgCircle from "./svg/svgCircles";
import SvgDrawIcon from "./svg/svgDrawIcon";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    
  },[]);
  return (
    < div id="home" className="panel w-screen h-screen overflow-hidden">
      <SvgCircle x="90vw" y="50vh" r = "60vh"/>
      <SvgCircle x="90vw" y="50vh" r = "40vh"/>
      <SvgCircle x="5vw" y="95vh" r = "10vh"/>

      <div className="home-container h-screen w-screen">
        <div className="home-content">
          <h1 className="text-[#D6D6D6] antialiased md:text-4xl text-3xl font-[500] md:w-96 w-56 mx-4 sm:mx-0 sm:leading-[5rem] leading-[4rem] tracking-wide">
            Hey! Welcome to our club{" "}
            <span className="bg-gradient-to-r from-[#2F2A7B] text-7xl to-[#39B54A] text-transparent bg-clip-text sm:pl-2 font-[900] tracking-wide">
              FLiC.
            </span>
          </h1>
          <p className="font-[200] antialiased mx-4 md:mx-0 w-60 md:w-auto text-[#949494] my-4 pb-4">
            The official financial literacy club of IET-DAVV.
          </p>

          <div className="flex space-x-6 sm:space-x-10">
            <button initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.2,duration:1.5,bounce:2}}
              type="button"
              className="px-8 py-1 active:rounded font-['Epilogue'] font-[600] antialiased rounded-full bg-[#338D3F] hover:bg-green-600 text-white"
            >
              Sample
            </button>
            <button initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.2,duration:1.5,bounce:2}}
              type="button"
              className="px-8 py-3 active:rounded bg-[#262262] font-['Epilogue'] hover:bg-[#453FA6] font-semibold rounded-full text-white"
            >
              Sample
            </button>
          </div>
        </div>
        <div className="home-model">
        </div>
        <div className="home-footer flex flex-row gap-5">
          <Foot/>
          <Foot/>
        </div>

      </div>

      <div className="3dmodel"></div>
    </div>
  );
}

export default Home;

function Foot() {
  return (
    <div className="flex gap-6">
      <SvgDrawIcon/>
      <div className="flex flex-col gap-3">
        <h2 className="text-[#D6D6D6] font-semibold text-lg">Features</h2>
        <p className="sm:w-60 w-48 text-sm text-[#828282]">
          Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
          quae odio perferendis fugiat possimus. Corporis aliquam ipsum
          debitis possimus similique molestias.
        </p>
      </div>
    </div>
  );
}