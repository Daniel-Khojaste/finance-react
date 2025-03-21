import React from "react";
import Single from "../Assets/single.png"
import Double from "../Assets/double.png"
import Triple from "../Assets/triple.png"

const Cards = () =>{

    return(
        <div className="bg-white text-black py-10">
            <div  className="max-w-[1240px] w-full mx-auto grid md:grid-cols-3 gap-8">
                <div className="cards flex flex-col items-center justify-center  shadow-xl mx-6 md:mx-0  my-4 p-4 rounded-md hover:scale-105 duration-500">
                    <img className="w-20 bg-transparent" src={Single} alt="" />
                    <h2 className="font-bold text-xl mt-5">Single User</h2>
                    <p className="font-bold text-3xl my-5">$149</p>
                    <div className="font-medium text-black w-full text-center">
                        <p className="border-b mx-6 py-3">500 GB Storage</p>
                        <p className="border-b mx-6 py-3">1 Granted User</p>
                        <p className="border-b mx-6 py-3">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] font-medium w-[200px] rounded-md py-3  my-6">Start Trail</button>
                </div>


                <div className="cards flex flex-col items-center justify-center shadow-xl mx-6 md:mx-0 my-4 lg:my-0 p-4 rounded-md bg-gray-50 hover:border-gray-400 border-2 hover:scale-105 duration-500">
                    <img className="w-20 bg-transparent" src={Double} alt="" />
                    <h2 className="font-bold text-xl mt-5">Double User</h2>
                    <p className="font-bold text-3xl my-5">$199</p>
                    <div className="font-medium text-black w-full text-center">
                        <p className="border-b mx-6 py-3">1000 GB Storage</p>
                        <p className="border-b mx-6 py-3">12 Granted User</p>
                        <p className="border-b mx-6 py-3">Send up to 4 GB</p>
                    </div>
                    <button className="bg-black text-[#00df9a] font-medium w-[200px] rounded-md py-3  my-6">Start Trail</button>
                </div>


                <div className="cards flex flex-col items-center justify-center shadow-xl mx-6 md:mx-0  my-4 p-4 rounded-md hover:scale-105 duration-500">
                    <img className="w-20 bg-transparent" src={Triple} alt="" />
                    <h2 className="font-bold text-xl mt-5">Triple User</h2>
                    <p className="font-bold text-3xl my-5">$239</p>
                    <div className="font-medium text-black w-full text-center">
                        <p className="border-b mx-6 py-3">2000 GB Storage</p>
                        <p className="border-b mx-6 py-3">3 Granted User</p>
                        <p className="border-b mx-6 py-3">Send up to 6 GB</p>
                    </div>
                    <button className="bg-[#00df9a] font-medium w-[200px] rounded-md py-3  my-6">Start Trail</button>
                </div>
            </div>

        </div>
    )
}

export default Cards