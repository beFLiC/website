import SvgCircle from "./svg/svgCircles";

function Team() {
    const teamchiefs = [
        {
            name : "Mustafa Azad",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
    ]
    const teamhead = [
        {
            name : "Mustafa Azad",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
    ]
    
  return (
    <div id="team" className="full-screen h-screen w-screen">
      <div className="absolute sm:mx-16 mt-16">
        <h2 className='bg-gradient-to-r mt-5 mx-auto text-center sm:text-left from-indigo-800 to-green-500 text-transparent bg-clip-text sm:text-5xl text-4xl text-[2.1rem] sm:mx-auto font-bold'>Meet Our Team!</h2>
        <div className="border-b-4 mb-12  border-green-600 sm:ml-20 my-2 mx-auto lg:w-[15vw] sm:w-[20vw] w-[30vw]"></div>
        <h3 className='mt-10 font-semibold text-center sm:text-left text-2xl text-white mb-4 sm:mb-4'>Co-Founders</h3>
        <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 sm:ml-5 snap-x snap-center md:ml-[-1.7rem] lg:ml-0 sm:w-[90vw] flex ml-[-15%] gap-[14vh] sm:gap-0 mx-auto w-auto mr-4 overflow-auto">
        {teamchiefs.map((value,idx) => {
            return(
                <div className="grid grid-cols-1 ml-[18%] sm:ml-0 my-2" key={idx}>
                    <div className="sm:w-36 sm:h-36 w-32 h-32 mx-auto rounded-full"><img className='rounded-full sm:w-36 sm:h-36 w-32 h-32' src={value.img} alt="" /></div>
                    <h3 className='text-center sm:mx-auto w-[8rem] font-semibold text-white my-1 mt-2 text-lg'>{value.name}</h3>
                    <p className='sm:mx-auto font-medium text-sm text-slate-200 sm:w-40 w-[8rem] text-center'>{value.desc}</p>
                </div>
            )
        })}
        </div>
        <h3 className='mt-10 font-semibold text-center sm:text-left text-2xl text-white mb-4 sm:mb-0'>Heads</h3>
        <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 sm:ml-5 snap-x snap-center md:ml-[-1.7rem] lg:ml-0 sm:w-[90vw] flex ml-[-15%] gap-[14vh] sm:gap-0 mx-auto w-auto mr-4 overflow-auto">
        {teamhead.map((value,idx) => {
            return(
              <div className="grid grid-cols-1 ml-[18%] sm:ml-0 my-2" key={idx}>
              <div className="sm:w-36 sm:h-36 w-32 h-32 mx-auto rounded-full"><img className='rounded-full sm:w-36 sm:h-36 w-32 h-32' src={value.img} alt="" /></div>
              <h3 className='text-center sm:mx-auto w-[8rem] font-semibold text-white my-1 mt-2 text-lg'>{value.name}</h3>
              <p className='sm:mx-auto font-medium text-sm text-slate-200 sm:w-40 w-[8rem] text-center'>{value.desc}</p>
          </div>
            )
        })}
        </div>
        </div>
      
      <SvgCircle x="-10vw" y="-50vh" r = "60vh"/>
    </div>
  );
}

export default Team;