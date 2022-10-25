// import SvgCircle from "./svg/svgCircles";

function Team() {
  return (
    <div id="team" className="relative full-screen h-screen w-screen [&_div]:absolute [&_div]:top-0">
      <div className="w-full h-full text-[#d6d6d6] text-4xl overflow-hidden" id="bg"></div>
      <div className="w-full h-full text-[#d6d6d6] text-4xl overflow-hidden" id="fg"></div>
    </div>
  );
}

export default Team;