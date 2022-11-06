import SvgCircle from "./svg/svgCircles";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { gsap } from "gsap";

import "./about.css";

function About() {
  return (
    <div
      id="about"
      data-pin="true"
      className="panel z-0 h-screen w-screen overflow-hidden flex items-center justify-center"
    >
      <SvgCircle x="-10vw" y="50vh" r="60vh" />
      <SvgCircle x="-10vw" y="50vh" r="40vh" />

      <div className="scroller h-screen">
        <section className="black flex h-screen justify-around items-center bg-[]">
          <div className="text-wrap">
            <div className="panel-text blue-text"> What is FLiC?</div>
            <div className="panel-text red-text"> Why is FLiC?</div>
            <div className="panel-text purple-text">Our Mission!</div>
          </div>

          <div className="p-wrap">
            <div className="ppanel blue overflow-hidden">
              Curiosity and creativity has no boundaries, to set up a think tank
              that not only revolves around a student's anticipated part and
              parcel that is money management but also gives them a flow of
              experience with mentoring and knowledge has to be something they
              can always approach to. And here comes the initiative to commence
              the club FLiC under the roof of guidance of IET DAVV's seniors,
              alumni and experts. It is a common ground of interaction of a
              community of recruits that are willing to grasp an edge over
              Finance Management and working in the Market.
            </div>
            <div className="ppanel red overflow-hidden">
              {" "}
              Flic is the financial literacy club which focuses on building
              financial independence skills and knowledge among peers. In
              today's era, we live in a rapidly developing country, it's
              important to understand our finances, know about real investments
              for the future and how to economically yet efficiently use money.
              Being students, we face constant issues of running low on money or
              buying unnecessary stuff or even investing and forsaking wrong
              stocks because of peer pressure without having proper ideas about
              the same.Therefore, flic is here to help with intelligent
              financial saving, knowing more about stock market and investments
              in crypto currency.
            </div>
            <div className="ppanel purple overflow-hidden">
              {" "}
              Since we believe that "financial freedom is the power to produce
              wealth and not necessarily having wealth," our goal is to acquire
              knowledge imported and spread the knowledge we have learned with
              the community we are interested in forming so that each member
              will learn to be financially independent by learning more about
              the stock market and other ways to have financial freedom every
              passing moment. The ultimate goal should be to outdo ourselves for
              the betterment of the club and most importantly our future.{" "}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
