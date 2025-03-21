import React from "react";
import laptop from "../Assets/laptop.jpg"

const Analytics = () => {

    return(
        <div className="w-full bg-white py-6">
            <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto "
             src={laptop} alt="#" />

            <div className="flex flex-col justify-center px-4">
            <p className="text-[#00df9a] uppercase  md:text-xl lg:text-2xl font-bold">Data Analaytics dashboard</p>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold py-2">Manage Data Analytics Centerally</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum corporis non voluptates cupiditate quo hic iure cum molestias illo, veniam est sunt. Quasi sequi quos ipsa aliquam et possimus?</p>
            <button className=" mx-auto py-3 px-6 text-[#00df9a] w-[200px] rounded-[12px] font-medium bg-black mt-6">Get Started</button>
            </div>
            </div>

        </div>
    )

}

export default Analytics