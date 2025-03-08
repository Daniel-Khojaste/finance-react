import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {

    return(
        <div className="w-full mt-[-96px] h-screen flex flex-col justify-center items-center">
            <p className="uppercase text-[#00df9a] font-bold text-xl  lg:text-3xl">Growing with data analytics</p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold py-3">Grow with the data.</h1>

            <div className="flex justify-center items-center">
                <p className="text-white py-2 font-bold text-2xl  lg:text-4xl pr-2">Fast, flexiable financing for</p>
                <ReactTyped className="text-gray-500 font-bold text-2xl  lg:text-4xl pr-2" 
                strings={['BTB', 'BTC' , 'SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
                >
                </ReactTyped>
            </div>

            <p className="text-gray-500 font-bold text-3xl  lg:text-4xl text-center pb-5 ">monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className="bg-[#00df9a] py-3 px-[60px] rounded-[12px] font-medium text-2xl">Get Started</button>
        </div>
    )
}

export default Hero