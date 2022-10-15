import React from 'react'

const Teams = () => {
    const teamchiefs = [
        {
            name : "Mohit Aasirwal",
            desc : "Chief Executive Officer At Squiggly",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa Azad",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
    ]
    const teamhead = [
        {
            name : "Mustafa Azad",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
        {
            name : "Mustafa",
            desc : "Chief Executive Officer At Google",
            img : "https://source.unsplash.com/user/c_v_r"
        },
    ]
  return (
    <>
    <div id='Teams' className=' sm:px-36 overflow-x-hidden '>
        <h2 className='bg-gradient-to-r mt-5 text-center sm:text-left from-indigo-800 to-green-500 text-transparent bg-clip-text inline sm:text-5xl text-4xl text-[2.1rem] sm:mx-auto font-bold'>Meet Our Team!</h2>
        <div className="border-b-4 mb-12 border-indigo-400 sm:mx-20 my-6  mx-auto lg:w-[15vw] sm:w-[20vw] w-[30vw]"></div>
        <h3 className='mt-10 font-semibold text-center sm:text-left text-2xl text-white mb-4 sm:mb-0'>Chiefs</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2">
        {teamchiefs.map((value,idx) => {
            return(
                <div className="grid grid-cols-1 mx-auto my-2" key={idx}>
                    <div className="w-32 h-32 mx-auto rounded-full"><img className='rounded-full w-32 h-32' src={value.img} alt="" /></div>
                    <h3 className='mx-auto font-semibold text-white my-1 mt-2 text-lg'>{value.name}</h3>
                    <p className='mx-auto font-medium text-sm text-slate-200 w-40 text-center'>{value.desc}</p>
                </div>
            )
        })}
        </div>
        <h3 className='mt-10 font-semibold text-center sm:text-left text-2xl text-white mb-4 sm:mb-0'>Heads</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2">
        {teamhead.map((value,idx) => {
            return(
                <div className="grid grid-cols-1 mx-auto my-2" key={idx}>
                    <div className="w-32 h-32 mx-auto rounded-full"><img className='rounded-full w-32 h-32' src={value.img} alt="" /></div>
                    <h3 className='mx-auto font-semibold text-white my-1 mt-2 text-lg'>{value.name}</h3>
                    <p className='mx-auto font-medium text-sm text-slate-200 w-40 text-center'>{value.desc}</p>
                </div>
            )
        })}
        </div>
    </div></>
  )
}

export default Teams