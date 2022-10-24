import SvgCircle from "./svg/svgCircles";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
// import Scrollbar from 'smooth-scrollbar';

import './about.css'

function transition(){
  gsap.registerPlugin(ScrollTrigger);

  // let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
  //   damping: 0.1,
  //   delegateTo: document.querySelector('#about')
  // });

  // ScrollTrigger.scrollerProxy(".scroller", {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }
  //     return bodyScrollBar.scrollTop;
  //   },
  // });
  // bodyScrollBar.addListener(ScrollTrigger.update);

  gsap.set(".ppanel", { zIndex: (i, target, targets) => targets.length - i });
  
  var images = gsap.utils.toArray('.ppanel:not(.purple)');
  images.forEach((image, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ppanel",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*(i+0.5)),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        id: "image" + i,
        // horizontal: true,
        markers: true,
        toggleActions: "play reset reverse reset",
        invalidateOnRefresh: true,     
      }
    })
    tl
    .to(image, { height: 0 })
    ;    
  });

  gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

  var texts = gsap.utils.toArray('.panel-text');
  texts.forEach((text, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel-te",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*i),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        // horizontal: true,
        id: "text",
        markers: true,
        toggleActions: "play reset reverse reset",
        invalidateOnRefresh: true,     
      }
    })
    
    tl.to(text, { duration: 0.33, opacity: 1, y:"50%" })  
      .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
    ;
  });

  ScrollTrigger.create({
    trigger: "section.black",
    scroller: ".scroller",
    scrub: true,
    markers: true,
    // horizontal: true,
    id: "black",
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,
  });
}

function newtrans(tween){
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".ppanel", { zIndex: (i, target, targets) => targets.length - i });
  gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
  
  var images = gsap.utils.toArray('.ppanel:not(.purple)');
  images.forEach((image, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.black",
        // scroller: ".scroller",
        // start: () => "top -" + (window.innerHeight*(i+0.5)),
        // end: () => "+=" + window.innerHeight,
        start:"center center",
        scrub: true,
        id: "image" + i,
        markers: true,
        toggleActions: "play reset reverse reset",
        invalidateOnRefresh: true,     
      }
    })
    tl
    .to(image, { height: 0 })
    ;    
  });

}

function About() {
  return (
    <div id="about" data-pin="true" className="panel h-screen w-screen overflow-hidden flex items-center justify-center" >
      <SvgCircle x="-10vw" y="50vh" r = "60vh"/>
      <SvgCircle x="-10vw" y="50vh" r = "40vh"/>

      <div className="scroller">
        <section className="black">
          <div className="text-wrap">
            <div className="panel-text blue-text">  Blue</div>
            <div className="panel-text red-text">   Red</div>
            <div className="panel-text orange-text">Orange</div>
            <div className="panel-text purple-text">Purple</div>
          </div>

          <div className="p-wrap">
            <div className="ppanel blue"> </div>
            <div className="ppanel red"> </div>
            <div className="ppanel orange"> </div>
            <div className="ppanel purple"> </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}



export default About;

{/* <div className="flex flex-col  md:grid grid-cols-9 mx-auto p-2 py-20  text-blue-50">
          <div className="flex flex-row-reverse md:contents">
            <div
              className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 className=" font-bold justify-center mb-3 bg-gradient-to-r from-indigo-800 to-green-400 bg-clip-text inline text-4xl">
                What is FLiC
              </h3>
              <p className="leading-tight text-[#D6D6D6] text-justify">
                Curiosity and creativity has no boundaries, to set up a think
                tank that not only revolves around a student's anticipated part
                and parcel that is money management but also gives them a flow
                of experience with mentoring and knowledge has to be something
                they can always approach to. And here comes the initiative to
                commence the club FLiC under the roof of guidance of IET DAVV's
                seniors, alumni and experts. It is a common ground of
                interaction of a community of recruits that are willing to grasp
                an edge over Finance Management and working in the Market.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-white/60 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-white/60 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
            </div>
            <div

              className=" col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
            >
              <h3 className=" justify-center mb-3 bg-gradient-to-r from-indigo-800 to-green-400 text-transparent bg-clip-text font-bold inline text-4xl">
                Why is FLiC
              </h3>
              <p className="leading-tight text-[#D6D6D6] text-justify">
                Flic is the financial literacy club which focuses on building
                financial independence skills and knowledge among peers. In
                today's era, we live in a rapidly developing country, it's
                important to understand our finances, know about real
                investments for the future and how to economically yet
                efficiently use money. Being students, we face constant issues
                of running low on money or buying unnecessary stuff or even
                investing and forsaking wrong stocks because of peer pressure
                without having proper ideas about the same.Therefore, flic is
                here to help with intelligent financial saving, knowing more
                about stock market and investments in crypto currency.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div

              className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
            >
              <h3 className="justify-center mb-3 bg-gradient-to-r from-indigo-800 to-green-400 text-transparent bg-clip-text font-bold inline text-4xl">
                Our Mission
              </h3>
              <p className="leading-tight text-[#D6D6D6] text-justify">
                Since we believe that "financial freedom is the power to produce
                wealth and not necessarily having wealth," our goal is to
                acquire knowledge imported and spread the knowledge we have
                learned with the community we are interested in forming so that
                each member will learn to be financially independent by learning
                more about the stock market and other ways to have financial
                freedom every passing moment. The ultimate goal should be to
                outdo ourselves for the betterment of the club and most
                importantly our future.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-white/60 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
            </div>
          </div>
        </div> */}