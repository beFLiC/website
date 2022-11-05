// import SvgCircle from "./svg/svgCircles";
import './team.css';
function Team() {
  return (
    <section id="team">
      <section className="intro gradient-hover-text">Meet our Team!</section>
      <section className="gradient-box gradient-hover">
        <section className="teamContainer">
          <section className="blackteam">
            <h1>Executives</h1>
            <section className="infoContainer">
              <section id="designationExecutives" />
              <section id="nameExecutives" />
              <section className="infor">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
                  iusto, pariatur in, esse rerum doloribus ipsa iure reiciendis
                  molestiae, dolores similique incidunt nulla aliquam blanditiis
                  minima nam at. Reiciendis, dolor.
                </p>
              </section>
            </section>
            <section id="handlesExecutives">
              <a href="#team" className="email">
                <i className="fa-solid fa-envelope" />
              </a>
              <a href="#team" target="_blank" className="linkedin">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="#team" target="_blank" className="instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </section>
          </section>
          <section id="slider1" />
        </section>
      </section>
      <section className="gradient-box gradient-hover">
        <section className="teamContainer">
          <section className="blackteam">
            <h1>Heads</h1>
            <section className="infoContainer">
              <section id="designationHeads" />
              <section id="nameHeads" />
              <section className="infor">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
                  iusto, pariatur in, esse rerum doloribus ipsa iure reiciendis
                  molestiae, dolores similique incidunt nulla aliquam blanditiis
                  minima nam at. Reiciendis, dolor.
                </p>
              </section>
            </section>
            <section id="handlesHeads">
              <a href="#team" className="email">
                <i className="fa-solid fa-envelope" />
              </a>
              <a href="#team" target="_blank" className="linkedin">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="#team" target="_blank" className="instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </section>
          </section>
          <section id="slider2" />
        </section>
        <section className="teamContainer" style={{ marginTop: "2vw" }}>
          <section className="blackteam">
            <section className="infoContainer">
              <section id="designationHeads2" />
              <section id="nameHeads2" />
              <section className="infor">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
                  iusto, pariatur in, esse rerum doloribus ipsa iure reiciendis
                  molestiae, dolores similique incidunt nulla aliquam blanditiis
                  minima nam at. Reiciendis, dolor.
                </p>
              </section>
            </section>
            <section id="handlesHeads2">
              <a href="#team" className="email">
                <i className="fa-solid fa-envelope" />
              </a>
              <a href="#team" target="_blank" className="linkedin">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="#team" target="_blank" className="instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </section>
          </section>
          <section id="slider22" />
        </section>
      </section>
    </section>

  );
}

export default Team;