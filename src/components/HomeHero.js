import React from "react";
import { motion } from "framer-motion";
const HomeHero = () => {
  return (
    <>
      <div className="grid sm:h-auto overflow-x-hidden bg-[#202020]">
        <div className="mx-auto sm:mx-32 flex flex-col pt-32">
          <motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:1.5,bounce:2}} className="font-['Epilogue'] antialiased text-white text-4xl font-[500] w-96 leading-[5rem] tracking-wide">
            Hey! Welcome to our club{" "}
            <span className="bg-gradient-to-r from-[#2F2A7B] text-7xl to-[#39B54A] text-transparent bg-clip-text pl-2 font-[900] tracking-wide">
              FLiC.
            </span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.9,duration:1.5,bounce:2}} className="font-['Epilogue'] font-[200] antialiased text-[#949494] my-4 pb-4">
            The official financial literacy club of IET-DAVV.
          </motion.p>

          <div className="flex space-x-10">
            <motion.button initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{delay:1.2,duration:1.5,bounce:2}}
              type="button"
              className="px-8 py-1 active:rounded font-['Epilogue'] font-[600] antialiased rounded-full bg-[#338D3F] hover:bg-green-600 text-white"
            >
              Sample
            </motion.button>
            <motion.button initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} transition={{delay:1.2,duration:1.5,bounce:2}}
              type="button"
              className="px-8 py-3 active:rounded bg-[#262262] font-['Epilogue'] hover:bg-[#453FA6] font-semibold rounded-full text-white"
            >
              Sample
            </motion.button>
          </div>
        </div>
        <div className="pl-12 grid grid-cols-1 sm:flex w-[100vw] space-y-8 mt-2 sm:space-y-0 sm:pt-20">
          <div className="mx-auto sm:mx-16">
            <div className="flex">
              <motion.svg initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} transition={{delay:1.5,duration:0.7}}
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
                  stroke="#646464"
                  stroke-width="4"
                />
                <line
                  x1="10.567"
                  y1="31.8495"
                  x2="16.3979"
                  y2="21.75"
                  stroke="#969696"
                />
                <line
                  x1="51.433"
                  y1="21.75"
                  x2="57.264"
                  y2="31.8495"
                  stroke="#969696"
                />
                <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#969696" />
                <line
                  x1="10.3536"
                  y1="31.6464"
                  x2="33.3536"
                  y2="54.6464"
                  stroke="#969696"
                />
                <line
                  x1="33.8596"
                  y1="55.6464"
                  x2="57.8596"
                  y2="31.6464"
                  stroke="#969696"
                />
                <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#969696" />
              </motion.svg>
              <motion.h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1,duration:1.1,bounce:2}} className="text-white font-semibold text-lg">Features</motion.h2>
            </div>
            <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1.2,duration:1.1,bounce:2}} className="w-60 ml-[4.2rem] text-sm text-[#828282]">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </motion.p>
          </div>
          <div className="mx-auto sm:mx-4  pb-10">
            <div className="flex">
              <motion.svg initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} transition={{delay:1.5,duration:0.7}}
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
                  stroke="#646464"
                  stroke-width="4"
                />
                <line
                  x1="10.567"
                  y1="31.8495"
                  x2="16.3979"
                  y2="21.75"
                  stroke="#969696"
                />
                <line
                  x1="51.433"
                  y1="21.75"
                  x2="57.264"
                  y2="31.8495"
                  stroke="#969696"
                />
                <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#969696" />
                <line
                  x1="10.3536"
                  y1="31.6464"
                  x2="33.3536"
                  y2="54.6464"
                  stroke="#969696"
                />
                <line
                  x1="33.8596"
                  y1="55.6464"
                  x2="57.8596"
                  y2="31.6464"
                  stroke="#969696"
                />
                <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#969696" />
              </motion.svg>
              <motion.h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1,duration:1.1,bounce:2}} className="text-white font-semibold text-lg">Features</motion.h2>
            </div>
            <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1.2,duration:1.1,bounce:2}} className="w-60 ml-[4.2rem] text-sm text-[#828282]">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
