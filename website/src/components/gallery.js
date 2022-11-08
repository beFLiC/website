import './gallery.css';
function Gallery(){
  return (
    <div id="gallery" className="snap-x full-screen h-full w-screen">
      <div className="demo-wrapper [&_img]:w-full [&_img]:h-auto [&_img]:bg-[#f0f0f0] [&_ul]:pl-4 [&_ul]:list-none [&_li]:shrink-0 [&_li]:pr-4 overflow-x-hidden">
        
      <div className="w-screen h-screen flex justify-center items-center">
          <h1 className="text-[#d6d6d6] text-9xl font-bold">Gallery</h1>
      </div>

        <section className="demo-text">
          <div className="wrapper text">#BEFLICKINAWESOME#BEFLIC</div>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height={874}
                alt = "img"
                // src="https://source.unsplash.com/random/1240x874?sig=143"
                src='./logo192.png'
                width={1240}
              />
            </li>
            <li>
              <img
                alt = "img"
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=83"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=122"
                width={1240}
              />
            </li>
            <li>
              <img
                alt = "img"
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=114"
                width={1240}
              />
            </li>
          </ul>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=59"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=130"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=2"
                width={1240}
              />
            </li>
          </ul>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=57"
                alt = "img"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=80"
                width={1240}
              />
            </li>
            <li>
              <img
                alt = "img"
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=119"
                width={1240}
              />
            </li>
          </ul>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper">
            <li>
              <img
                height={874}
                alt = "img"
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=182"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=166"
                alt = "img"
                width={1240}
              />
            </li>
            <li>
              <img
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=193"
                width={1240}
                alt = "img"
              />
            </li>
            <li>
              <img
                height={874}
                src='./logo192.png'
                // src="https://source.unsplash.com/random/1240x874?sig=100"
                width={1240}
                alt = "img"
              />
            </li>
          </ul>
        </section>

        <section className="demo-text">
          <div className="wrapper text">#BEFLICKINAWESOME</div>
        </section>
      </div>

    </div>
  );
}

export default Gallery;