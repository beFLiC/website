import Circle from "../circles";

function Home() {
  return (
    < >
      <Circle x="90vw" y="50vh" r = "60vh"/>
      <Circle x="90vw" y="50vh" r = "40vh"/>
      <Circle x="5vw" y="95vh" r = "10vh"/>

      <div className="flex flex-col gap-20">
        <div className="mx-auto sm:mx-32 flex flex-col pt-40">
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
        <div className="sm:pl-12 pl-0 grid grid-cols-1 sm:flex w-full space-y-8 mt-2 sm:space-y-0 sm:pt-20">
          <div className="sm:mx-16">
            <div className="flex mt-12 sm:mt-0">
              <SvgIcon/>
              <h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1,duration:1.1,bounce:2}} className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1.2,duration:1.1,bounce:2}} className="sm:w-60 w-48 ml-[4.2rem] text-sm text-[#828282]">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </p>
          </div>
          <div className="sm:mx-4  pb-10">
            <div className="flex">
              <SvgIcon/>
              <h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1,duration:1.1,bounce:2}} className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1.2,duration:1.1,bounce:2}} className="sm:w-60 w-48 ml-[4.2rem] text-sm text-[#828282]">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function SvgIcon() {
  return(
    <svg initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} transition={{delay:1.5,duration:0.7}}
    width="40"
    height="40"
    className="mx-4"
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="34.5"
      cy="34.5"
      r="32.5"
      stroke="#949494"
      strokeWidth="4"
    />
    <line
      x1="10.567"
      y1="31.8495"
      x2="16.3979"
      y2="21.75"
      stroke="#949494"
    />
    <line
      x1="51.433"
      y1="21.75"
      x2="57.264"
      y2="31.8495"
      stroke="#949494"
    />
    <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#949494" />
    <line
      x1="10.3536"
      y1="31.6464"
      x2="33.3536"
      y2="54.6464"
      stroke="#949494"
    />
    <line
      x1="33.8596"
      y1="55.6464"
      x2="57.8596"
      y2="31.6464"
      stroke="#949494"
    />
    <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#949494" />
  </svg>
  );
}

export default Home;