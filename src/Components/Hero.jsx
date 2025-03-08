import react from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {

    return(
        <div className="w-full mt-[-96px] h-screen mx-auto flex flex-col justify-center items-center">
            <p className="text-[#00df9a] font-bold uppercase lg:text-2xl xl:text-4xl">growing with data analytics</p>
            <h1 className="text-white font-bold text-5xl md:text-6xl xl:text-9xl">Grow with data.</h1>

            <div className="flex justify-center items-center">
                <p className="text-white font-bold text-xl md:text-2xl xl:text-4xl py-3 pr-2">Fast, flexiable financing for</p>
                <ReactTyped className=" text-gray-500 font-bold text-xl md:text-2xl xl:text-4xl"
                strings={["BTB" , "BTC" , "SASS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
                ></ReactTyped>
            </div>
            <p className="text-gray-500 font-bold text-xl md:text-2xl xl:text-4xl text-center">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className="bg-[#00df9a] py-3 px-[45px] rounded-[12px] font-medium text-black my-6">Get Started</button>
        </div>
    )
}

export default Hero