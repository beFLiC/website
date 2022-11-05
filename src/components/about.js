import SvgCircle from "./svg/svgCircles";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { gsap } from "gsap";

import './about.css'

function About() {
  return (
    <div id="about" data-pin="true" className="panel z-0 h-screen w-screen overflow-hidden flex items-center justify-center" >
      <SvgCircle x="-10vw" y="50vh" r = "60vh"/>
      <SvgCircle x="-10vw" y="50vh" r = "40vh"/>

      <div className="scroller h-screen">
        <section className="black flex h-screen justify-around items-center bg-[]">
          <div className="text-wrap">
            <div className="panel-text blue-text">  What is FLiC?</div>
            <div className="panel-text red-text">   Why is FLiC?</div>
            <div className="panel-text purple-text">Our Mission!</div>
          </div>

          <div className="p-wrap">
            <div className="ppanel blue overflow-hidden"> 
              Anim in magna est cupidatat ex eiusmod consectetur aliqua deserunt consectetur ullamco non cillum mollit. Labore aute in consequat proident et. Cillum velit Lorem elit mollit irure qui pariatur laborum. 
            </div>
            <div className="ppanel red overflow-hidden"> Ipsum nostrud culpa ad sit mollit amet commodo enim excepteur sunt reprehenderit qui aliqua. Magna duis quis laborum irure laborum excepteur proident tempor qui reprehenderit tempor exercitation. Ex reprehenderit laboris tempor eiusmod ut cillum esse dolor mollit quis commodo.</div>
            <div className="ppanel purple overflow-hidden">Excepteur ut aliqua do labore officia ullamco consectetur incididunt nulla consectetur veniam. Eiusmod culpa consectetur velit duis excepteur excepteur deserunt sint. Esse aliqua aliqua pariatur exercitation eu minim adipisicing officia laborum. Commodo enim anim fugiat labore nulla reprehenderit cupidatat deserunt adipisicing et. Mollit magna nisi voluptate sit sint dolor nulla ipsum mollit aute ea dolor in fugiat. </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}



export default About;